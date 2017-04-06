'use strict';
var meow = require('meow');
var _ = require('lodash');
var stdin = require('get-stdin');
var updateNotifier = require('update-notifier');
var filterCss = require('./');
var pkg = require('./package.json');
var ok;

var help = [
	'Usage: filtercss <input> [<option>]',
	'',
	'Options:',
	'   -i, --ignore  RegExp, selector @type to ignore',
	'   -S, --skipSelectors Don\'t match selectors',
	'   -T, --skipTypes Don\'t match types',
	'   -P, --skipDeclarationProperties Don\'t match declaration properties',
	'   -V, --skiphDeclarationValues Don\'t match declaration vakues',
	'   -M, --skipMedia Don\'t match media'
].join('\n');



var cli = meow({help: help}, {alias: {
	i: 'ignore',
	S: 'skipSelectors',
	T: 'skipTypes',
	P: 'skipDeclarationProperties',
	V: 'skiphDeclarationValues',
	M: 'skipMedia'
}});

if (cli.flags['update-notifier'] !== false) {
	updateNotifier({pkg: pkg}).notify();
}

function go(data) {
	ok = true;
	if (_.isString(cli.flags.ignore) || _.isRegExp(cli.flags.ignore)) {
		cli.flags.ignore = [cli.flags.ignore];
	}
	var ignores = _.map(cli.flags.ignore || [], function(ignore) {
		// check regex
		var match = ignore.match(/^\/(.*)\/([igmy]+)?$/);

		if (match) {
			return new RegExp(match[1],match[2]);
		}
		return ignore;
	});

	if (!data) {
		cli.showHelp();
		return;
	}


	var diff = filterCss(data,ignores, {
		matchSelectors: !cli.flags.skipSelectors,
		matchTypes: !cli.flags.skipTypes,
		matchDeclarationProperties: !cli.flags.skipDeclarationProperties,
		matchDeclarationValues: !cli.flags.skiphDeclarationValues,
		matchMedia: !cli.flags.skipMedia
	});
	console.log(diff);
	process.exit();
}

function die() {
	if (ok) {
		return;
	}
	cli.showHelp();
}


if (cli.input[0]) {
	go(cli.input[0]);
} else {
	// get stdin
	stdin().then(go);
	setTimeout(die, 200);
}
