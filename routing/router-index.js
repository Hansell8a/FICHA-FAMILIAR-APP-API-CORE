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
var estadoFichaController = require('../controllers/estadoFichaController');
var tipoAnimalController = require('../controllers/tipoAnimalController');
var tipoCocinaController = require('../controllers/tipoCocinaController');
var tipoDeficienciaController = require('../controllers/tipoDeficienciaController');
var tipoServicioSanitarioController = require('../controllers/tipoServicioSanitarioController');
var tipoViviendaController = require('../controllers/tipoViviendaController');
var tratamientoAguaGrisController = require('../controllers/tratamientoAguaGrisController');
var tratamientoBasuraController = require('../controllers/tratamientoBasuraController');
var tratamientoAguaResidualController = require('../controllers/tratamientoAguaResidualController');
var ubicacionCocinaController = require('../controllers/ubicacionCocinaController');
var usoServicioSanitarioController = require('../controllers/usoServicioSanitarioController');
var departamentoController = require('../controllers/departamentoController');
var municipioController = require('../controllers/municipioController');
var lugarPobladoController = require('../controllers/lugarPobladoController');
var areaSaludController = require('../controllers/areaSaludController');
var descripcionServicioController = require('../controllers/descripcionServicioController');
var distritoSaludController = require('../controllers/distritoSaludController');
var territorioController = require('../controllers/territorioController');
var centroComunitarioController = require('../controllers/centroComunitarioController');
var comunidadController = require('../controllers/comunidadController');
var detalleEquipamientoViviendaController = require('../controllers/detalleEquipamientoViviendaController');
var detalleTratamientoBasuraController = require('../controllers/detalleTratamientoBasuraController');
var detalleAguaResidualController = require('../controllers/detalleAguaResidualController');
var detalleAnimalDomesticoController = require('../controllers/detalleAnimalDomesticoController');
var familiaIntegranteController = require('../controllers/familiaIntegranteController');
var fichaFamiliarController = require('../controllers/fichaFamiliarController');
var personaController = require('../controllers/personaController');

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
router.use('/estado-ficha', estadoFichaController);
router.use('/tipo-animal', tipoAnimalController);
router.use('/tipo-cocina', tipoCocinaController);
router.use('/tipo-deficiencia', tipoDeficienciaController);
router.use('/tipo-servicio-sanitario', tipoServicioSanitarioController);
router.use('/tipo-vivienda', tipoViviendaController);
router.use('/tratamiento-agua-gris', tratamientoAguaGrisController);
router.use('/tratamiento-basura', tratamientoBasuraController);
router.use('/tratamiento-agua-residual', tratamientoAguaResidualController);
router.use('/ubicacion-cocina', ubicacionCocinaController);
router.use('/uso-servicio-sanitario', usoServicioSanitarioController);
router.use('/departamento', departamentoController);
router.use('/municipio', municipioController);
router.use('/lugar-poblado', lugarPobladoController);
router.use('/area-salud', areaSaludController);
router.use('/descripcion-servicio', descripcionServicioController);
router.use('/distrito-salud', distritoSaludController);
router.use('/territorio', territorioController);
router.use('/centro-comunitario', centroComunitarioController);
router.use('/comunidad', comunidadController);
router.use('/detalle-equipamiento-vivienda', detalleEquipamientoViviendaController);
router.use('/detalle-tratamiento-basura', detalleTratamientoBasuraController);
router.use('/detalle-agua-residual', detalleAguaResidualController);
router.use('/detalle-animal-domestico', detalleAnimalDomesticoController);
router.use('/familia-integrante', familiaIntegranteController);
router.use('/ficha-familiar', fichaFamiliarController);
router.use('/persona', personaController);

module.exports = router