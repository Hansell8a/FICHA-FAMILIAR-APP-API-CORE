const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/detalleAguaResidualDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_detalle_agua_residual: parametros.id_detalle_agua_residual ? parseInt(parametros.id_detalle_agua_residual) : 0,
                id_vivienda_caracteristica: parametros.id_vivienda_caracteristica ? parseInt(parametros.id_vivienda_caracteristica) : null,
                id_tratamiento_agua_residual: parametros.id_tratamiento_agua_residual ? parseInt(parametros.id_tratamiento_agua_residual) : null,
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
                id_vivienda_caracteristica: parametros.id_vivienda_caracteristica ? parseInt(parametros.id_vivienda_caracteristica) : 0,
                id_tratamiento_agua_residual: parametros.id_tratamiento_agua_residual ? parseInt(parametros.id_tratamiento_agua_residual) : 0,
                observacion: parametros.observacion,
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
                id_detalle_agua_residual: parametros.id_detalle_agua_residual ? parseInt(parametros.id_detalle_agua_residual) : 0,
                id_vivienda_caracteristica: parametros.id_vivienda_caracteristica ? parseInt(parametros.id_vivienda_caracteristica) : 0,
                id_tratamiento_agua_residual: parametros.id_tratamiento_agua_residual ? parseInt(parametros.id_tratamiento_agua_residual) : 0,
                observacion: parametros.observacion,
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
                id_detalle_agua_residual: parametros.id_detalle_agua_residual ? parseInt(parametros.id_detalle_agua_residual) : 0,
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