/* tslint:disable: variable-name max-line-length */
/**
 * @author: @AngularClass
 */
import 'ts-helpers';

import {
  CUSTOM_COPY_FOLDERS,
  CUSTOM_COMMON_PLUGINS,
} from './config/env';

const EVENT    = process.env.npm_lifecycle_event;
const ENV      = process.env.NODE_ENV || 'development';

const PORT     = process.env.PORT ||
  ENV === 'development' ? 3000 : 8080;
const HOST     = process.env.HOST || 'localhost';

const COPY_FOLDERS = [
  { from: 'src/assets' },
  { from: 'src/meta' },
  // { from: 'node_modules/hammerjs/hammer.min.js' },
  // { from: 'node_modules/hammerjs/hammer.min.js.map' },
  ...CUSTOM_COPY_FOLDERS,
];

console.info(`Env: ${ENV}`);

export default {

};

// // Look in ./config folder for webpack.dev.js
// switch (process.env.NODE_ENV) {
//   case 'prod':
//   case 'production':
//     module.exports = require('./config/webpack.prod')({env: 'production'});
//     break;
//   case 'test':
//   case 'testing':
//     module.exports = require('./config/webpack.test')({env: 'test'});
//     break;
//   case 'dev':
//   case 'development':
//   default:
//     module.exports = require('./config/webpack.dev')({env: 'development'});
// }
