const expressJwt = require('express-jwt');

const productRouter = require('./productRouter');
const companyRouter = require('./companyRouter');
const tagRouter = require('./tagRouter');
const imageRouter = require('./imageRouter');
const userRouter = require('./userRouter');
const botRouter = require('./botRouter');

module.exports = app => {
  app.use('/products', productRouter);
  app.use('/companies', companyRouter);
  app.use('/tags', tagRouter);
  app.use('/images', jwtCheck, imageRouter);
  app.use('/users', userRouter);
};
