const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

router.get('/', tagController.getAll);
router.get('/:id', tagController.getOne);

module.exports = router;
