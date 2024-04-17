var responseHttp = require("./response-template");
var reponseMessage = require("./response-message");
var { CODE } = require("./http-status-code");

exports.errorConnection = (error) => {
    responseHttp.status = CODE.INTERNAL_SERVER_ERROR;
    responseHttp.success = false;
    responseHttp.message = reponseMessage.connectionMessage.error;
    responseHttp.error = error;
    responseHttp.data = [];
    return responseHttp;
}

exports.errorQuerys = (error, peticion) => {
    responseHttp.status = CODE.INTERNAL_SERVER_ERROR;
    responseHttp.success = false;
    if(peticion == 'GET'){responseHttp.message = reponseMessage.errorMessage.get;}
    if(peticion == 'POST'){responseHttp.message = reponseMessage.errorMessage.post;}
    if(peticion == 'PUT'){responseHttp.message = reponseMessage.errorMessage.put;}
    if(peticion == 'DELETE'){responseHttp.message = reponseMessage.errorMessage.delete;}
    responseHttp.error = error;
    responseHttp.data = [];
    return responseHttp;
}