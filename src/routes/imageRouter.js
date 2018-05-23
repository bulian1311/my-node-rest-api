const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const CONFIG = require('../config/config');

const jwtCheck = expressJwt({ secret: CONFIG.jwt_secret });

router.get('/', imageController.getAll);
router.get('/:id', imageController.getOne);
router.post('/', jwtCheck, imageController.create);
router.put('/:id', jwtCheck, imageController.update);
router.delete('/:id', jwtCheck, imageController.delete);

module.exports = router;
