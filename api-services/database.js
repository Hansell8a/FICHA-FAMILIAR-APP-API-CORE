const oracledb = require('oracledb')
var connectionMessage = require("../common/connection-error");
var reponseMessage = require("../common/response-message");
var responseHttp = require("../common/response-template");
const { CODE } = require('../common/http-status-code');
const { response } = require('express');
oracledb.initOracleClient({
  libDir: process.env.DB_CLIENT_LIB
})
oracledb.autoCommit = true
let pool
let outputFormat = {
  outFormat: oracledb.OUT_FORMAT_OBJECT
}


module.exports.initialize = async () => {
  try {
    //console.log(process.env.DB_USER);
    pool = await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      connectString: process.env.DB_CONNECT_STRING,
      poolMax: parseInt(process.env.DB_POOL_MAX),
      poolMin: parseInt(process.env.DB_POOL_MIN),
      //queueTimeout: parseInt(process.env.DB_QUEUE_TIMEOUT)
    })
    console.log('--> Exito en la conexión a la base de datos')
  } catch (err) {
    console.error(err)
  }
}

module.exports.close = async () => {
  if (pool) {
    try {
      await pool.close()
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports.ejecutarSP = async (sp, binds = {}) => {
  //binds = { ...binds, cursor: { type: CURSOR, dir: BIND_OUT } }
  let connection
  let params = ''
  let resultData = []
  try {
    if (process.env.MODE == 'DEV') {
      let test = ''
      Object.keys(binds).forEach((key, i) => {
        if (typeof binds[key].val == 'string') {
          test += `${i > 0 ? ',' : ''}'${binds[key].val}'`
        } else {
          test += `${i > 0 ? ',' : ''}${binds[key].val}`
        }
      })
      console.log(`BEGIN ${sp}(${test}); END;`)
    }
    Object.keys(binds).forEach((key, i) => params += `${i > 0 ? ',' : ''}:${key}`)
    connection = await pool.getConnection()
    result = await connection.execute(`BEGIN ${sp}(${params}); END;`, binds, outputFormat)
    const resultSet = result.outBinds.cursor
    resultData = await resultSet.getRows()
    await resultSet.close()
    return resultData
  } catch (err) {
    throw (err)
  } finally {
    if (connection) {
      try {
        await connection.close()
      } catch (err) {
        throw (err)
      }
    }
  }
}

module.exports.ejecutarSPSinCursorSalida = async (sp, binds = {}) => {
  let connection
  let params = ''
  try {
    if (process.env.MODE == 'DEV') {
      let test = ''
      Object.keys(binds).forEach((key, i) => {
        if (typeof binds[key].val == 'string') {
          test += `${i > 0 ? ',' : ''}'${binds[key].val}'`
        } else {
          test += `${i > 0 ? ',' : ''}${binds[key].val}`
        }
      })
      console.log(`BEGIN ${sp}(${test}); END;`)
    }
    Object.keys(binds).forEach((key, i) => params += `${i > 0 ? ',' : ''}:${key}`)
    connection = await pool.getConnection()
    result = await connection.execute(`BEGIN ${sp}(${params}); END;`, binds, outputFormat)
    return true
  } catch (err) {
    throw (err)
  } finally {
    if (connection) {
      try {
        await connection.close()
      } catch (err) {
        throw (err)
      }
    }
  }
}


module.exports.ejecutarPackage = (sp, binds = {}, mapper, method) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(async function (err, connection) {
      if (err) {
        return reject(connectionMessage.errorConnection(err.message));
      }
      connection.execute(`BEGIN  ${sp}; END;`, binds, async function (err, result) {
        if (err) {
          await connection.close();
          return reject(connectionMessage.errorQuerys(err.message, method));
        }
        const outBinds = result.outBinds;
        //console.log(outBinds);
        var data = await mapper(outBinds);
        await connection.close();
        return resolve(reponse_api(data,method));
      });
    });
  });
}

function reponse_api(reponse,method) {
  if (reponse.smsError) {
    responseHttp.status = CODE.INTERNAL_SERVER_ERROR;
    responseHttp.success = false;

    if(method == 'GET'){responseHttp.message = reponseMessage.errorMessage.get;}
    if(method == 'POST'){responseHttp.message = reponseMessage.errorMessage.post;}
    if(method == 'PUT'){responseHttp.message = reponseMessage.errorMessage.put;}
    if(method == 'DELETE'){responseHttp.message = reponseMessage.errorMessage.delete;}

    responseHttp.error =  reponse.smsError;
    responseHttp.data = [];
    return responseHttp;
  }
  if (!reponse.smsError && reponse.registros.length == 0 && method != "GET") {
    console.log('aqui');
    responseHttp.status = CODE.CONFLICT;
    responseHttp.success = false;
    responseHttp.message = reponse.smsMensaje;
    responseHttp.error =  null;
    responseHttp.data = [];
    return responseHttp;
  }

  responseHttp.status = CODE.OK;
  responseHttp.success = true;
  if(method == 'GET'){responseHttp.message = reponseMessage.successMessage.get;}
  if(method == 'POST'){responseHttp.message = reponseMessage.successMessage.post;}
  if(method == 'PUT'){responseHttp.message = reponseMessage.successMessage.put;}
  if(method == 'DELETE'){responseHttp.message = reponseMessage.successMessage.delete;}
  responseHttp.error =  null;
  responseHttp.data = reponse.registros;
  return responseHttp;
}