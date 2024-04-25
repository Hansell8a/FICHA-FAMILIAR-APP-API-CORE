const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/familiaIntegranteDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_familia_integrante: parametros.id_familia_integrante ? parseInt(parametros.id_familia_integrante) : 0,
                id_familia: parametros.id_familia ? parseInt(parametros.id_familia) : 0,
                id_persona: parametros.id_persona ? parseInt(parametros.id_persona) : 0,

                primer_nombre: parametros.primer_nombre ? parametros.primer_nombre : null,
                segundo_nombre: parametros.segundo_nombre ? parametros.segundo_nombre : null,
                primer_apellido: parametros.primer_apellido ? parametros.primer_apellido : null,
                segundo_apellido: parametros.segundo_apellido ? parametros.segundo_apellido : null,

                id_sexo: parametros.id_sexo ? parseInt(parametros.id_sexo) : 0,
                id_pueblo: parametros.id_pueblo ? parseInt(parametros.id_pueblo) : 0,
                id_comunidad_linguistica: parametros.id_comunidad_linguistica ? parseInt(parametros.id_comunidad_linguistica) : 0,
                id_proveedor_salud: parametros.id_proveedor_salud ? parseInt(parametros.id_proveedor_salud) : 0,
                /** */
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.obtener(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}