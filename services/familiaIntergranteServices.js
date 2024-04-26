const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/familiaIntegranteDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_familia_integrante:      parametros.id_familia_integrante ? parseInt(parametros.id_familia_integrante) : 0,
                id_familia:                 parametros.id_familia ? parseInt(parametros.id_familia) : 0,
                id_persona:                 parametros.id_persona ? parseInt(parametros.id_persona) : 0,

                primer_nombre:              parametros.primer_nombre ? parametros.primer_nombre : null,
                segundo_nombre:             parametros.segundo_nombre ? parametros.segundo_nombre : null,
                primer_apellido:            parametros.primer_apellido ? parametros.primer_apellido : null,
                segundo_apellido:           parametros.segundo_apellido ? parametros.segundo_apellido : null,

                id_sexo:                    parametros.id_sexo ? parseInt(parametros.id_sexo) : 0,
                id_pueblo:                  parametros.id_pueblo ? parseInt(parametros.id_pueblo) : 0,
                id_comunidad_linguistica:   parametros.id_comunidad_linguistica ? parseInt(parametros.id_comunidad_linguistica) : 0,
                id_proveedor_salud:         parametros.id_proveedor_salud ? parseInt(parametros.id_proveedor_salud) : 0,
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

exports.insertar = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_familia:                 parametros.id_familia ? parseInt(parametros.id_familia) : 0,
                id_persona:                 parametros.id_persona ? parseInt(parametros.id_persona) : 0,
                primer_nombre:              parametros.primer_nombre ? parametros.primer_nombre : null,
                segundo_nombre:             parametros.segundo_nombre ? parametros.segundo_nombre : null,
                tercer_nombre:              parametros.tercer_nombre ? parametros.tercer_nombre : null,
                primer_apellido:            parametros.primer_apellido ? parametros.primer_apellido : null,
                segundo_apellido:           parametros.segundo_apellido ? parametros.segundo_apellido : null,
                id_parentesco:              parametros.id_parentesco ? parseInt(parametros.id_parentesco) : 0,
                id_estado_civil:            parametros.id_estado_civil ? parseInt(parametros.id_estado_civil) : 0,
                jefe_hogar:                 parametros.jefe_hogar == true ? 1 : 0,
                integrante_numero:          parametros.integrante_numero ? parseInt(parametros.integrante_numero) : 0,
                id_sexo:                    parametros.id_sexo ? parseInt(parametros.id_sexo) : 0,
                id_pueblo:                  parametros.id_pueblo ? parseInt(parametros.id_pueblo) : 0,
                id_comunidad_linguistica:   parametros.id_comunidad_linguistica ? parseInt(parametros.id_comunidad_linguistica) : 0,
                fecha_nacimiento:           parametros.fecha_nacimiento ? parametros.fecha_nacimiento : null,
                edad:                       parametros.edad ? parseInt(parametros.edad) : 0,
                id_municipio:               parametros.id_municipio ? parseInt(parametros.id_municipio) : 0,
                id_departamento:            parametros.id_departamento ? parseInt(parametros.id_departamento) : 0,
                deficiencia:                parametros.deficiencia == true ? 1 : 0,
                id_discapacidad:            parametros.id_discapacidad ? parseInt(parametros.id_discapacidad) : 0,
                lee:                        parametros.lee == true ? 1 : 0,
                escribe:                    parametros.escribe == true ? 1 : 0,
                id_escolaridad:             parametros.id_escolaridad ? parseInt(parametros.id_escolaridad) : 0,
                trabaja:                    parametros.trabaja == true ? 1 : 0,
                id_ocupacion:               parametros.id_ocupacion ? parseInt(parametros.id_ocupacion) : 0,
                migrante:                   parametros.migrante == true ? 1 : 0,
                id_migrante:                parametros.id_migrante ? parseInt(parametros.id_migrante) : 0,
                fallecido:                  parametros.fallecido == true ? 1 : 0,
                id_proveedor_salud:         parametros.id_proveedor_salud ? parseInt(parametros.id_proveedor_salud) : 0,
                /** */
                id_usuario_registro: usuario.idUsuario
            }
            console.log(objeto);
            var reponse = oraServices.insertar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}


exports.actualizar = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_familia:                 parametros.id_familia ? parseInt(parametros.id_familia) : 0,
                id_persona:                 parametros.id_persona ? parseInt(parametros.id_persona) : 0,
                primer_nombre:              parametros.primer_nombre ? parametros.primer_nombre : null,
                segundo_nombre:             parametros.segundo_nombre ? parametros.segundo_nombre : null,
                tercer_nombre:              parametros.tercer_nombre ? parametros.tercer_nombre : null,
                primer_apellido:            parametros.primer_apellido ? parametros.primer_apellido : null,
                segundo_apellido:           parametros.segundo_apellido ? parametros.segundo_apellido : null,
                id_parentesco:              parametros.id_parentesco ? parseInt(parametros.id_parentesco) : 0,
                id_estado_civil:            parametros.id_estado_civil ? parseInt(parametros.id_estado_civil) : 0,
                jefe_hogar:                 parametros.jefe_hogar == true ? 1 : 0,
                integrante_numero:          parametros.integrante_numero ? parseInt(parametros.integrante_numero) : 0,
                id_sexo:                    parametros.id_sexo ? parseInt(parametros.id_sexo) : 0,
                id_pueblo:                  parametros.id_pueblo ? parseInt(parametros.id_pueblo) : 0,
                id_comunidad_linguistica:   parametros.id_comunidad_linguistica ? parseInt(parametros.id_comunidad_linguistica) : 0,
                fecha_nacimiento:           parametros.fecha_nacimiento ? parametros.fecha_nacimiento : null,
                edad:                       parametros.edad ? parseInt(parametros.edad) : 0,
                id_municipio:               parametros.id_municipio ? parseInt(parametros.id_municipio) : 0,
                id_departamento:            parametros.id_departamento ? parseInt(parametros.id_departamento) : 0,
                deficiencia:                parametros.deficiencia == true ? 1 : 0,
                id_discapacidad:            parametros.id_discapacidad ? parseInt(parametros.id_discapacidad) : 0,
                lee:                        parametros.lee == true ? 1 : 0,
                escribe:                    parametros.escribe == true ? 1 : 0,
                id_escolaridad:             parametros.id_escolaridad ? parseInt(parametros.id_escolaridad) : 0,
                trabaja:                    parametros.trabaja == true ? 1 : 0,
                id_ocupacion:               parametros.id_ocupacion ? parseInt(parametros.id_ocupacion) : 0,
                migrante:                   parametros.migrante == true ? 1 : 0,
                id_migrante:                parametros.id_migrante ? parseInt(parametros.id_migrante) : 0,
                fallecido:                  parametros.fallecido == true ? 1 : 0,
                id_proveedor_salud:         parametros.id_proveedor_salud ? parseInt(parametros.id_proveedor_salud) : 0,
                /** */
                id_usuario_registro: usuario.idUsuario
            }
            console.log(objeto);
            var reponse = oraServices.actualizar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}