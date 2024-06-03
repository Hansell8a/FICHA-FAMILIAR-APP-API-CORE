const {
    ejecutarPackage
} = require('../api-services/database');
const {
    PACKAGES,
    PROCEDURES
} = require('../api-services/procedures/ficha-familiar');
var oracledb = require('oracledb');
const {
    rowMapper
} = require('../mapper/viviendaIdentificacionRowsMapper');

module.exports.obtener = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.VIVIENDA_IDENTIFICACION.OBTENER}(` +
                `:pIdViviendaIdentificacion,` +
                `:pIdFichaFamiliar,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdViviendaIdentificacion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_vivienda_identificacion
                },
                pIdFichaFamiliar: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_ficha_familiar
                },
                pIdUsuarioRegistro: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_registro
                },
                /** */
                pCursor: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.CURSOR
                },
                pSmsError: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensaje: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsErrorLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensajeLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                }
            };
            let result = await ejecutarPackage(plsql, binds, rowMapper, method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.insertar = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.VIVIENDA_IDENTIFICACION.INSERTAR}(` +
                `:pIdViviendaIdentificacion,` +
                `:pIdFichaFamiliar,` +
                `:pLatitud,` +
                `:pLongitud,` +
                `:pDireccion,` +
                `:pIdDepartamento,` +
                `:pIdMunicipio,` +
                `:pIdLugarPoblado,` +
                `:pIdas,` +
                `:pIdds,` +
                `:pIdts,` +
                `:pIdcc,` +
                `:pIdc,` +
                `:pIdTerritorio,` +
                `:pIdSector,` +
                `:pViviendaHabitada,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdViviendaIdentificacion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_vivienda_identificacion
                },
                pIdFichaFamiliar: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_ficha_familiar
                },
                pLatitud: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.latitud
                },
                pLongitud: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.longitud
                },
                pDireccion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.direccion
                },
                pIdDepartamento: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_departamento
                },
                pIdMunicipio: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_municipio
                },
                pIdLugarPoblado: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_lugar_poblado
                },
                pIdas: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_as
                },
                pIdds: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_ds
                },
                pIdts: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_ts
                },
                pIdcc: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_cc
                },
                pIdc: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_c
                },
                pIdTerritorio: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_territorio
                },
                pIdSector: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_sector
                },
                pViviendaHabitada: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.vivienda_habitada
                },
                pIdUsuarioRegistro: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_registro
                },
                /** */
                pCursor: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.CURSOR
                },
                pSmsError: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensaje: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsErrorLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensajeLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                }
            };
            let result = await ejecutarPackage(plsql, binds, rowMapper, method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.actualizar = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.VIVIENDA_IDENTIFICACION.ACTUALIZAR}(` +
                `:pIdViviendaIdentificacion,` +
                `:pIdFichaFamiliar,` +
                `:pLatitud,` +
                `:pLongitud,` +
                `:pDireccion,` +
                `:pIdDepartamento,` +
                `:pIdMunicipio,` +
                `:pIdLugarPoblado,` +
                `:pIdas,` +
                `:pIdds,` +
                `:pIdts,` +
                `:pIdcc,` +
                `:pIdc,` +
                `:pIdTerritorio,` +
                `:pIdSector,` +
                `:pViviendaHabitada,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdViviendaIdentificacion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_vivienda_identificacion
                },
                pIdFichaFamiliar: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_ficha_familiar
                },
                pLatitud: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.latitud
                },
                pLongitud: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.longitud
                },
                pDireccion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.direccion
                },
                pIdDepartamento: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_departamento
                },
                pIdMunicipio: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_municipio
                },
                pIdLugarPoblado: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_lugar_poblado
                },
                pIdas: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_as
                },
                pIdds: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_ds
                },
                pIdts: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_ts
                },
                pIdcc: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_cc
                },
                pIdc: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.id_c
                },
                pIdTerritorio: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_territorio
                },
                pIdSector: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_sector
                },
                pViviendaHabitada: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.vivienda_habitada
                },
                pIdUsuarioRegistro: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_registro
                },
                /** */
                pCursor: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.CURSOR
                },
                pSmsError: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensaje: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsErrorLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensajeLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                }
            };
            let result = await ejecutarPackage(plsql, binds, rowMapper, method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.eliminar = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.VIVIENDA_IDENTIFICACION.ELIMINAR}(` +
                `:pIdViviendaIdentificacion,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdViviendaIdentificacion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_vivienda_identificacion
                },
                pIdUsuarioRegistro: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_registro
                },
                /** */
                pCursor: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.CURSOR
                },
                pSmsError: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensaje: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsErrorLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensajeLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                }
            };
            let result = await ejecutarPackage(plsql, binds, rowMapper, method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}
