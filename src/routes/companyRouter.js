const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const CONFIG = require('../config/config');
const expressJwt = require('express-jwt');

const jwtCheck = expressJwt({ secret: CONFIG.jwt_secret });

router.get('/', companyController.getAll);
router.get('/:id', companyController.getOne);
router.post('/', jwtCheck, companyController.create);
router.put('/:id', jwtCheck, companyController.update);
router.delete('/:id', jwtCheck, companyController.delete);

module.exports = router;
