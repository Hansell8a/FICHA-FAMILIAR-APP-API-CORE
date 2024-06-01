const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/migranteDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_migrante: parametros.id_migrante ? parseInt(parametros.id_migrante) : 0
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}