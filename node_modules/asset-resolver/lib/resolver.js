/**
 * Created by ben on 17.09.15.
 */
var fs = require('fs');
var path = require('path');
var url = require('url');
var request = require('request');
var mime = require('mime');
var Bluebird = require('bluebird');
var debug = require('debug')('asset-resolver');
var result = require('lodash/result');
var reduce = require('lodash/reduce');
var globby = require('globby');

var cache = {};

Bluebird.promisifyAll(fs);

function isUrl(resource) {
	return /(^\/\/)|(:\/\/)/.test(resource);
}

function handle(filter) {
	return function (resource) {
		debug('handle request', resource.path);
		return Bluebird.resolve(resource)
			.then(filter)
			.then(function (result) {
				if (!result) {
					debug('FAILED');
					return Bluebird.reject(new Error(resource.path + ' rejected by filter'));
				}
				debug('Passed filter:', resource.path);
				return resource;
			});
	};
}

/**
 * Get external resource
 * @param {string} resource
 * @returns {Promise}
 */
function requestAsync(resource) {
	var settings = {
		followRedirect: true,
		encoding: null
	};
	return new Bluebird(function (resolve, reject) {
		// handle protocol-relative urls
		resource = url.resolve('http://te.st', resource);
		request(resource, settings, function (err, resp, body) {
			var msg;
			if (err) {
				debug('Url failed:', err.message || err);
				return reject(err);
			}
			if (resp.statusCode !== 200) {
				msg = 'Wrong status code ' + resp.statusCode + ' for ' + resource;
				debug(msg);
				return reject(new Error(msg));
			}

			var mimeType = result(resp, 'headers.content-type') || mime.lookup(resource);

			resolve({
				contents: body,
				path: resource,
				mime: mimeType
			});
		});
	});
}

/**
 * Get local resource
 * @param {string} resource
 * @returns {Promise}
 */
function readAsync(resource) {
	return fs.readFileAsync(resource).then(function (body) {
		var mimeType = mime.lookup(resource);

		debug('Fetched:', resource);

		return Bluebird.resolve({
			contents: body,
			path: resource,
			mime: mimeType
		});
	});
}

function join(base, file) {
	if (isUrl(file)) {
		return file;
	}
	if (isUrl(base)) {
		if (!/\/$/.test(base)) {
			base += '/';
		}
		return url.resolve(base, file);
	}

	return path.join(base, file);
}

function glob(base) {
	return reduce(base, function (res, val) {
		if (isUrl(val)) {
			res.push(val);
			return res;
		}
		return res.concat(globby.sync([val]));
	}, []);
}

function getResource(base, file, opts) {
	var resource = join(base, file);
	if (cache[resource]) {
		return cache[resource].then(handle(opts.filter));
	}

	if (isUrl(resource)) {
		cache[resource] = requestAsync(resource, opts);
	} else {
		cache[resource] = readAsync(resource, opts);
	}
	return cache[resource].then(handle(opts.filter));
}

module.exports.getResource = getResource;
module.exports.glob = glob;
