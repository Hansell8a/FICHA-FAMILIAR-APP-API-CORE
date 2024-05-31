const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/sexoDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_sexo: parametros.id_sexo ? parseInt(parametros.id_sexo) : 0
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}