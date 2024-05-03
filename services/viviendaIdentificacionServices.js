const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/viviendaIdentificacionDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_vivienda_identificacion: parametros.id_vivienda_identificacion ? parseInt(parametros.id_vivienda_identificacion) : 0,
                id_ficha_familiar: parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
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
                id_vivienda_identificacion:  parametros.id_vivienda_identificacion ? parseInt(parametros.id_vivienda_identificacion) : 0,
                id_ficha_familiar:  parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                latitud:  parametros.latitud,
                longitud:  parametros.longitud,
                direccion:  parametros.direccion,
                id_departamento:  parametros.id_departamento,
                id_municipio:  parametros.id_municipio,
                id_lugar_poblado:  parametros.id_lugar_poblado,
                id_as:  (parametros.id_as).toString(),
                id_ds:  (parametros.id_ds).toString(),
                id_ts:  (parametros.id_ts).toString(),
                id_cc:  (parametros.id_cc).toString(),
                id_c:  (parametros.id_c).toString(),
                id_territorio:  parametros.id_territorio,
                id_sector:  parametros.id_sector,
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
                id_vivienda_identificacion:  parametros.id_vivienda_identificacion ? parseInt(parametros.id_vivienda_identificacion) : 0,
                id_ficha_familiar:  parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                latitud:  parametros.latitud,
                longitud:  parametros.longitud,
                direccion:  parametros.direccion,
                id_departamento:  parametros.id_departamento,
                id_municipio:  parametros.id_municipio,
                id_lugar_poblado:  parametros.id_lugar_poblado,
                id_as:  (parametros.id_as).toString(),
                id_ds:  (parametros.id_ds).toString(),
                id_ts:  (parametros.id_ts).toString(),
                id_cc:  (parametros.id_cc).toString(),
                id_c:  (parametros.id_c).toString(),
                id_territorio:  parametros.id_territorio,
                id_sector:  parametros.id_sector,
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
                id_vivienda_identificacion:  parametros.id_vivienda_identificacion ? parseInt(parametros.id_vivienda_identificacion) : 0,
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