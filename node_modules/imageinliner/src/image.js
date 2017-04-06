var mime = require("mime");
var path = require("path");
var fs = require("fs");


var cleanXMLData = function(fileData) {
    // remove linebreaks
    fileData = fileData.replace(/(\r\n|\n|\r)/gm,'');
    // removes xml comments
    fileData = fileData.replace(/<!--[^>]*-->/g, '');
    // remove double whitespace
    fileData = fileData.replace(/\s/g, ' ');
    fileData = fileData.replace(/\s{2,}/g, ' ');
    // changes '' to ""
    fileData = fileData.replace(/\'/gm, '\"');
    // escape # (firefox stupidness)
    fileData = fileData.replace(/#/gm, '%23');


    return fileData;
};


var getFullPath = function(imagePath, cssFilePath, rootPath) {
    if(imagePath.charAt(0) === "/") {
        if(!rootPath) {
            throw "rootPath is not set, but " + imagePath + " requires rootImagePath";
        }
        return path.join(rootPath, imagePath);
    } else {
        return path.join(cssFilePath, imagePath);
    }
};

var createCSSBackgroundImage = function(inlineImages) {
    if(inlineImages.length === 0) {
        return;
    }

    var css = inlineImages.map(function(image) {
        return  "url('data:" + image.mimeType + ";"+ image.encoding +"," + image.imageData + "')";
    });
    return css.join(",");
};

var inlineImages = function(imagePaths, cssFilePath, options) {

    var inlinedImages = imagePaths.map(function(imagePath) {
        var imageData, encoding;

        var fullImagePath = getFullPath(imagePath, cssFilePath, options.rootImagePath);

        var mimeType = mime.lookup(fullImagePath);
        if(mimeType === "image/svg+xml") {
            imageData = fs.readFileSync(fullImagePath, "utf-8");
            imageData = cleanXMLData(imageData);
            encoding = "utf-8";

        } else {
            imageData = fs.readFileSync(fullImagePath).toString('base64');
            encoding = "base64";
        }

        return {
            imageData: imageData,
            encoding: encoding,
            mimeType: mimeType
        };
    });

    return createCSSBackgroundImage(inlinedImages);
};


module.exports = function (imagePaths, cssFilePath, options) {
    options = options || {};

    // if maxImageFileSize is defined (0 skips this step)
    // check if all images is is below the legal limit
    if(options.maxImageFileSize || options.maxImageFileSize > 0) {
        var allIsBelowLegalLimit = imagePaths.every(function(imagePath) {
            var fullImagePath = getFullPath(imagePath, cssFilePath, options.rootImagePath);
            return fs.statSync(fullImagePath).size < options.maxImageFileSize;
        });

        if(!allIsBelowLegalLimit) {
            return;
        }
    }
    return inlineImages(imagePaths, cssFilePath, options);
};


