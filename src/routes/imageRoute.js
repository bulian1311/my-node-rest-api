const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.get('/', imageController.getAll);
router.get('/:id', imageController.getOne);

module.exports = router;
