const express = require('express');
const router = express.Router();
var catalogosController = require('../controllers/catalogosController');
var abastecimientoAguaController = require('../controllers/abastecimientoAguaController');
var equipamientoViviendaController = require('../controllers/equipamientoViviendaController');
///Declaracion de rutas
router.use('/catalogos', catalogosController);
router.use('/abastecimiento-agua', abastecimientoAguaController);
router.use('/equipamiento-vivienda', equipamientoViviendaController);

module.exports = router