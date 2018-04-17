const itemsRouter = require('../routes/itemsRoute');

module.exports = app => {
  app.use('/items', itemsRouter);
};
