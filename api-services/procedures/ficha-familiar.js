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
    }
}