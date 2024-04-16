const {
    ejecutarPackage
} = require('../api-services/database');
const {
    catalogosRowMapper
} = require('../mapper/catalogosRowsMapper');
var oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

module.exports.crudGeneral = (jsonP) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = 'PKG_MODULO_PARAMETRIZACION.SCSS_CRUD_CATALOGO(:pJson,:pCatalogoId,:pResultado,:pMsgError,:pRegistro)';
            var binds = {
                pJson: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.CLOB,
                    val: JSON.stringify(jsonP)
                },
                pCatalogoId: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.NUMBER
                },
                pResultado: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pMsgError: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pRegistro: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.CURSOR
                }
            };
            console.log(plsql);
            console.log(binds);
            let result = await ejecutarPackage(plsql, binds, catalogosRowMapper);
            return resolve(result);
        } catch (ex) {
            return reject(ex); 
        }   
    });

}