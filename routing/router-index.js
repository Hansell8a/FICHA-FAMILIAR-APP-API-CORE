const express = require('express');
const router = express.Router();
var catalogosController = require('../controllers/catalogosController');
var abastecimientoAguaController = require('../controllers/abastecimientoAguaController');
var equipamientoViviendaController = require('../controllers/equipamientoViviendaController');
var estadoFamiliaController = require('../controllers/estadoFamiliaController');
var fuenteCocinaController = require('../controllers/fuenteCocinaController');
var materialParedController = require('../controllers/materialParedController');
var materialPisoController = require('../controllers/materialPisoController');
///Declaracion de rutas
router.use('/catalogos', catalogosController);
router.use('/abastecimiento-agua', abastecimientoAguaController);
router.use('/equipamiento-vivienda', equipamientoViviendaController);
router.use('/estado-familia', estadoFamiliaController);
router.use('/fuente-cocina', fuenteCocinaController);
router.use('/material-pared', materialParedController);
router.use('/material-piso', materialPisoController);


module.exports = router