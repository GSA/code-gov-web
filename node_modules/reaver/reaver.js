'use strict';

var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

function isfile (file) {
  try {
    return fs.statSync(file).isFile();
  } catch (e) {
    return false;
  }
}

function notfile (file) {
  return !isfile(file);
}

function read (file) {
  return fs.readFileSync(file, { encoding: 'utf8' });
}

function readInlined (file) {
  var absolute = path.resolve(file);
  return absolute + ':' + read(absolute) + ';';
}

function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
}

function rev (file, data) {
  var hash = md5(data).slice(0, 8);
  var dir = path.dirname(file);
  var ext = path.extname(file);
  var filename = path.basename(file, ext) + '.' + hash + ext;
  var target = path.join(dir, filename);
  return target;
}

function api (files, options) {
  var manifest = {};
  var consider = options.consider || [];
  var considered = Array.isArray(consider) ? consider : [consider];
  var inlined = considered.filter(isfile).map(readInlined).join('');

  files.forEach(move);

  function move (file) {
    var absolute = path.resolve(file);
    if (notfile(absolute)) {
      return;
    }
    rename(absolute, rev(absolute, read(absolute) + inlined));
  }

  function rename (from, to) {
    manifest[from] = to;
    fs.renameSync(from, to);
  }

  return options && options.manifest ? manifest : null;
}

api.rev = rev;

module.exports = api;
