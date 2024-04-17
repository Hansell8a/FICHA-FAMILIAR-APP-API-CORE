const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/equipamientoViviendaDB");

exports.obtener_equipamiento_vivienda = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_equipamiento_vivienda: parametros.id_equipamiento_vivienda ? parseInt(parametros.id_equipamiento_vivienda) : 0,
                descripcion: parametros.descripcion ? parametros.descripcion : null,
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.obtener_equipamiento_vivienda(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.insertar_equipamiento_vivienda = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_equipamiento_vivienda: parametros.id_equipamiento_vivienda ? parseInt(parametros.id_equipamiento_vivienda) : 0,
                descripcion: parametros.descripcion ? parametros.descripcion : null,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.insertar_equipamiento_vivienda(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.actualizar_equipamiento_vivienda = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_equipamiento_vivienda: parametros.id_equipamiento_vivienda ? parseInt(parametros.id_equipamiento_vivienda) : 0,
                descripcion: parametros.descripcion ? parametros.descripcion : null,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.actualizar_equipamiento_vivienda(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.eliminar_equipamiento_vivienda = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_equipamiento_vivienda: parametros.id_equipamiento_vivienda ? parseInt(parametros.id_equipamiento_vivienda) : 0,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.eliminar_equipamiento_vivienda(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}