const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
router.get('/:id/company', productController.getCompany);
router.get('/:id/tags', productController.getTags);
router.get('/:id/images', productController.getImages);

module.exports = router;
