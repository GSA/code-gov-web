"use strict";
var minimist = require("minimist");
var cli_instance_1 = require("./cli_instance");
var minimistOptions = cli_instance_1.cli.getMinimistOptions();
var argv = minimist(process.argv.slice(2), minimistOptions);
var cmd = argv._;
if (cli_instance_1.cli.programs[cmd[0]]) {
    if (cmd[0] === 'help') {
        cli_instance_1.cli.printHelp();
    }
    else if (cmd[1] === 'help' || argv['help'] || argv['h']) {
        cli_instance_1.cli.programs[cmd[0]].printHelp();
    }
    else {
        cli_instance_1.cli.programs[cmd[0]].run(JSON.parse(JSON.stringify(argv)));
    }
}
else {
    cli_instance_1.cli.printHelp();
}
//# sourceMappingURL=webdriver.js.map