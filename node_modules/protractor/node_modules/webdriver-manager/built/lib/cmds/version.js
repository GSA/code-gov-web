"use strict";
var minimist = require("minimist");
var cli_1 = require("../cli");
var config_1 = require("../config");
var logger = new cli_1.Logger('version');
var prog = new cli_1.Program().command('version', 'get the current version').action(getVersion);
exports.program = prog;
// stand alone runner
var argv = minimist(process.argv.slice(2), prog.getMinimistOptions());
if (argv._[0] === 'version-run') {
    prog.run(JSON.parse(JSON.stringify(argv)));
}
function getVersion() {
    logger.info('webdriver-manager', config_1.Config.getVersion());
}
//# sourceMappingURL=version.js.map