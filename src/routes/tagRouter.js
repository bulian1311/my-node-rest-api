const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');
const CONFIG = require('../config/config');
const expressJwt = require('express-jwt');

const jwtCheck = expressJwt({ secret: CONFIG.jwt_secret });

router.get('/', tagController.getAll);
router.get('/:id', tagController.getOne);
router.post('/', jwtCheck, tagController.create);
router.put('/:id', jwtCheck, tagController.update);
router.delete('/:id', jwtCheck, tagController.delete);

module.exports = router;
