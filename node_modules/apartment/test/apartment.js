'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var glob = require('glob');
var test = require('tape');
var apartment = require('..');

load().forEach(assert);

function g (type) {
  return glob.sync(path.resolve('./test/fixtures/*-' + type));
}

function load () {
  var input = g('input.css');
  var options = g('options.json');
  var result = g('result.css');
  var _o = _.zipObject.bind(_, ['input', 'options', 'result']);
  var fixtures = _.zip(input, options, result).map(_o);
  return fixtures;
}

function read (file) {
  return fs.readFileSync(file, { encoding: 'utf8' });
}

function assert (fixture, key) {
  test('test case fixture: ' + key, function (t) {
    var diff = apartment(read(fixture.input), JSON.parse(read(fixture.options)));
    t.equal(read(fixture.result), diff, 'result should match expectation');
    t.end();
  });
}
