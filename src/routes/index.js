const productRoute = require('../routes/productRoute');

module.exports = app => {
  app.use('/products', productRoute);
};
