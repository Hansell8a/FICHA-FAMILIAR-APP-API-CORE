const express = require('express');
const router = express.Router();
var catalogosController = require('../controllers/catalogos');

///Declaracion de rutas
router.use('/catalogos', catalogosController);


module.exports = router