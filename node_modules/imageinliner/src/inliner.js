var parse = require('css-parse');
var stringify = require('css-stringify');
var fs = require("fs");
var path = require("path");
var image = require("./image.js");


var multipleExec = function(reg, matcher, callback, context) {

    var searchData = matcher;
    var search = reg.exec(searchData);
    var offset = 0;

    while (search) {
        var fullMatch = search[0];

        var start = search.index + offset;
        var endIndex = start + fullMatch.length;

        callback.call(context || this, search);

        offset = endIndex;

        searchData = matcher.substr(offset);

        search = reg.exec(searchData);
    }
};

var getImageUrl = function (background) {
    var reg = /url\((.*?)\)/;
    var imageUrls = [];

    multipleExec(reg, background, function (extracted) {
        var imagePath = extracted[1];
        imagePath = imagePath.replace(/\"|\'/g, "");

        // do not inline images already inlined
        // starting with data:
        if(imagePath.indexOf("data:") !== 0) {
            imageUrls.push(imagePath);
        }
    });

    return imageUrls;
};

var inlineDeclarations = function(declarations, imageBasePath, options) {
    if(!declarations) {
        return;
    }

    // Take all declarations for that selector
    for (var i = 0, length = declarations.length; i < length; i++) {
        var declaration = declarations[i];

        // find background declarations,
        if(declaration.property && declaration.property.indexOf("background") > -1) {

            // with a url()
            var backgroundImages = getImageUrl(declaration.value);
            if(backgroundImages.length === 0) {
                break;
            }

            // where images is below the legal maxImageFileSize
            var inlinedBackground = image(backgroundImages, imageBasePath, options);
            if(!inlinedBackground) {
                break;
            }

            // and add data-uri background images declatration after the current
            declarations.splice(i+1, 0, {
                type: 'declaration',
                property: 'background-image',
                value: inlinedBackground
            });
            // add to length of the array

            length++;
            // and skip the newly added for next run-loop
            i++;
        }
    }
};

var inlineImages = function(cssRules, imageBasePath, options) {
    // loop trough all selectors (rules)
    cssRules.forEach(function(rules, index) {
        var declarations = rules.declarations;

        // recursive loop for nested rules
        if(rules.rules) {
            inlineImages(rules.rules, imageBasePath, options);
        }

        inlineDeclarations(declarations, imageBasePath, options);

    });
};

var process = function(css, cssBasePath, options) {
    options = options || {};
    var parsedCss = parse(css);

    inlineImages(parsedCss.stylesheet.rules, cssBasePath, options);

    return stringify(parsedCss, { compress: options.compressOutput });
};

exports.css = function (css, options) {
    if(!options.cssBasePath) {
        throw "cssBasePath has to be set in order to find image files";
    }

    return process(css, options.cssBasePath, options);
};

exports.file = function (cssFile, options) {
    var cssData = fs.readFileSync(cssFile, "utf-8");

    return process(cssData, path.dirname(cssFile), options);
};