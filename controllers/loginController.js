var express = require('express');
var router = express.Router();
const { CODE } = require('../common/http-status-code');
var responseHttp = require("../common/response-template");
var reponseMessage = require("../common/response-message");
var services = require("../services/loginServices");

router.post('/', (req, res, next) => {
 services.crearSession(req.body).then((response) => {
        res.status(CODE.OK).send(response);
    }, (error) => {
        res.status(CODE.INTERNAL_SERVER_ERROR).send(manejarErrorRequest(error));        
    }).catch((ex) => {
        res.status(CODE.INTERNAL_SERVER_ERROR).send(manejarErrorRequest(ex));  
    });
});

module.exports = router;