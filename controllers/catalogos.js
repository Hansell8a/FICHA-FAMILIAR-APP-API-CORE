var express = require('express');
var router = express.Router();

var responseHttp = require("../common/response-template");
var reponseMessage = require("../common/response-message");
var services = require("../services/catalogosServices");


router.get('/', (req, res, next) => {
    //console.log(req.headers);
    services.crudGeneral(req.query).then((response) => {
        responseHttp.status = 200;
        responseHttp.success = true;
        responseHttp.message = reponseMessage.successMessage.get;
        responseHttp.data = response;
        res.send(responseHttp);
    }, (error) => {
        //console.error("Failed!", error);
        res.status(404).send(error)
    }).catch((ex) => {
        //console.error("Exception!", ex);
        res.status(500).send(ex);
    });
});

module.exports = router;