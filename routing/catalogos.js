const { Router } = require('express')
const router = Router()
const { obtenerCatalogos } = require('../controllers/catalogos')

router.get('/', obtenerCatalogos);



module.exports = router