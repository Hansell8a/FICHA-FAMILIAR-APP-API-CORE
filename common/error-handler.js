const {
    existsSync,
    writeFileSync,
    appendFileSync,
} = require('fs')
const {
    join
} = require('path')
const {
    CODE
} = require('../common/http-status-code')

const LOG_LOCATION = join(__dirname, '..', 'logs', 'error.log')

module.exports.manejarErrorRequest = (error, response, mensaje) => {
    try {
        let data = `\n-----------------------------\n${new Date()}\n`
        console.log(data)
        console.log(error.stack)
    } catch (error) {
        console.log(error)
    } finally {
        return response.status(CODE.INTERNAL_SERVER_ERROR).json({
            msg: mensaje || 'Error al procesar solicitud'
        })
    }
}

module.exports.registrarError = (error) => {
    try {
        let data = `\n-----------------------------\n${new Date()}\n`
        console.log(data)
        console.log(error.stack)
    } catch (error) {
        console.log(error)
    }
}