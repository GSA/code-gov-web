"use strict";
var cli_1 = require("./cli");
var clean = require("./cmds/clean");
var shutdown = require("./cmds/shutdown");
var start = require("./cmds/start");
var status = require("./cmds/status");
var update = require("./cmds/update");
var version = require("./cmds/version");
exports.cli = new cli_1.Cli()
    .usage('webdriver-manager <command> [options]')
    .program(clean.program)
    .program(start.program)
    .program(shutdown.program)
    .program(status.program)
    .program(update.program)
    .program(version.program);
//# sourceMappingURL=cli_instance.js.map