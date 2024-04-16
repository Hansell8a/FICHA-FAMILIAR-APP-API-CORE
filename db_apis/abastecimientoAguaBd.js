const {
    ejecutarPackage
} = require('../api-services/database');
const {
    packages,
    procedures
} = require('../api-services/procedures/catalogos');
var oracledb = require('oracledb');
//oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

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
            console.log(plsql);
            console.log(binds);
            let result = await ejecutarPackage(plsql, binds, null,method);
            //ejecutarPackage(plsql, binds, null,method);
            return resolve(null);
        } catch (ex) {
            return reject(ex);
        }
    });
}