var express = require('express');
var router = express.Router();
const { CODE } = require('../common/http-status-code');
var services = require("../services/descripcionServicioServices");
const {
    manejarErrorRequest
} = require('../common/error-handler');

router.get('/', (req, res, next) => {
    services.obtener(req,req.query,"GET").then((response) => {
        if(response.status != CODE.OK){res.status(response.status).send(manejarErrorRequest(response));} 
        else {res.status(response.status).send(response);}
    }, (error) => {
        res.status(CODE.INTERNAL_SERVER_ERROR).send(manejarErrorRequest(error));        
    }).catch((ex) => {
        res.status(CODE.INTERNAL_SERVER_ERROR).send(manejarErrorRequest(ex));  
    });
});

module.exports = router;