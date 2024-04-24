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
} = require('../mapper/detalleAguaResidualRowsMapper');

module.exports.obtener = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.DETALLE_AGUA_RESIDUAL.OBTENER}(` +
                `:pIdDetalleAguaResidual,` +
                `:pIdViviendaCaracteristica,` +
                `:pIdTratamientoAguaResidual,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdDetalleAguaResidual: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_detalle_agua_residual
                },
                pIdViviendaCaracteristica: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_vivienda_caracteristica
                },
                pIdTratamientoAguaResidual: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_tratamiento_agua_residual
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
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.DETALLE_AGUA_RESIDUAL.INSERTAR}(` +
                `:pIdViviendaCaracteristica,` +
                `:pIdTratamientoAguaResidual,` +
                `:pObservacion,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdViviendaCaracteristica: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_vivienda_caracteristica
                },
                pIdTratamientoAguaResidual: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_tratamiento_agua_residual
                },
                pObservacion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.observacion
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
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.DETALLE_AGUA_RESIDUAL.ACTUALIZAR}(` +
                `:pIdDetalleAguaResidual,` +
                `:pIdViviendaCaracteristica,` +
                `:pIdTratamientoAguaResidual,` +
                `:pObservacion,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdDetalleAguaResidual: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_detalle_agua_residual
                },
                pIdViviendaCaracteristica: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_vivienda_caracteristica
                },
                pIdTratamientoAguaResidual: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_tratamiento_agua_residual
                },
                pObservacion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.observacion
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
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.DETALLE_AGUA_RESIDUAL.ELIMINAR}(` +
                `:pIdDetalleAguaResidual,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdDetalleAguaResidual: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_detalle_agua_residual
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