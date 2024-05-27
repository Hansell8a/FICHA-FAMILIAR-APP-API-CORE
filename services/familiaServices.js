const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/familiaDB");
const moment = require('moment');

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_familia:                 parametros.id_familia ? parseInt(parametros.id_familia) : 0,
                id_ficha_familiar:          parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                numero_familia:             parametros.numero_familia ? parseInt(parametros.numero_familia) : 0,
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
                id_ficha_familiar:          parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                numero_familia:             parametros.numero_familia ? parseInt(parametros.numero_familia) : 0,
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
                id_familia:                 parametros.id_familia ? parseInt(parametros.id_familia) : 0,
                id_ficha_familiar:          parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                numero_familia:             parametros.numero_familia ? parseInt(parametros.numero_familia) : 0,
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

exports.eliminar = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_familia:                 parametros.id_familia ? parseInt(parametros.id_familia) : 0,
                /** */
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.eliminar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}