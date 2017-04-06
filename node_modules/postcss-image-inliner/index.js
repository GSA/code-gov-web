var postcss = require('postcss');
var Promise = require('bluebird'); // jshint ignore:line
var isString = require('lodash.isstring');
var defaults = require('lodash.defaults');
var debug = require('debug')('image-inliner');
var escape = require('lodash.escaperegexp');
var last = require('lodash.last');
var reduce = require('lodash.reduce');
var filesize = require('filesize');
var getResource = require('asset-resolver').getResource;
var getDataUri = require('./lib/image').getDataUri;

module.exports = postcss.plugin('postcss-image-inliner', function (opts) {
    opts = defaults(opts || {}, {
        assetPaths: [],
        maxFileSize: 10240,
        b64Svg: false,
        strict: false
    });

    if (isString(opts.assetPaths)) {
        opts.assetPaths = [opts.assetPaths];
    }

    opts.assetPaths.push(process.cwd());

    function assertSize(resource) {
        var encoding = resource.mime === 'image/svg+xml' ? 'utf-8' : 'binary';
        var size = Buffer.byteLength(resource.contents, encoding);
        if (opts.maxFileSize && opts.maxFileSize < size) {
            var msg = 'Too big.  ' + filesize(size) + ' exceeds the allowed ' + filesize(opts.maxFileSize);
            debug(msg);
            return Promise.reject(new Error(msg));
        }

        return resource;
    }

    function resolveUrl(filepath) {
        return getResource(filepath, {
            base: opts.assetPaths,
            filter: assertSize
        }).catch(function (err) {
            debug(err.message, filepath, 'could not be resolved');
        });
    }

    function loop(cb) {
        var matcher = /url\(\s*(?:['"]*)(?!['"]*data:)(.*?)(?:['"]*)\s*\)/gm;
        return function (decl) {
            var match;
            while ((match = matcher.exec(decl.value)) !== null) {
                cb(decl, last(match));
            }
        };
    }

    function compact(data) {
        return reduce(data, function (acc, file, key) {
            if (file && file.mime) {
                acc[key] = file;
            }
            return acc;
        }, {});
    }

    return function (css) {
        var replacements = {};
        var filter = /^(background(?:-image)?)|(content)|(cursor)/;
        css.walkDecls(filter, loop(function (decl, url) {
            replacements[url] = resolveUrl(url);
        }));

        return Promise.props(replacements)
            .then(compact)
            .then(function (file) {
                return getDataUri(file, opts);
            })
            .then(function (data) {
                css.walkDecls(filter, loop(function (decl, url) {
                    if (data[url]) {
                        var regexp = new RegExp('[\'"]?' + escape(url) + '[\'"]?');
                        decl.value = decl.value.replace(regexp, '\'' + data[url] + '\'');
                        debug(url, 'successfully replaced with ', data[url]);
                    } else {
                        debug(url, 'failed');
                        if (opts.strict) {
                            throw new Error('No file found for ' + url);
                        }
                    }
                }));
            }).catch(function (err) {
                debug(err);
                return new Promise(function (resolve, reject) {
                    reject(err);
                });
            });
    };
});
