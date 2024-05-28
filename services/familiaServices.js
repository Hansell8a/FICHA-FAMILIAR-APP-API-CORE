const {
    response
} = require('express');
const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/familiaDB");
var familiaIntergranteServices = require("../services/familiaIntergranteServices");
const moment = require('moment');

exports.obtener = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            const objeto = {
                id_familia: parametros.id_familia ? parseInt(parametros.id_familia) : 0,
                id_ficha_familiar: parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                numero_familia: parametros.numero_familia ? parseInt(parametros.numero_familia) : 0,
                /** */
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }

            var familiasResponse = await oraServices.obtener(objeto, method);
            let arrFamilia = [];
            if (familiasResponse.success) {
                if (familiasResponse.data.length == 0) {
                    return resolve(familiasResponse);
                }
                for (const element of familiasResponse.data) {
                    const objetoFamilia = {
                        id_familia: element.id_familia,
                        id_ficha_familiar: element.id_ficha_familiar,
                        numero_familia: element.numero_familia,
                        estado_registro: element.estado_registro,
                        id_usuario_registro: element.id_usuario_registro,
                        fecha_registro: element.fecha_registro,
                        integrantes: []
                    }
                    const familiaIntergranteResponse = await familiaIntergranteServices.obtener(req, {
                        id_familia: objetoFamilia.id_familia
                    }, method);
                    objetoFamilia.integrantes = familiaIntergranteResponse.data;
                    arrFamilia.push(objetoFamilia);
                    //console.log(arrFamilia);
                };
            }
            //console.log(arrFamilia);
            familiasResponse.data = arrFamilia;
            return resolve(familiasResponse);
            
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
                id_ficha_familiar: parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                numero_familia: parametros.numero_familia ? parseInt(parametros.numero_familia) : 0,
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
                id_familia: parametros.id_familia ? parseInt(parametros.id_familia) : 0,
                id_ficha_familiar: parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                numero_familia: parametros.numero_familia ? parseInt(parametros.numero_familia) : 0,
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
                id_familia: parametros.id_familia ? parseInt(parametros.id_familia) : 0,
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