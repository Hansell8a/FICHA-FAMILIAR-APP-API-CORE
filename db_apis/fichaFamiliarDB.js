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
} = require('../mapper/fichaFamiliarRowsMapper');

module.exports.obtener = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.FICHA_FAMILIAR.OBTENER}(` +
                `:pIdFichaFamiliar,` +
                `:pIdEstadoFicha,` +
                `:pIdUsuarioSuperviso,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdFichaFamiliar: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_ficha_familiar
                },
                pIdEstadoFicha: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_estado_ficha
                },
                pIdUsuarioSuperviso: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_superviso
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
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.FICHA_FAMILIAR.INSERTAR}(` +
                `:pIdEstadoFicha,` +
                `:pIdUsuarioSuperviso,` +
                `:pFechaSupervision,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdEstadoFicha: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_estado_ficha
                },
                pIdUsuarioSuperviso: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_superviso
                },
                pFechaSupervision: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.DATE,
                    val: parametros.fecha_supervision
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
            console.log(binds);
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
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.FICHA_FAMILIAR.ACTUALIZAR}(` +
                `:pIdFichaFamiliar,` +
                `:pIdEstadoFicha,` +
                `:pIdUsuarioSuperviso,` +
                `:pFechaSupervision,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdFichaFamiliar: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_ficha_familiar
                },
                pIdEstadoFicha: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_estado_ficha
                },
                pIdUsuarioSuperviso: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_superviso
                },
                pFechaSupervision: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.fecha_supervision
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
            console.log(binds);
            let result = await ejecutarPackage(plsql, binds, rowMapper, method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}