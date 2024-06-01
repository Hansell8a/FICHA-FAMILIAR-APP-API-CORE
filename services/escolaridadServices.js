const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/escolaridadDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_escolaridad: parametros.id_escolaridad ? parseInt(parametros.id_escolaridad) : 0
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}