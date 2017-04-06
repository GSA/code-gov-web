/**
 * Module to inline styles while loading the existing stylesheets async
 *
 * @author Ben Zörb @bezoerb https://github.com/bezoerb
 * @copyright Copyright (c) 2014 Ben Zörb
 *
 * Licensed under the MIT license.
 * http://bezoerb.mit-license.org/
 * All rights reserved.
 */
'use strict';
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var UglifyJS = require('uglify-js');
var cave = require('cave');
var reaver = require('reaver');
var cheerio = require('cheerio');
var render = require('dom-serializer');
var parse = require('cheerio/lib/parse');
var CleanCSS = require('clean-css');
var slash = require('slash');
var normalizeNewline = require('normalize-newline');
var resolve = require('resolve');
var detectIndent = require('detect-indent');

/**
 * Get loadcss + cssrelpreload script
 *
 * @returns {string}
 */
function getScript() {
    var loadCssMain = resolve.sync('fg-loadcss');
    var loadCssBase = path.dirname(loadCssMain);

    var loadCSS = read(loadCssMain) + read(path.join(loadCssBase, 'cssrelpreload.js'));
    return UglifyJS.minify(loadCSS, {fromString: true}).code;
}

/**
 * Fixup slashes in file paths for windows
 *
 * @param {string} str
 * @return {string}
 */
function normalizePath(str) {
    return process.platform === 'win32' ? slash(str) : str;
}

/**
 * Read file *
 * @param {string} file
 * @returns {string}
 */
function read(file) {
    return fs.readFileSync(file, 'utf8');
}

/**
 * Get the indentation of the link tags
 * @param html
 * @param $el
 */
function getIndent(html, $el) {
    var regName = new RegExp(_.escapeRegExp(_.get($el, 'name')));
    var regHref = new RegExp(_.escapeRegExp(_.get($el, 'attribs.href')));
    var regRel = new RegExp(_.escapeRegExp(_.get($el, 'attribs.rel')));
    var lines = _.filter(html.split(/[\r\n]+/), function (line) {
        return regName.test(line) && regHref.test(line) && regRel.test(line);
    });
    return detectIndent(lines.join('\n')).indent;
}

module.exports = function (html, styles, options) {
    if (!_.isString(html)) {
        html = String(html);
    }
    var $ = cheerio.load(html, {
        decodeEntities: false
    });

    var allLinks = $('link[rel="stylesheet"], link[rel="preload"][as="style"]').filter(function () {
        return !$(this).parents('noscript').length;
    });

    var links = allLinks.filter('[rel="stylesheet"]');

    var o = _.assign({
        minify: true
    }, options || {});

    var target = o.selector || allLinks.get(0) || $('script').get(0);
    var indent = detectIndent(html).indent;
    var targetIndent = getIndent(html, target);
    var $target = $(target);

    if (_.isString(o.ignore)) {
        o.ignore = [o.ignore];
    }

    if (o.ignore) {
        links = _.filter(links, function (link) {
            var href = $(link).attr('href');
            return _.findIndex(options.ignore, function (arg) {
                return (_.isRegExp(arg) && arg.test(href)) || arg === href;
            }) === -1;
        });
    }

    // minify if minify option is set
    if (o.minify) {
        styles = new CleanCSS().minify(styles).styles;
    }

    // insert inline styles right before first <link rel="stylesheet" />
    $target.before([
        '<style type="text/css">',
        indent + styles.replace(/(\r\n|\r|\n)/g, '$1' + targetIndent + indent).replace(/^[\s\t]+$/g, ''),
        '</style>', ''
    ].join('\n' + targetIndent).replace(/(\r\n|\r|\n)[\s\t]+(\r\n|\r|\n)/g, '$1$2'));

    if (links.length > 0) {
        // modify links and ad clones to noscript block
        $(links).each(function (idx, el) {
            if (o.extract && !o.basePath) {
                throw new Error('Option `basePath` is missing and required when using `extract`!');
            }

            var $el = $(el);
            var elIndent = getIndent(html, el);

            if (o.extract) {
                var href = $el.attr('href');
                var file = path.resolve(path.join(o.basePath, href));
                if (fs.existsSync(file)) {
                    var diff = normalizeNewline(cave(file, {css: styles}));
                    fs.writeFileSync(reaver.rev(file, diff), diff);
                    $el.attr('href', normalizePath(reaver.rev(href, diff)));
                }
            }

            // add each fallback right behind the current style to keep source order when ignoring stylesheets
            $el.after('\n' + elIndent + '<noscript>' + render(this) + '</noscript>');

            // add preload atttibutes to actual link element
            $el.attr('rel', 'preload');
            $el.attr('as', 'style');
            $el.attr('onload', 'this.rel=\'stylesheet\'');
        });

        // add loadcss + cssrelpreload polyfill
        var scriptAnchor = $('link[rel="stylesheet"], noscript').filter(function () {
            return !$(this).parents('noscript').length;
        }).last().get(0);

        $(scriptAnchor).after('\n' + targetIndent + '<script>' + getScript() + '</script>');
    }

    var dom = parse($.html());
    var markup = render(dom);

    return new Buffer(markup);
};
