'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var glob = require('glob');
var test = require('tape');
var cave = require('..');

load().forEach(assert);

function g (type) {
  return glob.sync(path.resolve('./test/fixtures/*-' + type));
}

function load () {
  var all = g('all.css');
  var critical = g('critical.css');
  var diff = g('diff.css');
  var _o = _.zipObject.bind(_, ['all', 'critical', 'diff']);
  var fixtures = _.zip(all, critical, diff).map(_o);
  return fixtures;
}

function read (file) {
  return fs.readFileSync(file, { encoding: 'utf8' });
}

function assert (fixture, key) {
  test('test case fixture: ' + key, function (t) {
    var diff = cave(fixture.all, { css: read(fixture.critical) });

    t.equal(diff, read(fixture.diff), 'diff should match expectation');
    t.end();
  });
}
