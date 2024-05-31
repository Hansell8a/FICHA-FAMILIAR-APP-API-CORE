const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/puebloDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_pueblo: parametros.id_pueblo ? parseInt(parametros.id_pueblo) : 0
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}