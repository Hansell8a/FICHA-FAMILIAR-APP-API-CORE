const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/fuenteCocinaDB");


exports.obtener_fuente_cocina = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_fuente_cocina: parametros.id_fuente_cocina ? parseInt(parametros.id_fuente_cocina) : 0,
                descripcion: parametros.descripcion ? parametros.descripcion : null,
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.obtener_fuente_cocina(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.insertar_fuente_cocina = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_fuente_cocina: parametros.id_fuente_cocina ? parseInt(parametros.id_fuente_cocina) : 0,
                descripcion: parametros.descripcion ? parametros.descripcion : null,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.insertar_fuente_cocina(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.actualizar_fuente_cocina = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_fuente_cocina: parametros.id_fuente_cocina ? parseInt(parametros.id_fuente_cocina) : 0,
                descripcion: parametros.descripcion ? parametros.descripcion : null,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.actualizar_fuente_cocina(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.eliminar_fuente_cocina = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_fuente_cocina: parametros.id_fuente_cocina ? parseInt(parametros.id_fuente_cocina) : 0,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.eliminar_fuente_cocina(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}