const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.get('/', imageController.getAll);
router.get('/:id', imageController.getOne);
router.post('/', imageController.create);
router.put('/:id', imageController.update);
router.delete('/:id', imageController.delete);

module.exports = router;
