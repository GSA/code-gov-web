"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 * This is an mock implementation of the Driver Provider.
 * It returns a fake webdriver and never actually contacts a selenium
 * server.
 */
var q = require("q");
var selenium_webdriver_1 = require("selenium-webdriver");
var driverProvider_1 = require("./driverProvider");
var MockExecutor = (function () {
    function MockExecutor() {
    }
    MockExecutor.prototype.execute = function (command) { };
    return MockExecutor;
}());
exports.MockExecutor = MockExecutor;
var Mock = (function (_super) {
    __extends(Mock, _super);
    function Mock(config) {
        return _super.call(this, config) || this;
    }
    /**
     * An execute function that returns a promise with a test value.
     */
    Mock.prototype.execute = function () {
        var deferred = q.defer();
        deferred.resolve({ value: 'test_response' });
        return deferred.promise;
    };
    /**
     * Configure and launch (if applicable) the object's environment.
     * @public
     * @return {q.promise} A promise which will resolve immediately.
     */
    Mock.prototype.setupEnv = function () {
        return q.fcall(function () { });
    };
    /**
     * Create a new driver.
     *
     * @public
     * @override
     * @return webdriver instance
     */
    Mock.prototype.getNewDriver = function () {
        var mockSession = new selenium_webdriver_1.Session('test_session_id', {});
        var newDriver = new selenium_webdriver_1.WebDriver(mockSession, new MockExecutor());
        this.drivers_.push(newDriver);
        return newDriver;
    };
    return Mock;
}(driverProvider_1.DriverProvider));
exports.Mock = Mock;
