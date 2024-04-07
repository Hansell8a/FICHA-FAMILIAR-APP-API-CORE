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
        //console.error("Failed!", error);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(error)
    }).catch((ex) => {
        //console.error("Exception!", ex);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(ex);
    }); 
});

module.exports = router;