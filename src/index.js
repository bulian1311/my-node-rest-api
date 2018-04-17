const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressJwt = require('express-jwt');
const morgan = require('morgan');
const mongoose = require('mongoose');

const CONFIG = require('./config/config');

const jwtCheck = expressJwt({ secret: CONFIG.jwt_secret });

const app = express();
mongoose.connect(CONFIG.mongo_db);

app.use('*', cors());
app.use(morgan('dev'));

//Routes
require('./routes/index')(app);

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(CONFIG.port);
