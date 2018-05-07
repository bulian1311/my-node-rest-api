const expressJwt = require('express-jwt');

const productRoute = require('./productRoute');
const companyRoute = require('./companyRoute');
const tagRoute = require('./tagRoute');
const imageRoute = require('./imageRoute');
const userRoute = require('./userRoute');

const jwtCheck = expressJwt({ secret: CONFIG.jwt_secret });

module.exports = app => {
  app.use('/products', productRoute);
  app.use('/companies', companyRoute);
  app.use('/tags', tagRoute);
  app.use('/images', imageRoute);
  app.use('/users', userRoute);
};
