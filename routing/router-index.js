const express = require('express');
const router = express.Router();
var catalogosController = require('../controllers/catalogosController');
var abastecimientoAguaController = require('../controllers/abastecimientoAguaController');
var equipamientoViviendaController = require('../controllers/equipamientoViviendaController');
var estadoFamiliaController = require('../controllers/estadoFamiliaController');
var fuenteCocinaController = require('../controllers/fuenteCocinaController');
var materialParedController = require('../controllers/materialParedController');
var materialPisoController = require('../controllers/materialPisoController');
var materialTechoController = require('../controllers/materialTechoController');
var proveedorSaludController = require('../controllers/proveedorSaludController');
var parentescoController = require('../controllers/parentescoController');
var tenenciaViviendaController = require('../controllers/tenenciaViviendaController');

///Declaracion de rutas
router.use('/catalogos', catalogosController);
router.use('/abastecimiento-agua', abastecimientoAguaController);
router.use('/equipamiento-vivienda', equipamientoViviendaController);
router.use('/estado-familia', estadoFamiliaController);
router.use('/fuente-cocina', fuenteCocinaController);
router.use('/material-pared', materialParedController);
router.use('/material-piso', materialPisoController);
router.use('/material-techo', materialTechoController);
router.use('/proveedor-salud', proveedorSaludController);
router.use('/parentesco', parentescoController);
router.use('/tenencia-vivienda', tenenciaViviendaController);

module.exports = router