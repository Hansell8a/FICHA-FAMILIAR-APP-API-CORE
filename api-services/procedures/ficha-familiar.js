const ESQUEMA = 'SALUD_FAMILIAR';

exports.PACKAGES = {
    PACKAGE: ESQUEMA+'.'+'PKG_FICHA_FAMILIAR'
}

exports.PROCEDURES = {
    DETALLE_EQUIPAMIENTO_VIVIENDA: {
        OBTENER:    'sp_obtener_detalle_equipamiento_vivienda',
        INSERTAR:   'sp_insertar_detalle_equipamiento_vivienda',
        ACTUALIZAR: 'sp_actualizar_detalle_equipamiento_vivienda',
        ELIMINAR:   'sp_eliminar_detalle_equipamiento_vivienda'
    },
    DETALLE_TRATAMIENTO_BASURA: {
        OBTENER:    'sp_obtener_detalle_tratamiento_basura',
        INSERTAR:   'sp_insertar_detalle_tratamiento_basura',
        ACTUALIZAR: 'sp_actualizar_detalle_tratamiento_basura',
        ELIMINAR:   'sp_eliminar_detalle_tratamiento_basura'
    },
    DETALLE_AGUA_RESIDUAL: {
        OBTENER:    'sp_obtener_detalle_agua_residual',
        INSERTAR:   'sp_insertar_detalle_agua_residual',
        ACTUALIZAR: 'sp_actualizar_detalle_agua_residual',
        ELIMINAR:   'sp_eliminar_detalle_agua_residual'
    },
    DETALLE_ANIMAL_DOMESTICO: {
        OBTENER:    'sp_obtener_detalle_animal_domestico',
        INSERTAR:   'sp_insertar_detalle_animal_domestico',
        ACTUALIZAR: 'sp_actualizar_detalle_animal_domestico',
        ELIMINAR:   'sp_eliminar_detalle_animal_domestico'
    }
}