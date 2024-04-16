var jsonTemplate = require("../common/json-template");
var jsonCatalgos = require("../common/json-catalogos");
const { obtenerUsuario } = require('../api-services/auth');
var abastecimientoAguaBd = require("../db_apis/abastecimientoAguaBd");
var { TC_ABASTECIMIENTO_AGUA } = require("../models/catalogos");

exports.insertar_abastecimiento_agua = (req,parameros,method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            TC_ABASTECIMIENTO_AGUA.id_abastecimiento_agua = null;
            TC_ABASTECIMIENTO_AGUA.descripcion = parameros.descripcion;
            TC_ABASTECIMIENTO_AGUA.id_usuario_registro = usuario.idUsuario;
            TC_ABASTECIMIENTO_AGUA.estado_registro = null;
            TC_ABASTECIMIENTO_AGUA.fecha_registro = null;
            var reponse = abastecimientoAguaBd.insertar_abastecimiento_agua(TC_ABASTECIMIENTO_AGUA,method);
            return resolve(reponse);
        } catch (ex) {
            console.log(ex);
            return reject(ex);
        }
    });

}