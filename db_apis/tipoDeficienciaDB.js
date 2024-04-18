const {
    ejecutarPackage
} = require('../api-services/database');
const {
    PACKAGES,
    PROCEDURES
} = require('../api-services/procedures/catalogos');
var oracledb = require('oracledb');
const { rowMapper } = require('../mapper/tipoDeficienciaRowsMapper');

module.exports.obtener = (parametros,method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.TIPO_DEFICIENCIA.OBTENER}(` +
                `:pIdTipoDeficiencia,` +
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
                pIdTipoDeficiencia: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_tipo_deficiencia
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
            let result = await ejecutarPackage(plsql, binds, rowMapper,method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.insertar  = (parametros,method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.TIPO_DEFICIENCIA.INSERTAR}(` +
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
            let result = await ejecutarPackage(plsql, binds, rowMapper,method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.actualizar  = (parametros,method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.TIPO_DEFICIENCIA.ACTUALIZAR}(` +
                `:pIdTipoDeficiencia,` +
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
                pIdTipoDeficiencia: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_tipo_deficiencia
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
            let result = await ejecutarPackage(plsql, binds, rowMapper,method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.eliminar  = (parametros,method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.TIPO_DEFICIENCIA.ELIMINAR}(` +
                `:pIdTipoDeficiencia,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdTipoDeficiencia: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_tipo_deficiencia
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
            let result = await ejecutarPackage(plsql, binds, rowMapper,method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}