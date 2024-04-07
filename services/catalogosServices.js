var jsonTemplate = require("../common/json-template");
var jsonCatalgos = require("../common/json-catalogos");
const { usuario } = require('../api-services/auth');
var catalogosDb = require("../db_apis/catalogos");


exports.crudGeneral = (req,parameros) => {
    console.log(usuario(req));
    return new Promise((resolve, reject) => {
        try {
            jsonTemplate.encabezado.operacion = jsonCatalgos.operaciones.READ;
            jsonTemplate.encabezado.tipoBusqueda = jsonCatalgos.busquedas.ALL;
            jsonTemplate.encabezado.usuario = "hochoa";
            jsonTemplate.atributos = {
                paginaActual: parameros.paginaActual,
                totalPagina: parameros.totalPagina
            };
            var reponse = catalogosDb.crudGeneral(jsonTemplate);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });

}