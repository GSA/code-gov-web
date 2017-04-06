/**
 * Created by ben on 17.09.15.
 */
var os = require('os');
var toarray = require('lodash/toArray');
var defaults = require('lodash/defaults');
var map = require('lodash/map');
var debug = require('debug')('asset-resolver');
var Bluebird = require('bluebird');
var resolver = require('./lib/resolver');

module.exports.getResource = function (file, opts) {
	opts = defaults(opts || {}, {
		base: [process.cwd()],
		filter: function () {
			return true;
		}
	});

	if (typeof opts.base === 'string') {
		opts.base = [opts.base];
	}

	opts.base = resolver.glob(toarray(opts.base));

	return Bluebird.any(map(opts.base, function (base) {
		return resolver.getResource(base, file, opts);
	})).catch(Bluebird.AggregateError, function (errs) {
		var msg = ['The file "' + file + '" could not be resolved because of:'].concat(map(errs, 'message'));
		debug(msg);
		return Bluebird.reject(new Error(msg.join(os.EOL)));
	});
};
