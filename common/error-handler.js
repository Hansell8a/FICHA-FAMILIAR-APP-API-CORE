const fs = require('fs');
const {
    join
} = require('path')
const {
    CODE
} = require('../common/http-status-code');
var responseHttp = require("./response-template");

const LOG_LOCATION = join(__dirname, '..', 'logs', 'error.log')

module.exports.manejarErrorRequest = (error) => {
    try {
        let errorMensaje = '';
        if(error.status){ errorMensaje = error.error;}else{errorMensaje = error.stack;}
        console.log(`\n----------------------------------------------------------`);
        console.log('\x1b[31m%s\x1b[0m',`Error --> ${new Date()}\n`)
        console.log(errorMensaje);
        console.log('-----------------------------------------------------------');
        escribirLog(errorMensaje);
        if(error.status){return error;}
        return httpErrorApi(error)
    } catch (error) {
        //console.log(error);
    }
}

function httpErrorApi(error){
    responseHttp.status = CODE.INTERNAL_SERVER_ERROR;
    responseHttp.success = false;
    responseHttp.message = 'Error al procesar solicitud';
    responseHttp.error = error.message;
    responseHttp.data = [];
    return responseHttp;
}

function escribirLog(data) {
    const fechaHora = new Date().toISOString();
    let mensaje = 
    `\n----------------------------------------------------------\n`
    +`Error --> ${new Date()}\n`
    +`${data}`
    +`\n----------------------------------------------------------\n`;
    const mensajeFormateado = `${fechaHora}: ${mensaje}\n`;
    fs.appendFile(LOG_LOCATION, mensajeFormateado, (err) => {
        if (err) {
            //console.error('Error al escribir en el archivo de registro:', err);
        }
    });
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