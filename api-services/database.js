const oracledb = require('oracledb')
var connectionMessage = require("../common/connection-error");

oracledb.initOracleClient({ libDir: process.env.DB_CLIENT_LIB })
oracledb.autoCommit = true
let pool
let outputFormat = {
  outFormat: oracledb.OUT_FORMAT_OBJECT
}


module.exports.initialize = async () => {
  try {
    console.log(process.env.DB_USER);
    pool = await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      connectString: process.env.DB_CONNECT_STRING,
      poolMax: parseInt(process.env.DB_POOL_MAX),
      poolMin: parseInt(process.env.DB_POOL_MIN),
    })
    console.log('Conexión a la base de datos')
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


module.exports.ejecutarPackage = (sp, binds = {}, mapper) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        return reject(connectionMessage.errorConnection(err.message));
      }
      connection.execute(`CALL ${sp}`, binds, outputFormat, async function (err, result) {
        if (err) {
          await connection.close()
          return reject(connectionMessage.errorQuerys(err.message, "GET"));
        }
        const resultSet = result.outBinds.pRegistro;
        var data = await mapper(resultSet);
        await connection.close()
        return resolve(data);
      });
    });
  });



  /*   connection = await pool.getConnection()

    result = await connection.execute(`CALL ${sp}`, binds, outputFormat);

    const resultSet = result.outBinds.pRegistro
    resultData = await resultSet.getRows()
    await resultSet.close()
    console.log(resultData);
    return resultData;
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
  } */
}