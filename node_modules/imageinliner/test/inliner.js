var assert = require("assert")
var fs = require("fs");
var inliner = require("../src/inliner.js");
var _ = require("underscore");

describe('inliner with fixture', function(){

    var assertInlinerString = function(cssFile, totalBackgrounds, options) {
        var css = fs.readFileSync(cssFile, "utf-8");

        var buildArguments = function(options) {
            return _.defaults(options || {}, {
                cssBasePath:        "test/fixtures",
                maxImageFileSize:   10240,
                compressOutput:     true
            });
        };

        it("should return string when using files", function() {
            var result = inliner.css(css, buildArguments(options));
            assert.equal(typeof result, "string");
        });

        it("should inline correct amount of backgrounds", function() {
            var result = inliner.css(css, buildArguments(options));
            assert.equal(result.match(/url\(\'data/g).length, totalBackgrounds);
        });
    };


    var assertInlinerFile = function(cssFile, totalBackgrounds, options) {

        var buildArguments = function(options) {
            return _.defaults(options || {}, {
                maxImageFileSize:   10240,
                compressOutput:     true
            });
        };

        it("should return string", function() {
            var result = inliner.file(cssFile, buildArguments(options));
            assert.equal(typeof result, "string");
        });

        it("should inline correct amount of backgrounds", function() {
            var result = inliner.file(cssFile, buildArguments(options));
            assert.equal(result.match(/url\(\'data/g).length, totalBackgrounds);
        });
    };

    assertInlinerFile("test/fixtures/style.css", 9);
    assertInlinerFile("test/fixtures/compressed.css", 8);
    assertInlinerString("test/fixtures/alreadyInlined.css", 6);

    assertInlinerFile("test/fixtures/root.css", 9, {
        rootImagePath: "test"
    });
    assertInlinerFile("test/fixtures/compressedRoot.css", 8, {
        rootImagePath: "test"
    });

    assertInlinerString("test/fixtures/style.css", 9);
    assertInlinerString("test/fixtures/compressed.css", 8);
    assertInlinerString("test/fixtures/root.css", 9, {
        rootImagePath: "test"
    });
    assertInlinerString("test/fixtures/compressedRoot.css", 8, {
        rootImagePath: "test"
    });
});