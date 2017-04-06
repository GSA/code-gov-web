#!/usr/bin/env node
'use strict';
var meow = require('meow');
var resolver = require('./');

var cli = meow({
	help: [
		'Usage',
		'asset-resolver [input]',
		'',
		'Options',
		'  -b --base  List of directories/urls where we should start looking for assets. [Default: process.cwd()]',
		'',
		'Examples',
		'$ asset-resolver \'my.svg\' -b \'some/directory\' -b \'http://some.domain/assets\'',
		'<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
		'<svg>',
		'...',
		'</svg>'
	]
}, {alias: {b: 'base'}});

resolver.getResource(cli.input[0], cli.flags).then(function (resource) {
	console.log(resource.contents);
}).catch(function (err) {
	console.error(err.message || err);
});
