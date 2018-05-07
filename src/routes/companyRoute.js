const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/', companyController.getAll);
router.get('/:id', companyController.getOne);
router.post('/', companyController.create);
router.put('/:id', companyController.update);
router.delete('/id', companyController.delete);

module.exports = router;
