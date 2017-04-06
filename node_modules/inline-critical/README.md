# inline-critical

Inline critical-path css and load the existing stylesheets asynchronously.
Existing link tags will also be wrapped in ```<noscript>``` so the users with javscript disabled will see the site rendered normally.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Build Status][appveyor-image]][appveyor-url] [![Dependency Status][depstat-image]][depstat-url] [![Download][dlcounter-image]][dlcounter-url] [![Coverage Status][coveralls-image]][coveralls-url]

## Installation

This module is installed via npm:

``` bash
$ npm install inline-critical
```

## Example Usage

``` js
var inline = require('inline-critical');
var html = fs.readFileSync('test/fixtures/index.html', 'utf8');
var critical = fs.readFileSync('test/fixtures/critical.css', 'utf8');

var inlined = inline(html, critical);
```

## Example Usage ignoring stylesheet per regex


``` js
var inline = require('inline-critical');
var html = fs.readFileSync('test/fixtures/index.html', 'utf8');
var critical = fs.readFileSync('test/fixtures/critical.css', 'utf8');

var inlined = inline(html, critical, {
  ignore: [/bootstrap/]
});
```

## CLI

inline-critical works well with standard input. 
You can either pass in the html 
```bash
cat index.html | inline-critical critical.css
```
or just flip things around
```bash
cat critical.css | inline-critical index.html
```
or pass in the fileas as an option
```bash
inline-critical critical.css index.html
```
without having to worry about the correct order
```bash
inline-critical index.html critical.css
```
Run `inline-critical --help` to see the list of options.

## inline(html, styles, options?)

- `html` is the HTML you want to use to inline your critical styles, or any other styles
- `styles` are the styles you're looking to inline
- `options` is an optional configuration object
  - `minify` will minify the styles before inlining (default: true)
  - `extract` will remove the inlined styles from any stylesheets referenced in the HTML
  - `basePath` will be used when extracting styles to find the files references by `href` attributes
  - `ignore` ignore matching stylesheets when inlining.
  - `selector` defines the element used by loadCSS as a reference for inlining.

## License

MIT

[npm-url]: https://npmjs.org/package/inline-critical
[npm-image]: https://badge.fury.io/js/inline-critical.svg

[travis-url]: https://travis-ci.org/bezoerb/inline-critical
[travis-image]: https://secure.travis-ci.org/bezoerb/inline-critical.svg?branch=master

[appveyor-url]: https://ci.appveyor.com/project/bezoerb/inline-critical/branch/master
[appveyor-image]: https://ci.appveyor.com/api/projects/status/qb9esocjkpp6hw3q/branch/master?svg=true

[depstat-url]: https://david-dm.org/bezoerb/inline-critical
[depstat-image]: https://david-dm.org/bezoerb/inline-critical.svg

[dlcounter-url]: https://www.npmjs.com/package/inline-critical
[dlcounter-image]: https://img.shields.io/npm/dm/inline-critical.svg

[coveralls-url]: https://coveralls.io/github/bezoerb/inline-critical?branch=master
[coveralls-image]: https://coveralls.io/repos/github/bezoerb/inline-critical/badge.svg?branch=master
