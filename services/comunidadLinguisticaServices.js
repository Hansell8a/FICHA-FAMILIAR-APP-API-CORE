const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/comunidadLinguisticaDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_comunidad_linguistica: parametros.id_comunidad_linguistica ? parseInt(parametros.id_comunidad_linguistica) : 0
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}