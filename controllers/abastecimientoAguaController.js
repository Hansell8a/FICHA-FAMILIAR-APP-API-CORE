var express = require('express');
var router = express.Router();
const { CODE } = require('../common/http-status-code');
var services = require("../services/abastecimientoAguaServices");
const {
    manejarErrorRequest,
    escribirLog
} = require('../common/error-handler');


router.get('/', (req, res, next) => {
    services.obtener_abastecimiento_agua(req,req.query,"GET").then((response) => {
        res.status(response.status).send(response);
    }, (error) => {
        //if(error.status){res.status(error.status).send(error)}
        res.status(CODE.INTERNAL_SERVER_ERROR).send(manejarErrorRequest(error));        
    }).catch((ex) => {
        //if(ex.status){res.status(ex.status).send(ex);escribirLog(error.error);}
        res.status(CODE.INTERNAL_SERVER_ERROR).send(manejarErrorRequest(ex));  
    });
});

router.post('/', (req, res, next) => {
    services.insertar_abastecimiento_agua(req,req.body,"POST").then((response) => {
        res.status(response.status).send(response);
    }, (error) => {
        //console.error("Failed!", error);
        res.status(error.status).send(error);
    }).catch((ex) => {
        //console.error("Exception!", ex);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(ex);
    });
});

router.put('/', (req, res, next) => {
    services.actualizar_abastecimiento_agua(req,req.body,"PUT").then((response) => {
        res.status(response.status).send(response);
    }, (error) => {
        //console.error("Failed!", error);
        res.status(error.status).send(error);
    }).catch((ex) => {
        //console.error("Exception!", ex);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(ex);
    });
});

router.delete('/', (req, res, next) => {
    services.eliminar_abastecimiento_agua(req,req.query,"DELETE").then((response) => {
        res.status(response.status).send(response);
    }, (error) => {
        //console.error("Failed!", error);
        res.status(error.status).send(error);
    }).catch((ex) => {
        //console.error("Exception!", ex);
        res.status(CODE.INTERNAL_SERVER_ERROR).send(ex);
    });
});

module.exports = router;