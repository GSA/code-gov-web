var path = require('path');
var istanbul = require('istanbul');

var createIstanbulPreprocessor = function(logger) {
    // TODO as needed - take in a config block and pass that into Istanbul
    var log = logger.create('preprocessor.istanbul');
    return function(content, file, done) {
        var instrumenter = new istanbul.Instrumenter();
        instrumenter.instrument(content, file.path, function(err, instrumentedCode) {
            if (err) {
                log.error('%s\n  at %s', err.message, file.originalPath);
                done(err, null);
            } else {
                log.debug("finished instrumenting " + file.path);
                done(instrumentedCode);
            }
        });
    }
}

createIstanbulPreprocessor.$inject = ['logger'];
module.exports = {
    'preprocessor:istanbul': ['factory', createIstanbulPreprocessor]
}
