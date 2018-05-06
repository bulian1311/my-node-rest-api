const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/', companyController.getAll);
router.get('/:id', companyController.getOne);

module.exports = router;
