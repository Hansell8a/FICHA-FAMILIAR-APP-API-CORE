const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/areaSaludDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_as: parametros.id_as ? parseInt(parametros.id_as) : 0,
                id_region: parametros.id_region ? parseInt(parametros.id_region) : 0,
                id_departamento: parametros.id_departamento ? parseInt(parametros.id_departamento) : 0
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}