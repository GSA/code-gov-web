'use strict';

var _ = require('lodash');
var fs = require('fs');
var css = require('css');

function api (stylesheet, options) {
  var sheet = css.parse(read(stylesheet));
  var sheetRules = sheet.stylesheet.rules;
  var removables = css.parse(options.css);

  removables.stylesheet.rules.forEach(inspectRule);
  _.forEachRight(sheetRules, removeEmptyMedia);

  return result();

  function inspectRule (inspected, parent) {
    var simpler = omitRulePosition(inspected);
    var forEachVictim = typeof parent === 'number';
    if (forEachVictim) {
      parent = false;
    }
    if (inspected.type === 'rule') {
      if (parent) {
        _(sheetRules)
          .where({ type: 'media', media: parent.media })
          .pluck('rules')
          .value()
          .forEach(removeMatches);
      } else {
        removeMatches(sheetRules);
      }
    } else if (inspected.type === 'media') {
      inspected.rules.forEach(inspectRuleInMedia);
    }

    function inspectRuleInMedia (rule) {
      inspectRule(rule, inspected);
    }

    function removeMatches (rules) {
      _.remove(rules, perfectMatch).length; // remove perfect matches
      _.filter(rules, byDeclarations).forEach(stripSelector); // strip selector from partial matches
    }

    function perfectMatch (rule) {
      return _.isEqual(omitRulePosition(rule), simpler);
    }

    function byDeclarations (rule) {
      return _.isEqual(omitRulePosition(rule).declarations, simpler.declarations);
    }

    function stripSelector (rule) {
      rule.selectors = _.difference(rule.selectors, inspected.selectors);
    }
  }

  function removeEmptyMedia (rule, i) {
    if (rule.type === 'media' && rule.rules.length === 0) {
      sheetRules.splice(i, 1);
    }
  }

  function result () {
    return css.stringify(sheet) + '\n';
  }
}

function omitPosition (declaration) {
  return _.omit(declaration, 'position');
}

function omitRulePosition (rule) {
  if (rule.type !== 'rule') {
    return false;
  }
  var result = omitPosition(rule);
  result.declarations = result.declarations.map(omitPosition);
  return result;
}

function read (file) {
  return fs.readFileSync(file, { encoding: 'utf8' });
}

module.exports = api;
