const axios = require('axios');
var jwt = require("jsonwebtoken");
const {
    CODE
} = require('../common/http-status-code');
var responseHttp = require("../common/response-template");
var reponseMessage = require("../common/response-message");
const https = require('https');

exports.crearSession = (parameros) => {
    return new Promise((resolve, reject) => {
        try {
            const agent = new https.Agent({
                rejectUnauthorized: false,
            });
            let body = {
                email: parameros.email,
                password: parameros.password
            }
            let headersds = {
                'Content-Type': 'application/json',
                'client-credencial': process.env.AUTH_URL_CLIENT_CREDENTIAL
            }
            axios.post(`${process.env.AUTH_URL}/auth/movil/v1/login`, body,{
                headers: headersds,
                httpsAgent: agent,
            }).then(function (response) {
                let token_model = response.data;
                delete token_model.token;
                delete token_model.refreshToken;

                let tokenMovil = jwt.sign(token_model,process.env.JWT_MOVIL_SECRET);
                let reponse_model = response.data;
                reponse_model.tokenMovil = tokenMovil;

                responseHttp.status = CODE.OK;
                responseHttp.success = true;
                responseHttp.message = reponseMessage.successMessage.get;
                responseHttp.error = '';
                responseHttp.data = reponse_model;
                return resolve(responseHttp);
            }).catch(function (error) {
                
                if(error.response){
                    const response = error.response.data;
                    responseHttp.status = CODE.CONFLICT;
                    responseHttp.success = false;
                    responseHttp.message = '';
                    responseHttp.error = response.message?response.message:'';
                    responseHttp.data = {};
                    return resolve(responseHttp);
                } else {
                    console.log(error);
                    return reject(error);
                }
            });
        } catch (ex) {
            return reject(ex);
        }
    });


}