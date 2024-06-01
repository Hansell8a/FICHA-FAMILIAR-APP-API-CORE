const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/discapacidadDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_discapacidad: parametros.id_discapacidad ? parseInt(parametros.id_discapacidad) : 0
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}