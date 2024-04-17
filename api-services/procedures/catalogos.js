const ESQUEMA = 'SALUD_FAMILIAR';

exports.PACKAGES = {
    PACKAGE: ESQUEMA+'.'+'PKG_CATALOGOS',
}

exports.PROCEDURES = {
    ABASTECIMIENTO_AGUA: {
        OBTENER:    'sp_obtener_abastecimiento_agua',
        INSERTAR:   'sp_insertar_abastecimiento_agua',
        ACTUALIZAR: 'sp_actualizar_abastecimiento_agua',
        ELIMINAR:   'sp_eliminar_abastecimiento_agua'
    },
    EQUIPAMIENTO_VIVIENDA:{
        OBTENER:    'sp_obtener_equipamiento_vivienda',
        INSERTAR:   'sp_insertar_equipamiento_vivienda',
        ACTUALIZAR: 'sp_actualizar_equipamiento_vivienda',
        ELIMINAR:   'sp_eliminar_equipamiento_vivienda'
    },
    ESTADO_FAMILIA: {
        OBTENER:    'sp_obtener_estado_familia',
        INSERTAR:   'sp_insertar_estado_familia',
        ACTUALIZAR: 'sp_actualizar_estado_familia',
        ELIMINAR:   'sp_eliminar_estado_familia' 
    },
    FUENTE_COCINA: {
        OBTENER:    'sp_obtener_fuente_cocina',
        INSERTAR:   'sp_insertar_fuente_cocina',
        ACTUALIZAR: 'sp_actualizar_fuente_cocina',
        ELIMINAR:   'sp_eliminar_fuente_cocina' 
    }
}

