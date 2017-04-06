const path = require('path');
const fs = require('fs');
const has = require('lodash.has');

function createFile(file) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(file, '', function (err) {
      if (err) return reject(err);
      return resolve(true);
    });
  });
}

function CreateFilePlugin(options) {
  options = options || {};

  this.files = options.files || [];
}

CreateFilePlugin.prototype.apply = function apply(compiler) {
  let outputPath;

  if (has(compiler, 'options.output.path')) outputPath = compiler.options.output.path;

  if (!outputPath) {
    throw new Error('output.path is not defined. Define output.path.');
  }

  compiler.plugin('emit', (compilation, callback) => {
    if (this.files.length) {
      return Promise.all(
        this.files.map((file) => createFile(path.join(outputPath, file)))
      )
      .then(() => {
        this.files = [];
        callback();
      });
    }

    callback();
  });
};

CreateFilePlugin['default'] = CreateFilePlugin;
module.exports = CreateFilePlugin;
