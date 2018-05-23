const express = require('express');
const router = express.Router();
const botController = require('../controllers/botController');

const jwtCheck = expressJwt({ secret: CONFIG.jwt_secret });

router.post('/create', botController.create);

module.exports = router;
