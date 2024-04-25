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
} = require('../mapper/familiaIntegranteRowsMapper');

module.exports.obtener = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.FAMILIA_INTEGRANTE.OBTENER}(` +
                `:pIdFamiliaIntegrante,` +
                `:pIdFamilia,` +
                `:pIdPersona,` +
                `:pPrimerNombre,` +
                `:pSegundoNombre,` +
                `:pPrimerApellido,` +
                `:pSegundoApellido,` +
                `:pIdSexo,` +
                `:pIdPueblo,` +
                `:pIdComunidadLinguistica,` +
                `:pIdProveedorSalud,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdFamiliaIntegrante: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_familia_integrante
                },
                pIdFamilia: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_familia
                },
                pIdPersona: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_persona
                },
                pPrimerNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.primer_nombre
                },
                pSegundoNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.segundo_nombre
                },
                pPrimerApellido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.primer_apellido
                },
                pSegundoApellido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.segundo_apellido
                },
                pIdSexo: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_sexo
                },
                pIdPueblo: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_pueblo
                },
                pIdComunidadLinguistica: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_comunidad_linguistica
                },
                pIdProveedorSalud: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_proveedor_salud
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
