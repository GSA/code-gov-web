"use strict";
var q = require("q");
var webdriver = require("selenium-webdriver");
var configParser_1 = require("./configParser");
var logger_1 = require("./logger");
var logger = new logger_1.Logger('plugins');
var PromiseType;
(function (PromiseType) {
    PromiseType[PromiseType["Q"] = 0] = "Q";
    PromiseType[PromiseType["WEBDRIVER"] = 1] = "WEBDRIVER";
})(PromiseType = exports.PromiseType || (exports.PromiseType = {}));
/**
 * The plugin API for Protractor.  Note that this API is unstable. See
 * plugins/README.md for more information.
 *
 * @constructor
 * @param {Object} config parsed from the config file
 */
var Plugins = (function () {
    function Plugins(config) {
        var _this = this;
        /**
         * @see docs/plugins.md#writing-plugins for information on these functions
         */
        this.setup = this.pluginFunFactory('setup', PromiseType.Q);
        this.onPrepare = this.pluginFunFactory('onPrepare', PromiseType.Q);
        this.teardown = this.pluginFunFactory('teardown', PromiseType.Q);
        this.postResults = this.pluginFunFactory('postResults', PromiseType.Q);
        this.postTest = this.pluginFunFactory('postTest', PromiseType.Q);
        this.onPageLoad = this.pluginFunFactory('onPageLoad', PromiseType.WEBDRIVER);
        this.onPageStable = this.pluginFunFactory('onPageStable', PromiseType.WEBDRIVER);
        this.waitForPromise = this.pluginFunFactory('waitForPromise', PromiseType.WEBDRIVER);
        this.waitForCondition = this.pluginFunFactory('waitForCondition', PromiseType.WEBDRIVER, true);
        this.pluginObjs = [];
        this.assertions = {};
        this.resultsReported = false;
        if (config.plugins) {
            config.plugins.forEach(function (pluginConf, i) {
                var path;
                if (pluginConf.path) {
                    path = configParser_1.ConfigParser.resolveFilePatterns(pluginConf.path, true, config.configDir)[0];
                    if (!path) {
                        throw new Error('Invalid path to plugin: ' + pluginConf.path);
                    }
                }
                else {
                    path = pluginConf.package;
                }
                var pluginObj;
                if (path) {
                    pluginObj = require(path);
                }
                else if (pluginConf.inline) {
                    pluginObj = pluginConf.inline;
                }
                else {
                    throw new Error('Plugin configuration did not contain a valid path or ' +
                        'inline definition.');
                }
                _this.annotatePluginObj(pluginObj, pluginConf, i);
                logger.debug('Plugin "' + pluginObj.name + '" loaded.');
                _this.pluginObjs.push(pluginObj);
            });
        }
    }
    ;
    /**
     * Adds properties to a plugin's object
     *
     * @see docs/plugins.md#provided-properties-and-functions
     */
    Plugins.prototype.annotatePluginObj = function (obj, conf, i) {
        var _this = this;
        var addAssertion = function (info, passed, message) {
            if (_this.resultsReported) {
                throw new Error('Cannot add new tests results, since they were already ' +
                    'reported.');
            }
            info = info || {};
            var specName = info.specName || (obj.name + ' Plugin Tests');
            var assertion = { passed: passed };
            if (!passed) {
                assertion.errorMsg = message;
                if (info.stackTrace) {
                    assertion.stackTrace = info.stackTrace;
                }
            }
            _this.assertions[specName] = _this.assertions[specName] || [];
            _this.assertions[specName].push(assertion);
        };
        obj.name = obj.name || conf.name || conf.path || conf.package || ('Plugin #' + i);
        obj.config = conf;
        obj.addFailure = function (message, info) {
            addAssertion(info, false, message);
        };
        obj.addSuccess = function (options) {
            addAssertion(options, true);
        };
        obj.addWarning = function (message, options) {
            options = options || {};
            logger.warn('Warning ' +
                (options.specName ? 'in ' + options.specName : 'from "' + obj.name + '" plugin') + ': ' +
                message);
        };
    };
    Plugins.prototype.printPluginResults = function (specResults) {
        var green = '\x1b[32m';
        var red = '\x1b[31m';
        var normalColor = '\x1b[39m';
        var printResult = function (message, pass) {
            logger.info(pass ? green : red, '\t', pass ? 'Pass: ' : 'Fail: ', message, normalColor);
        };
        for (var _i = 0, specResults_1 = specResults; _i < specResults_1.length; _i++) {
            var specResult = specResults_1[_i];
            var passed = specResult.assertions.map(function (x) { return x.passed; }).reduce(function (x, y) { return (x && y); }, true);
            printResult(specResult.description, passed);
            if (!passed) {
                for (var _a = 0, _b = specResult.assertions; _a < _b.length; _a++) {
                    var assertion = _b[_a];
                    if (!assertion.passed) {
                        logger.error('\t\t' + assertion.errorMsg);
                        if (assertion.stackTrace) {
                            logger.error('\t\t' + assertion.stackTrace.replace(/\n/g, '\n\t\t'));
                        }
                    }
                }
            }
        }
    };
    /**
     * Gets the tests results generated by any plugins
     *
     * @see lib/frameworks/README.md#requirements for a complete description of what
     *     the results object must look like
     *
     * @return {Object} The results object
     */
    Plugins.prototype.getResults = function () {
        var results = { failedCount: 0, specResults: [] };
        for (var specName in this.assertions) {
            results.specResults.push({ description: specName, assertions: this.assertions[specName] });
            results.failedCount +=
                this.assertions[specName].filter(function (assertion) { return !assertion.passed; }).length;
        }
        this.printPluginResults(results.specResults);
        this.resultsReported = true;
        return results;
    };
    ;
    /**
     * Returns true if any loaded plugin has skipAngularStability enabled.
     *
     * @return {boolean}
     */
    Plugins.prototype.skipAngularStability = function () {
        var result = this.pluginObjs.some(function (pluginObj) { return pluginObj.skipAngularStability; });
        return result;
    };
    ;
    /**
     * Calls a function from a plugin safely.  If the plugin's function throws an
     * exception or returns a rejected promise, that failure will be logged as a
     * failed test result instead of crashing protractor.  If the tests results have
     * already been reported, the failure will be logged to the console.
     *
     * @param {Object} pluginObj The plugin object containing the function to be run
     * @param {string} funName The name of the function we want to run
     * @param {*[]} args The arguments we want to invoke the function with
     * @param {PromiseType} promiseType The type of promise (WebDriver or Q) that
     *    should be used
     * @param {boolean} resultsReported If the results have already been reported
     * @param {*} failReturnVal The value to return if the function fails
     *
     * @return {webdriver.promise.Promise|Q.Promise} A promise which resolves to the
     *     function's return value
     */
    Plugins.prototype.safeCallPluginFun = function (pluginObj, funName, args, promiseType, failReturnVal) {
        var _this = this;
        var resolver = function (done) {
            var logError = function (e) {
                if (_this.resultsReported) {
                    _this.printPluginResults([{
                            description: pluginObj.name + ' Runtime',
                            assertions: [{
                                    passed: false,
                                    errorMsg: 'Failure during ' + funName + ': ' + (e.message || e),
                                    stackTrace: e.stack
                                }]
                        }]);
                }
                else {
                    pluginObj.addFailure('Failure during ' + funName + ': ' + e.message || e, { stackTrace: e.stack });
                }
                done(failReturnVal);
            };
            try {
                var result = pluginObj[funName].apply(pluginObj, args);
                if (webdriver.promise.isPromise(result)) {
                    result.then(done, logError);
                }
                else {
                    done(result);
                }
            }
            catch (e) {
                logError(e);
            }
        };
        return promiseType == PromiseType.Q ? q.Promise(resolver) :
            new webdriver.promise.Promise(resolver);
    };
    Plugins.prototype.pluginFunFactory = function (funName, promiseType, failReturnVal) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var promises = _this.pluginObjs.filter(function (pluginObj) { return typeof pluginObj[funName] === 'function'; })
                .map(function (pluginObj) {
                return _this.safeCallPluginFun(pluginObj, funName, args, promiseType, failReturnVal);
            });
            return promiseType == PromiseType.Q ? q.all(promises) : webdriver.promise.all(promises);
        };
    };
    return Plugins;
}());
exports.Plugins = Plugins;
