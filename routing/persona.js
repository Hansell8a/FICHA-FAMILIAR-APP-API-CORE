const { Router } = require('express')
const router = Router()
const { insertarPersonaSeguridad } = require('../controllers/persona')
const { cadenaABase64 } = require('../common/utils')

router.post(`/seguridad-mspas`, insertarPersonaSeguridad)

module.exports = router