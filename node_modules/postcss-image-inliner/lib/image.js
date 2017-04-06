var debug = require('debug')('image-inliner');
var map = require('lodash.map');

var SVGO = require('svgo');
var svgo = new SVGO();
var Promise = require('bluebird');

// borrowed from https://github.com/filamentgroup/directory-encoder/blob/master/lib/svg-uri-encoder.js
function encodeSvg(file) {
    return encodeURIComponent(file.contents.toString('utf-8')
        // strip newlines and tabs
        .replace(/[\n\r]/gmi, '')
        .replace(/\t/gmi, ' ')
        // strip comments
        .replace(/<!--(.*(?=-->))-->/gmi, '')
        // replace
        .replace(/'/gmi, '\\i'))
        // encode brackets
        .replace(/\(/g, '%28').replace(/\)/g, '%29')
        // replace ' with "
        .replace(/'/gm, '"');
}

function computeDataUri(opts) {
    return function (file, key) {
        // if the url is SVG, let's compress and use the XML directly
        if (file.mime === 'image/svg+xml' && !opts.b64Svg) {
            return new Promise(function (resolve, reject) {
                svgo.optimize(file.contents.toString('utf-8'), function (result) {
                    debug('optimising svg');
                    if (result.error) {
                        debug('errored', result.error);
                        return reject(new Error(result.error));
                    }

                    resolve({
                        data: 'data:image/svg+xml;charset=US-ASCII,' + encodeSvg(file),
                        key: key
                    });
                });
            });
        }

        // otherwise we base64 encode the image
        return {
            data: 'data:' + file.mime + ';base64,' + new Buffer(file.contents, 'binary').toString('base64'),
            key: key
        };
    };
}

function getDataUri(res, opts) {
    var promises = map(res, computeDataUri(opts));

    return Promise.reduce(promises, function (uris, resource) {
        uris[resource.key] = resource.data;
        return uris;
    }, {});
}

module.exports.getDataUri = getDataUri;
