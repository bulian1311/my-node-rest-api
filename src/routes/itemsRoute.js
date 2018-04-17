const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/', itemsController.getAll);
router.get('/:id', itemsController.getOne);

module.exports = router;
