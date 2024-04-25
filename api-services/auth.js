const {
    CODE
} = require('../common/http-status-code');
var responseHttp = require("../common/response-template");
const axios = require('axios')
var jwt = require("jsonwebtoken");


module.exports.verificarToken = async (request, response, next) => {
    let status = 'Inicie Sesión nuevamente para acceder al sistema'
    try {
        let token = request.headers["authorization"].split(' ')[1];
        if (!token) {
            responseHttp.status = CODE.UNAUTHORIZED;
            responseHttp.success = false;
            responseHttp.message = status;
            responseHttp.data = [];
            return response.status(CODE.UNAUTHORIZED).json(responseHttp);
        }
        jwt.verify(token, process.env.JWT_MOVIL_SECRET);

        /*         let config = {
                    method: 'get',
                    url: `${process.env.AUTH_URL}/auth/valid`,
                    headers: {
                        'client-credencial': process.env.AUTH_URL_CLIENT_CREDENTIAL,
                        'Authorization': token
                    }
                }
                const { status } = await axios(config);
                if(status != 202){
                    responseHttp.status = CODE.UNAUTHORIZED;
                    responseHttp.success = false;
                    responseHttp.message = status;
                    responseHttp.data = [];
                    return response.status(CODE.UNAUTHORIZED).json(responseHttp);
                } */
        next()
    } catch (error) {
        //console.log(error);
        responseHttp.status = CODE.UNAUTHORIZED;
        responseHttp.success = false;
        responseHttp.message = status;
        responseHttp.data = [];
        return response.status(CODE.UNAUTHORIZED).json(responseHttp);
        //return response.status(CODE.UNAUTHORIZED).json({ status })
    }
}

exports.obtenerUsuario = (req) => {
    let token = req.headers.authorization.split(' ')[1];
    var decoded = jwt.verify(token, process.env.JWT_MOVIL_SECRET);
    return {
        idUsuario: decoded.idUsuario,
        username: decoded.username,
    }
}