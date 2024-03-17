var responseHttp = require("./response-template");
var reponseMessage = require("./response-message");

exports.errorConnection = (error) => {
    responseHttp.status = 500;
    responseHttp.success = false;
    responseHttp.message = reponseMessage.connectionMessage.error;
    responseHttp.data = error;
    return responseHttp;
}

exports.errorQuerys = (error, peticion) => {
    responseHttp.status = 500;
    responseHttp.success = false;
    if(peticion == 'GET'){responseHttp.message = reponseMessage.errorMessage.get;}
    if(peticion == 'POST'){responseHttp.message = reponseMessage.errorMessage.post;}
    if(peticion == 'PUT'){responseHttp.message = reponseMessage.errorMessage.put;}
    if(peticion == 'DELETE'){responseHttp.message = reponseMessage.errorMessage.delete;}
    responseHttp.data = error;
    return responseHttp;
}