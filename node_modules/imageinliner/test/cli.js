var fs = require("fs");
var path = require("path");
var assert = require("assert")
var _ = require("underscore");
require('shelljs/global');


describe('cli interface', function() {
    var filesystemRoot = path.dirname(fs.realpathSync(__filename));

    var outputFolder = "output/";
    beforeEach(function () {
        mkdir(outputFolder);
    });

    afterEach(function () {
        rm("-fr", outputFolder);
    });

    var buildArguments = function(options) {
        return _.map(arguments, function(argument) {
            var args = _.map(argument, function(value, key) {
                var arg = (key.length > 1) ? "--" : "-";

                if(value === true) {
                    return arg + key;
                } else if(value === false) {
                    // do nothing
                } else {
                    return arg + key +  " " + value;
                }
            });
            return " " + args.join(" ");
        }).join(" ");
    };

    var assertCli = function(inputFile, options) {

        var outputFile = path.join(outputFolder, "file.css");

        it("should run correctly", function() {
            var args = buildArguments({i: inputFile, o: outputFile}, options);
            var res = exec("./bin/imageinliner" + args);
            assert.equal(res.code, 0);
        });

        it("should create output file", function() {
            var args = buildArguments({i: inputFile, o: outputFile}, options);
            exec("./bin/imageinliner" + args);

            assert.ok(fs.existsSync(outputFile));
        });

        it("should create output file with filesystem root paths", function() {
            var rootInputFile = path.join(filesystemRoot, "..", inputFile);
            var rootOutputFile = path.join(filesystemRoot, "..", outputFolder, "file.css");

            var args = buildArguments({i: rootInputFile, o: rootOutputFile}, options);
            exec("./bin/imageinliner" + args);

            assert.ok(fs.existsSync(outputFile));
        });

        it("should create output file when --in and --out param is passed", function() {
            var args = buildArguments({in: inputFile, out: outputFile}, options);
            exec("./bin/imageinliner" + args);

            assert.ok(fs.existsSync(outputFile));
        });

        it("should create output file in multiple sub-folders", function() {
            var deepOutputFile = path.join(outputFolder, "some/folder/again/file.css");

            var args = buildArguments({i: inputFile, o: deepOutputFile}, options);
            exec("./bin/imageinliner" + args);

            assert.ok(fs.existsSync(deepOutputFile));
        });

        it("should not include linebreaks when --compress param is passed", function() {
            var args = buildArguments({i: inputFile, o: outputFile, compress: true}, options);
            exec("./bin/imageinliner" + args);

            var cssData = fs.readFileSync(outputFile, "utf-8");
            assert.equal(cssData.match(/\n/g), null);
        });

        it("should overwrite itself when --overwrite param is passed", function() {
            var copiedFolder = "test/fixtures";
            cp("-r", copiedFolder, outputFolder);

            var fileName = path.basename(inputFile);

            var copiedFile = path.join(outputFolder, "fixtures", fileName);

            var args = buildArguments({i: inputFile, out: outputFile}, options);
            exec("./bin/imageinliner"+ args);

            args = buildArguments({i: copiedFile, overwrite: true}, options);
            exec("./bin/imageinliner"+ args);

            var originalData = fs.readFileSync(outputFile, "utf-8");
            var overwriteData = fs.readFileSync(copiedFile, "utf-8");

            assert.equal(originalData, overwriteData);
        });
    };

    assertCli("test/fixtures/style.css");
    assertCli("test/fixtures/compressed.css");
    assertCli("test/fixtures/root.css", {
        rootPath: "test"
    });
    assertCli("test/fixtures/root.css", {
        rootPath: filesystemRoot
    });
    assertCli("test/fixtures/compressedRoot.css", {
        rootPath: "test"
    });
    assertCli("test/fixtures/compressedRoot.css", {
        rootPath: filesystemRoot
    });
});








