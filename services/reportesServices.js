var responseHttp = require("../common/response-template");
const { CODE } = require('../common/http-status-code');
const { response } = require("express");

exports.obtenerReporteFichaFamiliar = (req, parametros, method) => {
    return new Promise((resolve, reject) => {

        try {
            const URL = `https://sideasgoe.mspas.gob.gt:8465/reporte?rutaReporte=SALUD_FAMILIAR/Registro_Familiar_Comunitario.pdf?pfichaFamiliar=${parametros.id_ficha_familiar}`;
            fetch(URL, {
                headers: new Headers({
                    'Authorization': 'Basic cmVwb3J0ZXJpYXNtRlcmlh'
                })
            }).then(resp => resp.blob()).then(blob => {
                console.log(blob);
                const url = window.URL.createObjectURL(blob);
                //const a = document.createElement('a');
                //a.style.display = 'none';
                //a.href = url;
                // the filename you want
                //a.download = `ficha_Familiar-${id_ficha_familiar}.pdf`;
                //document.body.appendChild(a);
                //a.click();
                window.URL.revokeObjectURL(url);
                console.log(url);

                responseHttp.status = CODE.OK;
                responseHttp.success = true;
                responseHttp.message = '';
                responseHttp.error =  '';
                responseHttp.data = url;

                return response(responseHttp);

                //hideSpinner();
            }).catch((e) => {
                responseHttp.status = CODE.INTERNAL_SERVER_ERROR;
                responseHttp.success = false;
                responseHttp.message = URL;
                responseHttp.error =  e;
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