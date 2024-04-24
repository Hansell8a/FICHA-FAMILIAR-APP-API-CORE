const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/departamentoDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_departamento: parametros.id_departamento ? parseInt(parametros.id_departamento) : 0,
                nombre: parametros.nombre ? parametros.nombre : null,
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