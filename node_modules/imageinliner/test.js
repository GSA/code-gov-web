#!/usr/bin/env node


// based on https://github.com/kjbekkelund/js-build

require('shelljs/make');
require('colors');

var npmBin = require('npm-bin');
var glob = require('glob');
var path = require('path');

var isWin = (process.platform === 'win32');

/*** CONFIG ********/

var webapp = path.join('src'),
    config = path.join('config'),

    jshintConfig = path.join(config, 'jshint.json');


/*** TARGETS ********/

target.all = function() {
    target.jshint();
    target.test();
};

target.jshint = function() {
    var files = glob.sync(path.join(webapp, '*.js'));
    files.push(path.join('bin', 'imageinliner'));

    section('Running JSHint');
    bin('jshint', ['--config ' + jshintConfig, files.join(' ')]);
};

target.test = function() {
    bin('mocha');
    // echo();
    // done(res);
};


/*** HELPERS ********/

var bin = function(name, arguments, options) {
    var res = npmBin(name, arguments, options)
    done(res);
};

var done = function(res) {
    if (res.code === 0) {
        success();
    } else {
        fail();
    }
};

var section = function(header) {
    echo();
    echo('    ' + header.bold);
};

var success = function(text) {
    text = text || 'done';
    var s = isWin ? '»' : '✓';
    echo('    ' + s.green + ' ' + text.green);
};

var fail = function(text) {
    text = text || 'failed';
    var s = isWin ? '×' : '✘';
    echo('    ' + s.red + ' ' + text.red);
    exit(1);
};