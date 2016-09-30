var path = require('path');

// Helper functions
var ROOT = path.resolve(__dirname, '..');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server$/.exec(process.argv[1]));
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function prepend(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) { args = [args]; }
  return extensions.reduce(function(memo, val) {
      return memo.concat(val, args.map(function(prefix) {
          return prefix + val;
      }));
  }, ['']);
}

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.checkNodeImport = checkNodeImport;
exports.prepend = prepend;
