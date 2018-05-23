const express = require('express');
const router = express.Router();
const botController = require('../controllers/botController');
const CONFIG = require('../config/config');
const expressJwt = require('express-jwt');

const jwtCheck = expressJwt({ secret: CONFIG.jwt_secret });

router.post('/create', botController.create);

module.exports = router;
