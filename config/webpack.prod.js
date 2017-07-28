const commonConfig = require('./webpack.common.js');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = function (env) {
  return commonConfig({ env: ENV });
}
