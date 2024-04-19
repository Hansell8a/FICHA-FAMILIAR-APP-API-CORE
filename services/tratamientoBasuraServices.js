const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/tratamientoBasuraDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_tratamiento_basura: parametros.id_tratamiento_basura ? parseInt(parametros.id_tratamiento_basura) : 0,
                descripcion: parametros.descripcion ? parametros.descripcion : null,
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

exports.insertar = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_tratamiento_basura: null,
                descripcion: parametros.descripcion,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = await oraServices.insertar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.actualizar = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_tratamiento_basura: parametros.id_tratamiento_basura ? parseInt(parametros.id_tratamiento_basura) : 0,
                descripcion: parametros.descripcion,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = await oraServices.actualizar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.eliminar = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_tratamiento_basura: parametros.id_tratamiento_basura ? parseInt(parametros.id_tratamiento_basura) : 0,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = await oraServices.eliminar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}