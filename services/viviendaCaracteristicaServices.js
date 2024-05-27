const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/viviendaCaracteristicaDB");

exports.obtener = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            const objeto = {
                id_vivienda_caracteristicas: parametros.id_vivienda_caracteristicas ? parseInt(parametros.id_vivienda_caracteristicas) : 0,
                id_ficha_familiar: parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : null,
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
                id_ficha_familiar:  parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                habitada:  parametros.habitada == true ? 1 : 0,
                id_tenencia_vivienda:  parametros.id_tenencia_vivienda ? parseInt(parametros.id_tenencia_vivienda) : 0,
                id_tipo_vivienda:  parametros.id_tipo_vivienda ? parseInt(parametros.id_tipo_vivienda) : 0,
                id_material_pared:  parametros.id_material_pared ? parseInt(parametros.id_material_pared) : 0,
                id_material_piso:  parametros.id_material_piso ? parseInt(parametros.id_material_piso) : 0,
                id_meterial_techo:  parametros.id_meterial_techo ? parseInt(parametros.id_meterial_techo) : 0,
                id_abastecimiento_agua:  parametros.id_abastecimiento_agua ? parseInt(parametros.id_abastecimiento_agua) : 0,
                id_tipo_servicio_sanitario:  parametros.id_tipo_servicio_sanitario ? parseInt(parametros.id_tipo_servicio_sanitario) : 0,
                id_uso_servicio_sanitario:  parametros.id_uso_servicio_sanitario ? parseInt(parametros.id_uso_servicio_sanitario) : 0,
                id_tratamiento_agua_gris:  parametros.id_tratamiento_agua_gris ? parseInt(parametros.id_tratamiento_agua_gris) : 0,
                id_fuente_cocina:  parametros.id_fuente_cocina ? parseInt(parametros.id_fuente_cocina) : 0,
                id_ubicacion_cocina:  parametros.id_ubicacion_cocina ? parseInt(parametros.id_ubicacion_cocina) : 0,
                id_tipo_cocina:  parametros.id_tipo_cocina ? parseInt(parametros.id_tipo_cocina) : 0,
                recipiente_agua_reposada:  parametros.recipiente_agua_reposada == true ? 1 : 0,
                total_vivienda_familia:  parametros.total_vivienda_familia ? parseInt(parametros.total_vivienda_familia) : 0,
                total_vivienda_persona:  parametros.total_vivienda_persona ? parseInt(parametros.total_vivienda_persona) : 0,
                total_vivienda_cuarto:  parametros.total_vivienda_cuarto ? parseInt(parametros.total_vivienda_cuarto) : 0,
                total_vivienda_dormitorio:  parametros.total_vivienda_dormitorio ? parseInt(parametros.total_vivienda_dormitorio) : 0,

                /** */
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
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
                id_vivienda_caracteristicas:  parametros.id_vivienda_caracteristicas ? parseInt(parametros.id_vivienda_caracteristicas) : 0,
                id_ficha_familiar:  parametros.id_ficha_familiar ? parseInt(parametros.id_ficha_familiar) : 0,
                habitada:  parametros.habitada == true ? 1 : 0,
                id_tenencia_vivienda:  parametros.id_tenencia_vivienda ? parseInt(parametros.id_tenencia_vivienda) : 0,
                id_tipo_vivienda:  parametros.id_tipo_vivienda ? parseInt(parametros.id_tipo_vivienda) : 0,
                id_material_pared:  parametros.id_material_pared ? parseInt(parametros.id_material_pared) : 0,
                id_material_piso:  parametros.id_material_piso ? parseInt(parametros.id_material_piso) : 0,
                id_meterial_techo:  parametros.id_meterial_techo ? parseInt(parametros.id_meterial_techo) : 0,
                id_abastecimiento_agua:  parametros.id_abastecimiento_agua ? parseInt(parametros.id_abastecimiento_agua) : 0,
                id_tipo_servicio_sanitario:  parametros.id_tipo_servicio_sanitario ? parseInt(parametros.id_tipo_servicio_sanitario) : 0,
                id_uso_servicio_sanitario:  parametros.id_uso_servicio_sanitario ? parseInt(parametros.id_uso_servicio_sanitario) : 0,
                id_tratamiento_agua_gris:  parametros.id_tratamiento_agua_gris ? parseInt(parametros.id_tratamiento_agua_gris) : 0,
                id_fuente_cocina:  parametros.id_fuente_cocina ? parseInt(parametros.id_fuente_cocina) : 0,
                id_ubicacion_cocina:  parametros.id_ubicacion_cocina ? parseInt(parametros.id_ubicacion_cocina) : 0,
                id_tipo_cocina:  parametros.id_tipo_cocina ? parseInt(parametros.id_tipo_cocina) : 0,
                recipiente_agua_reposada:  parametros.recipiente_agua_reposada == true ? 1 : 0,
                total_vivienda_familia:  parametros.total_vivienda_familia ? parseInt(parametros.total_vivienda_familia) : 0,
                total_vivienda_persona:  parametros.total_vivienda_persona ? parseInt(parametros.total_vivienda_persona) : 0,
                total_vivienda_cuarto:  parametros.total_vivienda_cuarto ? parseInt(parametros.total_vivienda_cuarto) : 0,
                total_vivienda_dormitorio:  parametros.total_vivienda_dormitorio ? parseInt(parametros.total_vivienda_dormitorio) : 0,

                /** */
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.actualizar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}

exports.eliminar = (req, parametros, method) => {
    return new Promise((resolve, reject) => {
        try {
            var usuario = obtenerUsuario(req);
            const objeto = {
                id_vivienda_caracteristicas:  parametros.id_vivienda_caracteristicas ? parseInt(parametros.id_vivienda_caracteristicas) : 0,

                /** */
                id_usuario_registro: usuario.idUsuario,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = oraServices.eliminar(objeto, method);
            return resolve(reponse);
        } catch (ex) {
            return reject(ex);
        }
    });
}