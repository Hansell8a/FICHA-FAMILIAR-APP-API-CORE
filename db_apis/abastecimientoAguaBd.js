const {
    ejecutarPackage
} = require('../api-services/database');
const {
    packages,
    procedures
} = require('../api-services/procedures/catalogos');
var oracledb = require('oracledb');
const { abastecimientoAguaRowMapper } = require('../mapper/abastecimientoAguaRowsMapper');

module.exports.obtener_abastecimiento_agua = (parametros,method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${packages.PKG_CATALOGOS}.${procedures.sp_obtener_abastecimiento_agua}(` +
                `:pIdAbastecimientoAgua,` +
                `:pDescripcion,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdAbastecimientoAgua: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_abastecimiento_agua
                },
                pDescripcion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.descripcion
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
            let result = await ejecutarPackage(plsql, binds, abastecimientoAguaRowMapper,method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.insertar_abastecimiento_agua = (parametros,method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${packages.PKG_CATALOGOS}.${procedures.sp_insertar_abastecimiento_agua}(` +
                `:pDescripcion,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pDescripcion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.descripcion
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
            let result = await ejecutarPackage(plsql, binds, abastecimientoAguaRowMapper,method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.actualizar_abastecimiento_agua = (parametros,method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${packages.PKG_CATALOGOS}.${procedures.sp_actualizar_abastecimiento_agua}(` +
                `:pIdAbastecimientoAgua,` +
                `:pDescripcion,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdAbastecimientoAgua: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_abastecimiento_agua
                },
                pDescripcion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.descripcion
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
            let result = await ejecutarPackage(plsql, binds, abastecimientoAguaRowMapper,method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.eliminar_abastecimiento_agua = (parametros,method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${packages.PKG_CATALOGOS}.${procedures.sp_eliminar_abastecimiento_agua}(` +
                `:pIdAbastecimientoAgua,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdAbastecimientoAgua: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_abastecimiento_agua
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
            let result = await ejecutarPackage(plsql, binds, abastecimientoAguaRowMapper,method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}