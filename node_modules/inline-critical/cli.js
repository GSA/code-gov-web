#!/usr/bin/env node
'use strict';
var os = require('os');
var fs = require('fs');
var meow = require('meow');
var indentString = require('indent-string');
var stdin = require('get-stdin');
var css = require('css');
var _ = require('lodash');
var inlineCritical = require('./');

var ok;
var help = [
    'Usage: inline-critical <input> [<option>]',
    '',
    'Options:',
    '   -c, --css       Path to CSS file',
    '   -h, --html      Path to HTML file',
    '   -i, --ignore    Skip matching stylesheets',
    '   -m, --minify    Minify the styles before inlining (default)',
    '   -e, --extract   Remove the inlined styles from any stylesheets referenced in the HTML',
    '   -b, --base      Is used when extracting styles to find the files references by `href` attributes',
    '   -s, --selector  Optionally defines the element used by loadCSS as a reference for inlining'
];

var cli = meow({
    help: help
}, {
    alias: {
        c: 'css',
        h: 'html',
        i: 'ignore',
        m: 'minify',
        b: 'base',
        e: 'extract',
        s: 'selector'
    }
});

// cleanup cli flags
cli.flags = _.reduce(cli.flags, function (res, val, key) {
    if (key.length <= 1) {
        return res;
    }

    switch (key) {
        case 'css':
        case 'html':
            try {
                res[key] = read(val);
            } catch (err) {
            }
            break;
        case 'base':
            res.basePath = val;
            break;
        case 'ignore':
            if (_.isString(val) || _.isRegExp(val)) {
                val = [val];
            }
            res.ignore = _.map(val || [], function (ignore) {
                // check regex
                var match = ignore.match(/^\/(.*)\/([igmy]+)?$/);

                if (match) {
                    return new RegExp(_.escapeRegExp(match[1]), match[2]);
                }
                return ignore;
            });
            break;
        default:
            res[key] = val;
            break;
    }

    return res;
}, {});

function error(err) {
    process.stderr.write(indentString('Error: ' + (err.message || err), 4));
    process.stderr.write(os.EOL);
    process.stderr.write(indentString(help.join(os.EOL), 4));
    process.exit(1);
}

function read(file) {
    try {
        return fs.readFileSync(file, 'utf8');
    } catch (err) {
        error(err);
    }
}

function run(data) {
    var opts = _.defaults(cli.flags, {basePath: process.cwd()});
    ok = true;

    if (data) {
        // detect html
        try {
            css.parse(data);
            opts.css = data;
        } catch (err) {
            opts.html = data;
        }
    }

    _.forEach(cli.input, function (file) {
        var tmp = read(file);
        try {
            css.parse(tmp);
            opts.css = tmp;
        } catch (err) {
            opts.html = tmp;
        }
    });

    if (!opts.html || !opts.css) {
        cli.showHelp();
    }

    try {
        var out = inlineCritical(opts.html, opts.css, opts);
        process.stdout.write(out.toString(), process.exit);
    } catch (err) {
        error(err);
    }
}

// get stdin
stdin().then(run);
setTimeout(function () {
    if (ok) {
        return;
    }
    run();
}, 100);
