const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/comunidadDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_as: parametros.id_as ? parseInt(parametros.id_as) : 0,
                id_ds: parametros.id_ds ? parseInt(parametros.id_ds) : 0,
                id_ts: parametros.id_ts ? parseInt(parametros.id_ts) : 0,
                id_sector: parametros.id_sector ? parseInt(parametros.id_sector) : 0,

/*                 id_departamento: parametros.id_departamento ? parseInt(parametros.id_departamento) : 0,
                id_municipio: parametros.id_municipio ? parseInt(parametros.id_municipio) : 0,
                id_lp: parametros.id_lp ? parseInt(parametros.id_lp) : 0, */
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}