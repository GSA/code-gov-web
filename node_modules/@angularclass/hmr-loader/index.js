var utils = require('loader-utils');

var bootstrapModule = /(\.bootstrapModule|\.bootstrapModuleFactory)\((.+)\)/gm;
var bootLoader = /((hmr_1|r)\.bootloader)\((.+)\)/gm;

function Angular2HMRLoader(source, sourcemap) {
  var self = this;
  // Not cacheable during unit tests;
  self.cacheable && self.cacheable();
  var query = utils.parseQuery(self.query);

  function done(src, srcmap) {
    // Support for tests
    if (self.callback) {
      self.callback(null, src, srcmap);
    } else {
      return src;
    }
  }

  if (query.prod) {
    source = source.replace(bootLoader, function (match, boot, ngmodule, main, offset, src) {
        // return updated metadata
        return '(document.readyState === "complete") ? ' + main +
        '() : document.addEventListener("DOMContentLoaded", function() { ' + main + '()' + ' })';
      });
    return done(source, sourcemap);
  }

  source = source.replace(bootstrapModule, function (match, boot, ngmodule, offset, src) {
    // return updated metadata
    var newLine = ' ';
    if (query.pretty) {
      newLine = '\n';
    }

    return boot + '(' + ngmodule + ')' +
    '.then(function(MODULE_REF) {'+ newLine +
    '  if (module["hot"]) {'+ newLine +
    '    module["hot"]["accept"]();'+ newLine +
    '    '+ newLine +
    '    if (MODULE_REF.instance["hmrOnInit"]) {'+ newLine +
    '      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);'+ newLine +
    '    }'+ newLine +
    '    if (MODULE_REF.instance["hmrOnStatus"]) {'+ newLine +
    '      module["hot"]["apply"](function(status) {'+ newLine +
    '        MODULE_REF.instance["hmrOnStatus"](status);'+ newLine +
    '      });'+ newLine +
    '    }'+ newLine +
    '    if (MODULE_REF.instance["hmrOnCheck"]) {'+ newLine +
    '      module["hot"]["check"](function(err, outdatedModules) {'+ newLine +
    '        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);'+ newLine +
    '      });'+ newLine +
    '    }'+ newLine +
    '    if (MODULE_REF.instance["hmrOnDecline"]) {'+ newLine +
    '      module["hot"]["decline"](function(dependencies) {'+ newLine +
    '        MODULE_REF.instance["hmrOnDecline"](dependencies);'+ newLine +
    '      });'+ newLine +
    '    }'+ newLine +
    '    module["hot"]["dispose"](function(store) {'+ newLine +
    '      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);'+ newLine +
    '      MODULE_REF.destroy();'+ newLine +
    '      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);'+ newLine +
    '    });'+ newLine +
    '  }'+ newLine +
    '  return MODULE_REF;'+ newLine +
    '})'
  });

  return done(source, sourcemap)
};

Angular2HMRLoader.default = Angular2HMRLoader;

module.exports = Angular2HMRLoader
