const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/estadoCivilDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_estado_civil: parametros.id_estado_civil ? parseInt(parametros.id_estado_civil) : 0
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}