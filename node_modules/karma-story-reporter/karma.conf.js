module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],
    files:      [
      'test/helper/*.js',
      'index.js',
      'test/*Test.js'
    ],
    reporters:  ['story'],
    colors:     true,
    logLevel:   config.LOG_INFO,
    autoWatch:  true,
    browsers:   ['PhantomJS'],
    singleRun:  false,

    storyReporter: {
      showSkipped: true
    }
  });
};
