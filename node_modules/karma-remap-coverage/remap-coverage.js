'use strict';

const path = require('path');
const remap = require('remap-istanbul/lib/remap');
const writeReport = require('remap-istanbul/lib/writeReport');

const istanbulFileReportTypes = [
  'clover',
  'cobertura',
  'json-summary',
  'json',
  'lcovonly',
  'teamcity',
  'text-summary',
  'text'
];

const RemapCoverageReporter = function(baseReporterDecorator, config, helper) {
  baseReporterDecorator(this);

  this.onCoverageComplete = (browser, coverageReport) => {
    const options = config.remapCoverageReporter || { html: './coverage' };
    const collector = remap(coverageReport, config.remapOptions);

    Object.keys(options).forEach(reportType => {
      const dest = options[reportType];
      const prepareDest = new Promise(resolve => {
        // destination dir must exists for file type reports
        if (dest && istanbulFileReportTypes.indexOf(reportType) > -1) {
          helper.mkdirIfNotExists(path.dirname(dest), () => resolve());
        } else {
          resolve();
        }
      });

      prepareDest.then(() => writeReport(collector, reportType, {}, dest));
    });
  };
};

RemapCoverageReporter.$inject = ['baseReporterDecorator', 'config', 'helper'];

module.exports = {
  'reporter:remap-coverage': ['type', RemapCoverageReporter]
};
