const {
    obtenerUsuario
} = require('../api-services/auth');
var abastecimientoAguaBd = require("../db_apis/abastecimientoAguaBd");

exports.obtener_abastecimiento_agua = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_abastecimiento_agua: parametros.id_abastecimiento_agua ? parseInt(parametros.id_abastecimiento_agua) : 0,
                descripcion: parametros.descripcion ? parametros.descripcion : null,
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = abastecimientoAguaBd.obtener_abastecimiento_agua(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.insertar_abastecimiento_agua = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_abastecimiento_agua: null,
                descripcion: parametros.descripcion,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = await abastecimientoAguaBd.insertar_abastecimiento_agua(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.actualizar_abastecimiento_agua = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_abastecimiento_agua: parametros.id_abastecimiento_agua ? parseInt(parametros.id_abastecimiento_agua) : 0,
                descripcion: parametros.descripcion,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = await abastecimientoAguaBd.actualizar_abastecimiento_agua(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.eliminar_abastecimiento_agua = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_abastecimiento_agua: parametros.id_abastecimiento_agua ? parseInt(parametros.id_abastecimiento_agua) : 0,
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = await abastecimientoAguaBd.eliminar_abastecimiento_agua(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}