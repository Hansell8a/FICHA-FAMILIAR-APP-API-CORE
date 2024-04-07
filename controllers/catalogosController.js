var express = require('express');
var router = express.Router();

const { CODE } = require('../common/http-status-code');
var responseHttp = require("../common/response-template");
var reponseMessage = require("../common/response-message");
var services = require("../services/catalogosServices");


router.get('/', (req, res, next) => {
    //console.log(req.headers);
    services.crudGeneral(req,req.query).then((response) => {
        responseHttp.status = 200;
        responseHttp.success = true;
        responseHttp.message = reponseMessage.successMessage.get;
        responseHttp.data = response;
        res.send(responseHttp);
    }, (error) => {
        //console.error("Failed!", error);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(error)
    }).catch((ex) => {
        //console.error("Exception!", ex);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(ex);
    });
});

module.exports = router;