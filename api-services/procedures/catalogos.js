const ESQUEMA = 'SALUD_FAMILIAR';

exports.packages = {
    PKG_CATALOGOS: ESQUEMA+'.PKG_CATALOGOS',
}

exports.procedures = {
    sp_insertar_abastecimiento_agua: 'sp_insertar_abastecimiento_agua',
    sp_obtener_abastecimiento_agua: 'sp_obtener_abastecimiento_agua',
    sp_actualizar_abastecimiento_agua: 'sp_actualizar_abastecimiento_agua',
    sp_eliminar_abastecimiento_agua: 'sp_eliminar_abastecimiento_agua',
}