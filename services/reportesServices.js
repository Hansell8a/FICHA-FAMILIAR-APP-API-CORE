var responseHttp = require("../common/response-template");
const { CODE } = require('../common/http-status-code');
const fetch = require('node-fetch'); 

exports.obtenerReporteFichaFamiliar = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const URL = `https://sideasqa.mspas.gob.gt:8465/reporte?rutaReporte=SALUD_FAMILIAR/Registro_Familiar_Comunitario.pdf?pfichaFamiliar=${parametros.id_ficha_familiar}`;
            fetch(URL, {
                headers: {
                    'Authorization': 'Basic cmVwb3J0ZXJpYXNtRlcmlh'
                }
            })
            .then(resp => {
                if (!resp.ok) {
                    responseHttp.status = CODE.INTERNAL_SERVER_ERROR;
                    responseHttp.success = false;
                    responseHttp.message = 'Error al obtener el archivo';
                    responseHttp.error =  '';
                    responseHttp.data = [];
                    return reject(responseHttp);
                }
                return resp.buffer(); // Obtiene el contenido del archivo como un buffer
            })
            .then(buffer => {
                responseHttp.status = CODE.OK;
                responseHttp.success = true;
                responseHttp.message = 'Archivo obtenido con exito';
                responseHttp.error =  '';
                responseHttp.data = [];
                return resolve({
                    responseHttp, 
                buffer});
            })
            .catch((e) => {
                responseHttp.status = CODE.INTERNAL_SERVER_ERROR;
                responseHttp.success = false;
                responseHttp.message = '';
                responseHttp.error =  'Error al obtener el reporte:', e.messaje;
                responseHttp.data = [];
                return reject(responseHttp);
            });
        } catch (ex) {
            responseHttp.status = CODE.INTERNAL_SERVER_ERROR;
            responseHttp.success = false;
            responseHttp.message = '';
            responseHttp.error =  ex;
            responseHttp.data = [];
            return reject(ex);
        }
    });
}