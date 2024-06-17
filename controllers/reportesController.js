var express = require('express');
var router = express.Router();
const { CODE } = require('../common/http-status-code');
var responseHttp = require("../common/response-template");
const fetch = require('node-fetch');
const {
    manejarErrorRequest
} = require('../common/error-handler');

router.get('/', (req, res, next) => {
    try {
        const id_ficha_familiar = req.query.id_ficha_familiar;
        const URL = `${process.env.REPORT_URL}/reporte?rutaReporte=SALUD_FAMILIAR/Registro_Familiar_Comunitario.pdf?pfichaFamiliar=${id_ficha_familiar}`;
        fetch(URL, {
            headers: {
                'Authorization': 'Basic cmVwb3J0ZXJpYXNtRlcmlh'
            }
        }).then(resp => {
            if (!resp.ok) {
                res.status(CODE.INTERNAL_SERVER_ERROR).send(manejarErrorRequest(null)); 
            }
            return resp.buffer(); // Obtiene el contenido del archivo como un buffer
        }).then(buffer => {
            responseHttp.status = CODE.OK;
            responseHttp.success = true;
            responseHttp.message = 'Archivo obtenido con exito';
            responseHttp.error =  '';
            responseHttp.data = buffer;
            
            res.setHeader('Content-Disposition', `attachment; filename="ficha_Familiar.pdf"`);
            res.setHeader('Content-Type', 'application/pdf');
            res.status(CODE.OK).send(buffer);
            //res.buffer();
        })
    }catch (ex) {
        res.status(CODE.INTERNAL_SERVER_ERROR).send(manejarErrorRequest(ex)); 
    }
});

module.exports = router;