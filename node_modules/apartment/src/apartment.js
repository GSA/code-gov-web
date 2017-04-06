'use strict';

var _ = require('lodash');
var css = require('css');

function toRegExp (text) { return new RegExp(text); }
function toRegExpExact (text) { return new RegExp('^' + text + '$'); }

function api (stylesheet, options) {
  var sheet = css.parse(stylesheet);
  var sheetRules = sheet.stylesheet.rules;
  var o = options || {};

  if (!Array.isArray(o.properties)) { o.properties = []; }
  if (!Array.isArray(o.selectors)) { o.selectors = []; }

  var props = o.properties.map(toRegExpExact);
  var selectors = o.selectors.map(toRegExp);

  inspectRules(sheetRules);
  _.forEachRight(sheetRules, inspectRuleset);

  return result();

  function inspectRuleset (inspected) {
    if (inspected.type === 'media') {
      inspected.rules.forEach(function (rule) {
        inspectRulesetInMedia(rule, inspected);
      });
    }
  }

  function inspectRulesetInMedia (rule, parent) {
    if (rule.type === 'rule') {
      _(sheetRules)
        .where({ type: 'media', media: parent.media })
        .pluck('rules')
        .value()
        .forEach(inspectRules);
    }
  }

  function inspectRules (rules) {
    _.forEach(rules, inspectDeclarations);
    _.remove(rules, matchesSelector);
  }

  function inspectDeclarations (rule) {
    if (rule.declarations) {
      rule.declarations = rule.declarations.filter(keepPropertyDeclaration);
    }
  }

  function matchesSelector (rule) {
    return _.some(rule.selectors, function (selector) {
      return _.some(selectors, function (comparer) {
          return comparer.test(selector);
        });
    });
  }

  function keepPropertyDeclaration (declaration) {
    return props.every(notMatching);
    function notMatching (prop) {
      return prop.test(declaration.property) === false;
    }
  }

  function result () {
    return css
      .stringify(sheet)
      .replace(/^\n*/, '')
      .replace(/\n*$/, '\n');
  }
}

module.exports = api;
