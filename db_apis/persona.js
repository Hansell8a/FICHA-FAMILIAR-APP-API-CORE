const { ejecutarSP } = require('../api-services/database')

module.exports.insertarPersonaSeguridad = async (params) => {    
    let result = await ejecutarSP('VACUNA.PKG_REGISTRO_PACIENTE.sp_insertar_persona_seguridad', params)
    return result[0]
}