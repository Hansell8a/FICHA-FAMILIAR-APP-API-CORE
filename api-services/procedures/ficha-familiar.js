const ESQUEMA = 'SALUD_FAMILIAR';

exports.PACKAGES = {
    PACKAGE: ESQUEMA + '.' + 'PKG_FICHA_FAMILIAR'
}

exports.PROCEDURES = {
    DETALLE_EQUIPAMIENTO_VIVIENDA: {
        OBTENER: 'sp_obtener_detalle_equipamiento_vivienda',
        INSERTAR: 'sp_insertar_detalle_equipamiento_vivienda',
        ACTUALIZAR: 'sp_actualizar_detalle_equipamiento_vivienda',
        ELIMINAR: 'sp_eliminar_detalle_equipamiento_vivienda'
    },
    DETALLE_TRATAMIENTO_BASURA: {
        OBTENER: 'sp_obtener_detalle_tratamiento_basura',
        INSERTAR: 'sp_insertar_detalle_tratamiento_basura',
        ACTUALIZAR: 'sp_actualizar_detalle_tratamiento_basura',
        ELIMINAR: 'sp_eliminar_detalle_tratamiento_basura'
    },
    DETALLE_AGUA_RESIDUAL: {
        OBTENER: 'sp_obtener_detalle_agua_residual',
        INSERTAR: 'sp_insertar_detalle_agua_residual',
        ACTUALIZAR: 'sp_actualizar_detalle_agua_residual',
        ELIMINAR: 'sp_eliminar_detalle_agua_residual'
    },
    DETALLE_ANIMAL_DOMESTICO: {
        OBTENER: 'sp_obtener_detalle_animal_domestico',
        INSERTAR: 'sp_insertar_detalle_animal_domestico',
        ACTUALIZAR: 'sp_actualizar_detalle_animal_domestico',
        ELIMINAR: 'sp_eliminar_detalle_animal_domestico'
    },
    FAMILIA_INTEGRANTE: {
        OBTENER: 'sp_obtener_familia_integrante',
        INSERTAR: 'sp_insertar_familia_integrante',
        ACTUALIZAR: 'sp_actualizar_familia_integrante',
        ELIMINAR: 'sp_eliminar_familia_integrante'
    },
    FICHA_FAMILIAR: {
        OBTENER: 'sp_obtener_ficha_familiar',
        OBTENER_INFORMACION: 'sp_obtener_informacion_ficha_familiar',
        OBTENER_REGISTRO_FAMILIA: 'sp_obtener_registro_familiar',
        INSERTAR: 'sp_insertar_ficha_familiar',
        ACTUALIZAR: 'sp_actualizar_ficha_familiar',
        ELIMINAR: 'sp_eliminar_ficha_familiar'
    },
    VIVIENDA_CARACTERISTICA: {
        OBTENER: 'sp_obtener_vivienda_caracteristica',
        INSERTAR: 'sp_insertar_vivienda_caracteristica',
        ACTUALIZAR: 'sp_actualizar_vivienda_caracteristica',
        ELIMINAR: 'sp_eliminar_vivienda_caracteristica',
        INSERTAR_DETALLE_UNIFICADO: 'sp_insertar_detalle_unificado'
    },
    VIVIENDA_IDENTIFICACION: {
        OBTENER: 'sp_obtener_vivienda_identificacion',
        INSERTAR: 'sp_insertar_vivienda_identificacion',
        ACTUALIZAR: 'sp_actualizar_vivienda_identificacion',
        ELIMINAR: 'sp_eliminar_vivienda_identificacion'
    },
    FAMILIA: {
        OBTENER: 'sp_obtener_familia',
        INSERTAR: 'sp_insertar_familia',
        ACTUALIZAR: 'sp_actualizar_familia',
        ELIMINAR: 'sp_eliminar_familia'
    }
}
