const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/fichaFamiliarDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_ficha_familiar: parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                id_estado_ficha: parametros.id_estado_ficha ? parseInt(parametros.id_estado_ficha) : 0,
                id_usuario_superviso: parametros.id_usuario_superviso ? parseInt(parametros.id_usuario_superviso) : 0,
                /** */
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
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_estado_ficha: parametros.id_estado_ficha ? parseInt(parametros.id_estado_ficha) : 0,
                id_usuario_superviso: parametros.id_usuario_superviso ? parseInt(parametros.id_usuario_superviso) : 0,
                fecha_supervision: parametros.fecha_supervision,
                /** */
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.insertar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.actualizar = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_ficha_familiar: parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                id_estado_ficha: parametros.id_estado_ficha ? parseInt(parametros.id_estado_ficha) : 0,
                id_usuario_superviso: parametros.id_usuario_superviso ? parseInt(parametros.id_usuario_superviso) : 0,
                fecha_supervision: parametros.fecha_supervision,
                /** */
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.actualizar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}