require('dotenv').config();

const CONFIG = {};

CONFIG.app = process.env.APP || 'dev';
CONFIG.port = process.env.PORT || '4000';

CONFIG.mongo_db =
  process.env.MONGO_DB ||
  'mongodb://bulian1311:131187@ds155218.mlab.com:55218/magmer-dev';

CONFIG.jwt_secret = process.env.JWT_SECRET || 'jwt_secret';

module.exports = CONFIG;
