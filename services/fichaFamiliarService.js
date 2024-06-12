const {
    response
} = require('express');
const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/fichaFamiliarDB");
var viviendaIdentificacionOraServices = require("../db_apis/viviendaIdentificacionDB");
const moment = require('moment');

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
                fecha_supervision: moment(parametros.fecha_supervision, "DD/MM/YYYY").toDate(),
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

exports.insertar_unificado = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_estado_ficha: parametros.id_estado_ficha ? parseInt(parametros.id_estado_ficha) : 0,
                id_usuario_superviso: parametros.id_usuario_superviso ? parseInt(parametros.id_usuario_superviso) : 0,
                fecha_supervision: moment(parametros.fecha_supervision, "DD/MM/YYYY").toDate(),
                /** */
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponseFicha = await oraServices.insertar(objeto, method);
            if (reponseFicha.success) {
                const objetoFichaResponse = {
                    id_ficha_familiar: reponseFicha.data[0].id_ficha_familiar,
                    id_estado_ficha: reponseFicha.data[0].id_estado_ficha,
                    id_usuario_superviso: reponseFicha.data[0].id_usuario_superviso,
                    fecha_supervision: reponseFicha.data[0].fecha_supervision,
                    estado_registro: reponseFicha.data[0].estado_registro,
                    id_usuario_registro: reponseFicha.data[0].id_usuario_registro,
                    fecha_registro: reponseFicha.data[0].fecha_registro
                }
                const vivienda_identificacion_objeto = {
                    id_vivienda_identificacion: parametros.id_vivienda_identificacion ? parseInt(parametros.id_vivienda_identificacion) : 0,
                    id_ficha_familiar: objetoFichaResponse.id_ficha_familiar ? parseInt(objetoFichaResponse.id_ficha_familiar) : 0,
                    latitud: parametros.latitud,
                    longitud: parametros.longitud,
                    direccion: parametros.direccion,
                    id_departamento: parametros.id_departamento,
                    id_municipio: parametros.id_municipio,
                    id_lugar_poblado: parametros.id_lugar_poblado,
                    id_as: (parametros.id_as).toString(),
                    id_ds: (parametros.id_ds).toString(),
                    id_ts: (parametros.id_ts).toString(),
                    id_cc: parametros.id_cc ? (parametros.id_cc).toString() : '0',
                    id_c: parametros.id_c ? (parametros.id_c).toString() : '0',
                    id_territorio: parametros.id_territorio,
                    id_sector: parametros.id_sector,
                    vivienda_habitada: parametros.vivienda_habitada == true ? 1 : 0,
                    /** */
                    id_usuario_registro: usuario.idUsuario,
                    estado_registro: null,
                    fecha_registro: null
                }
                //console.log(vivienda_identificacion_objeto);
                var responseVivienda = await viviendaIdentificacionOraServices.insertar(vivienda_identificacion_objeto, method);
                if (responseVivienda.success) {
                    responseVivienda.data[0].id_estado_ficha = objetoFichaResponse.id_estado_ficha;
                    responseVivienda.data[0].id_usuario_superviso = objetoFichaResponse.id_usuario_superviso;
                    responseVivienda.data[0].fecha_supervision = objetoFichaResponse.fecha_supervision;
                }
                return resolve(responseVivienda);
            } else {
                return reject(reponse);
            }
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
                fecha_supervision: moment(parametros.fecha_supervision, "DD/MM/YYYY").toDate(),
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
                id_ficha_familiar: parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
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


exports.obtenerInformacion = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            const objeto = {
                id_ficha_familiar: parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                cui: parametros.cui ? parseInt(parametros.cui) : 0,
                /** */
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = await oraServices.obtenerInformacion(objeto, method);

            let arr = [];
            reponse.data.forEach(element => {
                const cont = arr.filter(ele => ele.id_estado_ficha == element.id_estado_ficha);
                if(cont.length == 0){
                    arr.push(element);
                }
            });

            reponse.data = arr;

            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}
exports.obtenerRegistroFamilia = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const jsonObject = {
                pIdFichaFamiliar: parseInt(parametros.pIdFichaFamiliar),
                pIdViviendaIdentificacion: parseInt(parametros.pIdViviendaIdentificacion),
                pCui: parseInt(parametros.pCui),
                pNoIdentificacion: parametros.pNoIdentificacion,
                pIdEstadoFicha: parseInt(parametros.pIdEstadoFicha),
                pPrimerNombre: parametros.pPrimerNombre,
                pSegundoNombre: parametros.pSegundoNombre,
                pTercerNombre: parametros.pTercerNombre,
                pPrimerApellido: parametros.pPrimerApellido,
                pSegundoApellido: parametros.pSegundoApellido,
                pIdDepartamento: parseInt(parametros.pIdDepartamento),
                pIdMunicipio: parseInt(parametros.pIdMunicipio)
            };

            const objeto = {
                pJsonParametroFiltro: JSON.stringify(jsonObject),
                /** */
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            };
            var reponse = oraServices.obtenerRegistroFamilia(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}
