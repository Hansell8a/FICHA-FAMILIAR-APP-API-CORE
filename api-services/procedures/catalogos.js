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
    },
    MATERIAL_PARED: {
        OBTENER:    'sp_obtener_material_pared',
        INSERTAR:   'sp_insertar_material_pared',
        ACTUALIZAR: 'sp_actualizar_material_pared',
        ELIMINAR:   'sp_eliminar_material_pared' 
    },
    MATERIAL_PISO: {
        OBTENER:    'sp_obtener_material_piso',
        INSERTAR:   'sp_insertar_material_piso',
        ACTUALIZAR: 'sp_actualizar_material_piso',
        ELIMINAR:   'sp_eliminar_material_piso' 
    },
    MATERIAL_TECHO: {
        OBTENER:    'sp_obtener_material_techo',
        INSERTAR:   'sp_insertar_material_techo',
        ACTUALIZAR: 'sp_actualizar_material_techo',
        ELIMINAR:   'sp_eliminar_material_techo' 
    },
    PROVEEDOR_SALUD: {
        OBTENER:    'sp_obtener_proveedor_salud',
        INSERTAR:   'sp_insertar_proveedor_salud',
        ACTUALIZAR: 'sp_actualizar_proveedor_salud',
        ELIMINAR:   'sp_eliminar_proveedor_salud' 
    },
    PARENTESCO: {
        OBTENER:    'sp_obtener_parentesco',
        INSERTAR:   'sp_insertar_parentesco',
        ACTUALIZAR: 'sp_actualizar_parentesco',
        ELIMINAR:   'sp_eliminar_parentesco' 
    },
    TENENCIA_VIVIENDA: {
        OBTENER:    'sp_obtener_tenencia_vivienda',
        INSERTAR:   'sp_insertar_tenencia_vivienda',
        ACTUALIZAR: 'sp_actualizar_tenencia_vivienda',
        ELIMINAR:   'sp_eliminar_tenencia_vivienda' 
    },
    ESTADO_FICHA: {
        OBTENER:    'sp_obtener_estado_ficha',
        INSERTAR:   'sp_insertar_estado_ficha',
        ACTUALIZAR: 'sp_actualizar_estado_ficha',
        ELIMINAR:   'sp_eliminar_estado_ficha' 
    },
    TIPO_ANIMAL: {
        OBTENER:    'sp_obtener_tipo_animal',
        INSERTAR:   'sp_insertar_tipo_animal',
        ACTUALIZAR: 'sp_actualizar_tipo_animal',
        ELIMINAR:   'sp_eliminar_tipo_animal' 
    },
    TIPO_COCINA: {
        OBTENER:    'sp_obtener_tipo_cocina',
        INSERTAR:   'sp_insertar_tipo_cocina',
        ACTUALIZAR: 'sp_actualizar_tipo_cocina',
        ELIMINAR:   'sp_eliminar_tipo_cocina' 
    },
    TIPO_DEFICIENCIA: {
        OBTENER:    'sp_obtener_tipo_deficiencia',
        INSERTAR:   'sp_insertar_tipo_deficiencia',
        ACTUALIZAR: 'sp_actualizar_tipo_deficiencia',
        ELIMINAR:   'sp_eliminar_tipo_deficiencia' 
    },
    TIPO_SERVICIO_SANITARIO: {
        OBTENER:    'sp_obtener_tipo_servicio_sanitario',
        INSERTAR:   'sp_insertar_tipo_servicio_sanitario',
        ACTUALIZAR: 'sp_actualizar_tipo_servicio_sanitario',
        ELIMINAR:   'sp_eliminar_tipo_servicio_sanitario' 
    },
    TIPO_VIVIENDA: {
        OBTENER:    'sp_obtener_tipo_vivienda',
        INSERTAR:   'sp_insertar_tipo_vivienda',
        ACTUALIZAR: 'sp_actualizar_tipo_vivienda',
        ELIMINAR:   'sp_eliminar_tipo_vivienda' 
    },
    TRATAMIENTO_AGUA_GRIS: {
        OBTENER:    'sp_obtener_tratamiento_agua_gris',
        INSERTAR:   'sp_insertar_tratamiento_agua_gris',
        ACTUALIZAR: 'sp_actualizar_tratamiento_agua_gris',
        ELIMINAR:   'sp_eliminar_tratamiento_agua_gris' 
    },
    TRATAMIENTO_AGUA_RESIDUAL: {
        OBTENER:    'sp_obtener_tratamiento_agua_residual',
        INSERTAR:   'sp_insertar_tratamiento_agua_residual',
        ACTUALIZAR: 'sp_actualizar_tratamiento_agua_residual',
        ELIMINAR:   'sp_eliminar_tratamiento_agua_residual' 
    },
    TRATAMIENTO_BASURA: {
        OBTENER:    'sp_obtener_tratamiento_basura',
        INSERTAR:   'sp_insertar_tratamiento_basura',
        ACTUALIZAR: 'sp_actualizar_tratamiento_basura',
        ELIMINAR:   'sp_eliminar_tratamiento_basura' 
    },
    UBICACION_COCINA: {
        OBTENER:    'sp_obtener_ubicacion_cocina',
        INSERTAR:   'sp_insertar_ubicacion_cocina',
        ACTUALIZAR: 'sp_actualizar_ubicacion_cocina',
        ELIMINAR:   'sp_eliminar_ubicacion_cocina' 
    },
    USO_SERVICIO_SANITARIO: {
        OBTENER:    'sp_obtener_uso_servicio_sanitario',
        INSERTAR:   'sp_insertar_uso_servicio_sanitario',
        ACTUALIZAR: 'sp_actualizar_uso_servicio_sanitario',
        ELIMINAR:   'sp_eliminar_uso_servicio_sanitario' 
    },
    DEPARTAMENTO: {
        OBTENER: 'sp_obtener_departamento'
    },
    MUNICIPIO: {
        OBTENER: 'sp_obtener_municipio'
    },
    LUGAR_POBLADO: {
        OBTENER: 'sp_obtener_lugar_poblado'
    },
    AREA_SALUD: {
        OBTENER: 'sp_obtener_area_salud'
    },
    DESCRIPCION_SERVICIO: {
        OBTENER: 'sp_obtener_descripcion_servicio'
    },
    DISTRITO_SALUD: {
        OBTENER: 'sp_obtener_distrito_salud'
    },
    TERRITORIO: {
        OBTENER: 'sp_obtener_territorio'
    },
    CENTRO_COMUNITARIO: {
        OBTENER: 'sp_obtener_centro_comunitario'
    },
    COMUNIDAD: {
        OBTENER: 'sp_obtener_comunidad'
    },
    PERSONA: {
        OBTENER: 'sp_obtener_persona'
    },
    SECTOR: {
        OBTENER: 'sp_obtener_sector'
    }
}

