const {
    obtenerUsuario
} = require('../api-services/auth');
var abastecimientoAguaBd = require("../db_apis/abastecimientoAguaBd");

exports.obtener_abastecimiento_agua = (req, parameros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_abastecimiento_agua: parameros.id_abastecimiento_agua ? parseInt(parameros.id_abastecimiento_agua) : 0,
                descripcion: parameros.descripcion ? parameros.descripcion : null,
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = abastecimientoAguaBd.obtener_abastecimiento_agua(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            console.log(ex);
            return reject(ex);
        }
    });
}

exports.insertar_abastecimiento_agua = (req, parameros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_abastecimiento_agua: null,
                descripcion: parameros.descripcion,
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

exports.actualizar_abastecimiento_agua = (req, parameros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_abastecimiento_agua: parameros.id_abastecimiento_agua,
                descripcion: parameros.descripcion,
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