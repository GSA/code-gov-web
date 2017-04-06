var path = require("path");
var fs = require("fs");
var assert = require("assert")
var cssImage = require("../src/image.js");


describe('image', function(){

    it("should return string", function() {
        var cssBackgroundsPng = cssImage([ 'fixtures/image1.png'], "test");
        assert.equal(typeof cssBackgroundsPng, "string");

        var cssBackgroundsSvg = cssImage([ 'fixtures/image4.svg'], "test");
        assert.equal(typeof cssBackgroundsSvg, "string");
    });

    it("should return string on one line", function() {
        var cssBackgroundsPng = cssImage([ 'fixtures/image1.png'], "test");
        assert.equal(cssBackgroundsPng.match(/\n/g), null);

        var cssBackgroundsSvg = cssImage([ 'fixtures/image4.svg'], "test");
        assert.equal(cssBackgroundsSvg.match(/\n/g), null);
    });

    it("should return css inlined background from filepath", function() {
        var cssBackgrounds = cssImage([ 'fixtures/image1.png'], "test");
        assert.equal(cssBackgrounds, "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0ICQMB9xQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAE1pY3Jvc29mdCBPZmZpY2V/7TVxAAAADUlEQVQoz2NgGAXIAAABEAAB4vyuKAAAAABJRU5ErkJggg==')");
    });

    describe('svg', function() {

        it("should return css inlined background from svg", function() {
            var cssBackgrounds = cssImage([ 'fixtures/image4.svg'], "test");
            assert.equal(cssBackgrounds, 'url(\'data:image/svg+xml;utf-8,<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="32px" viewBox="0 0 20 32" style="enable-background:new 0 0 20 32;" xml:space="preserve"><g id="Layer_1"></g><g id="lightbulb"></g></svg>\')');
        });

        it("should escape # in svg images", function() {
            var cssBackgrounds = cssImage([ 'fixtures/image5.svg'], "test");
            assert.equal(cssBackgrounds.indexOf("#"), -1);
        });

        it("should not contain xml comments", function() {
            var cssBackgrounds = cssImage([ 'fixtures/image5.svg'], "test");
            assert.ok(cssBackgrounds.match(/<!--[^>]*-->/g) === null, "string contains xml comments")
        });

        it("should replace \' with \" in svg files", function() {
            var cssBackgrounds = cssImage([ 'fixtures/image1.png'], "test");
            // inlined uri contains two ' by default url('data:image/svg+xml;utf-8,<?xml>');
            assert.equal(cssBackgrounds.match(/\'/g).length, 2);
        });

    });

    describe('locate file', function() {

        it("should return css inlined background from root filepath", function() {
            var cssBackgrounds = cssImage([ '/fixtures/image1.png'], "test", {rootImagePath: "test"});
            assert.equal(cssBackgrounds, "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0ICQMB9xQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAE1pY3Jvc29mdCBPZmZpY2V/7TVxAAAADUlEQVQoz2NgGAXIAAABEAAB4vyuKAAAAABJRU5ErkJggg==')");
        });

        it("should return css inlined background from root filepath with filesystemRoot", function() {
            var filesystemRoot = path.dirname(fs.realpathSync(__filename));
            var cssBackgrounds = cssImage([ '/fixtures/image1.png'], "test", {rootImagePath: filesystemRoot});
            assert.equal(cssBackgrounds, "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0ICQMB9xQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAE1pY3Jvc29mdCBPZmZpY2V/7TVxAAAADUlEQVQoz2NgGAXIAAABEAAB4vyuKAAAAABJRU5ErkJggg==')");
        });

    });


    describe('multiple backgrounds', function() {

        it("should return multiple inlined background from filepath", function() {
            var cssBackgrounds = cssImage([ 'fixtures/image1.png', 'fixtures/image2.png', 'fixtures/image3.png' ], "test");
            assert.equal(cssBackgrounds, "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0ICQMB9xQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAE1pY3Jvc29mdCBPZmZpY2V/7TVxAAAADUlEQVQoz2NgGAXIAAABEAAB4vyuKAAAAABJRU5ErkJggg=='),url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVJREFUeNpiYGBgMP7//z8DCAMEGAAfugYuMnsrdQAAAABJRU5ErkJggg=='),url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVJREFUeNpiYGBgMP7//z8DCAMEGAAfugYuMnsrdQAAAABJRU5ErkJggg==')");
        });

        it("should return multiple inlined background from root filepath", function() {
            var cssBackgrounds = cssImage([ '/fixtures/image1.png', '/fixtures/image2.png', '/fixtures/image3.png' ], "test", {rootImagePath: "test"});
            assert.equal(cssBackgrounds, "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0ICQMB9xQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAE1pY3Jvc29mdCBPZmZpY2V/7TVxAAAADUlEQVQoz2NgGAXIAAABEAAB4vyuKAAAAABJRU5ErkJggg=='),url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVJREFUeNpiYGBgMP7//z8DCAMEGAAfugYuMnsrdQAAAABJRU5ErkJggg=='),url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVJREFUeNpiYGBgMP7//z8DCAMEGAAfugYuMnsrdQAAAABJRU5ErkJggg==')");
        });

        it("should return multiple inlined background from root filepath", function() {
            var filesystemRoot = path.dirname(fs.realpathSync(__filename));
            var cssBackgrounds = cssImage([ '/fixtures/image1.png', '/fixtures/image2.png', '/fixtures/image3.png' ], "test", {rootImagePath: filesystemRoot});
            assert.equal(cssBackgrounds, "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0ICQMB9xQAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAE1pY3Jvc29mdCBPZmZpY2V/7TVxAAAADUlEQVQoz2NgGAXIAAABEAAB4vyuKAAAAABJRU5ErkJggg=='),url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVJREFUeNpiYGBgMP7//z8DCAMEGAAfugYuMnsrdQAAAABJRU5ErkJggg=='),url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVJREFUeNpiYGBgMP7//z8DCAMEGAAfugYuMnsrdQAAAABJRU5ErkJggg==')");
        });
    });

    describe('maxImageFileSizex', function() {

        it("should return undefined if image files are bigger than maxImageFileSize", function() {
            var cssBackgrounds = cssImage([ 'fixtures/image1.png'], "test", {maxImageFileSize: 1200 });
            assert.equal(typeof cssBackgrounds, "string");

            cssBackgrounds = cssImage([ 'fixtures/image1.png'], "test", {maxImageFileSize: 12 });
            assert.equal(typeof cssBackgrounds, "undefined");
        });

        it("should return undefined if one of the image files are bigger than maxImageFileSize", function() {
            var cssBackgrounds = cssImage([ 'fixtures/image1.png', 'fixtures/image2.png','fixtures/image3.png'], "test", {maxImageFileSize: 1200 });
            assert.equal(typeof cssBackgrounds, "string");

            cssBackgrounds = cssImage([ 'fixtures/image2.png', 'fixtures/image3.png','fixtures/image1.png'], "test", {maxImageFileSize: 120 });
            assert.equal(typeof cssBackgrounds, "undefined");
        });

        it("should not check image file size if maxImageFileSize is 0", function() {
            var cssBackgrounds = cssImage([ 'fixtures/image1.png'], "test", {maxImageFileSize: 0 });
            assert.equal(typeof cssBackgrounds, "string");
        });

        it("should not check image file size if maxImageFileSize is false", function() {
            var cssBackgrounds = cssImage([ 'fixtures/image1.png'], "test", {maxImageFileSize: false });
            assert.equal(typeof cssBackgrounds, "string");
        });

    });
});