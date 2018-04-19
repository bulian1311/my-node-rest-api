require('dotenv').config();

const CONFIG = {};

CONFIG.app = process.env.APP || 'dev';
CONFIG.port = process.env.PORT || '4000';

CONFIG.mongo_db =
  process.env.MONGO_DB ||
  'mongodb://nikolay_kachanov:131187@ds014578.mlab.com:14578/magmer-dev';

CONFIG.jwt_secret = process.env.JWT_SECRET || 'jwt_secret';

module.exports = CONFIG;
