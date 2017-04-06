/*












  This is what I call "yolo code"
  where I'm hacking it just to get it to work to be refactored later














*/
var loaderUtils = require('loader-utils');
var fs = require('fs');
var path = require('path');

// TODO(gdi2290): remove g flag


// using: regex, capture groups, and capture group variables.
var componentRegex = /@(Component|Directive)\({([\s\S]*?)}\)$/gm;
var checkComponentRegex = /(@Component\({[\s\S]*?}\))$/gm;
// TODO(gdi2290): become a regexp master to fix this
var componentClassRegex = /@(Component)\({([\s\S]*?)}\)\s*export\s*class\s*([\s\S]+)\s*(extends|implements|{)$/gm;
var templateUrlRegex = /templateUrl\s*:(.*)/g;
var templateRegex = /template\s*:(.*)/g;
var styleUrlsRegex = /styleUrls\s*:(\s*\[[\s\S]*?\])/g;
var styleRegex = /styles\s*:(\s*\[[\s\S]*?\])/g;
var stringRegex = /(['"])((?:[^\\]\\\1|.)*?)\1/g;
var selectorRegex = /selector\s*:\s*('|")(.*)('|"),?/;

var relativePathStart = '.' + path.sep;

function replaceStringsWithRequires(string) {
  return string.replace(stringRegex, function (match, quote, url) {
    if (url.charAt(0) !== '.') {
      url = relativePathStart + url;
    }
    return "require('" + url + "')";
  });
}

function dashCase(str) {
  return str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}


function Angular2ConventionsLoader(source, sourcemap) {
  var self = this;
  // Not cacheable during unit tests;
  self.cacheable && self.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  var cssExtension = '.css';
  var htmlExtension = '.html';
  var selectorPrefix = '';

  if (query.cssExtension && typeof query.cssExtension === 'string') {
    cssExtension = query.cssExtension;
  }
  if (query.htmlExtension && typeof query.htmlExtension === 'string') {
    htmlExtension = query.htmlExtension;
  }
  if (query.selectorPrefix && typeof query.selectorPrefix === 'string') {
    selectorPrefix = query.selectorPrefix;
  }

  if (typeof query.canUpdateSelector === 'undefined') {
    query.canUpdateSelector = true
  }


  // TODO(gdi2290): reuse component regexp
  // var defaultComponent = /@Component\(\)$/gm
  // if (defaultComponent.test(source)) {
  source = source.replace(/@Component\(\)/g, '@Component({})');
  // }
  // console.log('', checkComponentRegex, componentRegex, source)


  source = source.replace(componentRegex, function (match, decorator, metadata, offset, src) {
    if (decorator === 'Component' && templateUrlRegex.test(metadata)) {
      metadata = metadata
        .replace(templateUrlRegex, function (match, url) {
          // replace: templateUrl: './path/to/template.html'
          // with: template: require('./path/to/template.html')
          return 'template:' + replaceStringsWithRequires(url);
        })
    }
    if (decorator === 'Component' && styleUrlsRegex.test(metadata)) {
      metadata = metadata
        .replace(styleUrlsRegex, function (match, urls) {
          // replace: stylesUrl: ['./foo.css', "./baz.css", "./index.component.css"]
          // with: styles: [require('./foo.css'), require("./baz.css"), require("./index.component.css")]
          return 'styles:' + replaceStringsWithRequires(urls);
        });
    }

    // get relative file name
    var fileContext = self.request.split(self.context)
    var lastFileName = fileContext[fileContext.length - 1].replace(/\.[^/.]+$/g, '');

    if (lastFileName.indexOf(relativePathStart) === 0) {
      lastFileName = lastFileName.substr(relativePathStart.length);
    }

    var __selector;
    if (!(/selector\s*:\s*('|")(.*)('|"),?/.test(metadata))) {
      // grab classname and set selector
      // TODO(gdi2290): become a regexp master to fix this
      var __args = /@(Component|Directive)\({([\s\S]*?)}\)\s*export\s*class\s*([\s\S]+)\s*(extends|implements|{)$/m.exec(src.slice(offset));
      if (__args && __args[3] && query.canUpdateSelector) {
        var __className = __args[3].split(' ')[0];
        // if component dash case else [attr]
        __selector = (decorator === 'Component') ? dashCase(__className) : '[' + __className + ']';
        __selector = __selector.replace('-component', '');
        __selector = __selector.replace('Directive', '');
        __selector = __selector.replace('Component', '');
        metadata = 'selector: "' + selectorPrefix + __selector + '",\n' + metadata;
        __args = null;
      }
    } else if (/selector\s*:\s*('|")(.*)('|")/) {
      // grab selector from metadata
      var getSelector  = /selector\s*:\s*('|")(.*)('|")/.exec(metadata)
      __selector = getSelector[2];
    }
    var hasSameFileSelector = __selector && lastFileName.toLowerCase().indexOf(__selector.toLowerCase()) !== -1;

    if (decorator === 'Component' && !(/template\s*:(.*)/g.test(metadata))) {
      var _hasHtmlFile;
      // if selector and filename are the same
      if (hasSameFileSelector) {
        try {
          _hasHtmlFile = fs.statSync(path.join(self.context, lastFileName + htmlExtension));
        } catch(e) {}
      } else {
        try {
          _hasHtmlFile = fs.statSync(path.join(self.context, relativePathStart + __selector + htmlExtension));
        } catch(e) {
          metadata = 'template: "",' + metadata;
        }
      }
      // set file in metadata
      if (_hasHtmlFile) {
        metadata = 'template: require("' + relativePathStart + lastFileName + htmlExtension + '"),\n' + metadata;
      }
    }
    // do the same for styles
    if (decorator === 'Component' && !(/styles\s*:(\s*\[[\s\S]*?\])/g.test(metadata))) {
      var _hasCssFile;
      if (hasSameFileSelector) {
        try {
          _hasCssFile = fs.statSync(path.join(self.context, lastFileName + cssExtension));
        } catch(e) {}
      } else {
        try {
          _hasCssFile = fs.statSync(path.join(self.context, relativePathStart + __selector + cssExtension));
        } catch(e) {}
      }

      if (_hasCssFile) {
        metadata = 'styles: [require("' + relativePathStart + lastFileName + cssExtension + '")],\n' + metadata;
      }
    }
    // strip moduleId
    metadata = metadata.replace(/moduleId: module.id,/, '');

    // return updated metadata
    return '@' + decorator + '({' + metadata + '})';
  });

  // Support for tests
  if (self.callback) {
    self.callback(null, source, sourcemap)
  } else {
    return source;
  }
};
Angular2ConventionsLoader.default = Angular2ConventionsLoader;

module.exports = Angular2ConventionsLoader
