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
    }
}

