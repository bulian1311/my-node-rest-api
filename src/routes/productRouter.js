const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const CONFIG = require('../config/config');
const expressJwt = require('express-jwt');

const jwtCheck = expressJwt({ secret: CONFIG.jwt_secret });

router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.post('/', jwtCheck, productController.create);
router.put('/:id', jwtCheck, productController.update);
router.delete('/:id', jwtCheck, productController.delete);
router.get('/:id/company', productController.getCompany);
router.get('/:id/tags', productController.getTags);
router.get('/:id/images', productController.getImages);

module.exports = router;
