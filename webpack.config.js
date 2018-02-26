/**
 * @author: @AngularClass
 */

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test');
    break;
  case 'stag':
  case 'staging':
    module.exports = require('./config/webpack.stag');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev');
}
