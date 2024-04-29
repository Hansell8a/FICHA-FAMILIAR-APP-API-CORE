const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/sectorDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_sector: parametros.id_sector ? parseInt(parametros.id_sector) : 0,
                id_territorio: parametros.id_territorio ? parseInt(parametros.id_territorio) : 0,
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}