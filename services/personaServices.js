const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/personaDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_persona: parametros.id_persona ? parseInt(parametros.id_persona) : 0,
                cui: parametros.cui ? parseInt(parametros.cui) : 0,
                /** */
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}