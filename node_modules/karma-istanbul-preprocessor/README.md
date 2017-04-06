# karma-istanbul-preprocessor
A small preprocessor to help merge different instrumentation runners into an aggregate tool like [karma-coverage](https://github.com/karma-runner/karma-coverage).

## Should you use this plugin?
Try the standard tools like `karma-coverage` or `browserify-istanbul`. Come here when you find you need to run both at the same time :-)
## Installation
`npm install --save-dev karma-istanbul-preprocessor`

## Usage
Add `istanbul` to your `karma.conf.js` like so:
```
// karma.conf.js
module.exports = function(config) {
  config.set({
      preprocessors: {
          // Source files that you want to add instrumentation for
          '**/*.js': ['istanbul'],
      },
  });
```

## Now what?
This plugin does not display coverage or do anything other than add instrumentation. You still probably want to set up karma-coverage like normal,
except do NOT add the `coverage` preprocessor.

## Contributing
Open an issue or a PR, and we'll go from there.

## Why?
For a bit more of a long-form answer: I was debugging into why generating HTML coverage was failing. 
It turns out that when you use `karma-coverage`, it keeps track of a `sourceStore` and only picks up files it has seen in the preprocessor stage.

Now, if you have some other tool that also runs through instrumented code (`browserify-istanbul` in my case), then the code inside `karma-coverage` passes in an explicit cache of files.
The HTML renderer tries to grab the source file that `browserify-istanbul` has parsed over, but can't because it's not in the cache that `karma-coverage` has seen.
Long story short, you end up with a Saturday morning spent trying to get both tools to play with each other and that's why this plugin exists.

Specifically, if you end up with a stack like this, then this tool may be useful:
```
TypeError: Cannot read property 'split' of undefined
    at HtmlReport.Report.mix.writeDetailPage (/Users/anil/textio/frontend/node_modules/istanbul/lib/report/html.js:412:30)
    at /Users/anil/textio/frontend/node_modules/istanbul/lib/report/html.js:489:26
    at SyncFileWriter.extend.writeFile (/Users/anil/textio/frontend/node_modules/istanbul/lib/util/file-writer.js:57:9)
    at FileWriter.extend.writeFile (/Users/anil/textio/frontend/node_modules/istanbul/lib/util/file-writer.js:147:23)
    at /Users/anil/textio/frontend/node_modules/istanbul/lib/report/html.js:488:24
    at Array.forEach (native)
    at HtmlReport.Report.mix.writeFiles (/Users/anil/textio/frontend/node_modules/istanbul/lib/report/html.js:482:23)
    at /Users/anil/textio/frontend/node_modules/istanbul/lib/report/html.js:484:22
    at Array.forEach (native)
    at HtmlReport.Report.mix.writeFiles (/Users/anil/textio/frontend/node_modules/istanbul/lib/report/html.js:482:23)
    at HtmlReport.Report.mix.writeReport (/Users/anil/textio/frontend/node_modules/istanbul/lib/report/html.js:566:14)
    at writeReport (/Users/anil/textio/frontend/node_modules/karma-coverage/lib/reporter.js:62:16)
    at /Users/anil/textio/frontend/node_modules/karma-coverage/lib/reporter.js:290:11
    at /Users/anil/textio/frontend/node_modules/karma/lib/helper.js:82:7
    at FSReqWrap.oncomplete (fs.js:82:15)
```
