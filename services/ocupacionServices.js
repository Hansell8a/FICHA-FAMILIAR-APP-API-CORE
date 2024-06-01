const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/ocupacionDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_ocupacion: parametros.id_ocupacion ? parseInt(parametros.id_ocupacion) : 0
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}