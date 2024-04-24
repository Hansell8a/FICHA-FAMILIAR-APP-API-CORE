const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/detalleEquipamientoViviendaDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_detalle_equipamiento_vivienda: parametros.id_detalle_equipamiento_vivienda ? parseInt(parametros.id_detalle_equipamiento_vivienda) : 0,
                id_vivienda_caracteristica: parametros.id_vivienda_caracteristica ? parseInt(parametros.id_vivienda_caracteristica) : 0,
                id_equipamiento_vivienda: parametros.id_equipamiento_vivienda ? parseInt(parametros.id_equipamiento_vivienda) : 0,
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
                id_equipamiento_vivienda: parametros.id_equipamiento_vivienda ? parseInt(parametros.id_equipamiento_vivienda) : 0,
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
                id_detalle_equipamiento_vivienda: parametros.id_detalle_equipamiento_vivienda ? parseInt(parametros.id_detalle_equipamiento_vivienda) : 0,
                id_vivienda_caracteristica: parametros.id_vivienda_caracteristica ? parseInt(parametros.id_vivienda_caracteristica) : 0,
                id_equipamiento_vivienda: parametros.id_equipamiento_vivienda ? parseInt(parametros.id_equipamiento_vivienda) : 0,
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
                id_detalle_equipamiento_vivienda: parametros.id_detalle_equipamiento_vivienda ? parseInt(parametros.id_detalle_equipamiento_vivienda) : 0,
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