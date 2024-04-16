var express = require('express');
var router = express.Router();

const { CODE } = require('../common/http-status-code');
var responseHttp = require("../common/response-template");
var reponseMessage = require("../common/response-message");
var services = require("../services/abastecimientoAguaServices");

router.post('/', (req, res, next) => {
    services.insertar_abastecimiento_agua(req,req.body,"POST").then((response) => {
        res.status(response.status).send(response);
    }, (error) => {
        //console.error("Failed!", error);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(error)
    }).catch((ex) => {
        //console.error("Exception!", ex);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(ex);
    });
});

router.get('/', (req, res, next) => {
    services.obtener_abastecimiento_agua(req,req.query,"GET").then((response) => {
        res.status(response.status).send(response);
    }, (error) => {
        //console.error("Failed!", error);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(error)
    }).catch((ex) => {
        //console.error("Exception!", ex);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(ex);
    });
});


module.exports = router;