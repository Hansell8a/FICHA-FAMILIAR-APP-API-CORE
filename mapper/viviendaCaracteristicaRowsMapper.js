exports.rowMapper = async (outBinds) => {
    let row;
    let lista = [];
    let objeto = {
        registros: Array,
        smsMensaje: outBinds.pSmsMensaje,
        smsError: outBinds.pSmsError
    }
    const resultSet = outBinds.pCursor;

    while ((row = await resultSet.getRow())) {
        const resultado = row.RESULTADO; // Suponiendo que 'RESULTADO' es el nombre de la columna que contiene el LOB
        if (resultado) {
            const data = await resultado.getData(); // Obtener los datos del LOB
            const rows = JSON.parse(data);
            rows.forEach(function (element) {
                const objeto = {
                    id_vivienda_caracteristicas: element.ID_VIVIENDA_CARACTERISTICA,
                    id_ficha_familiar: element.ID_FICHA_FAMILIAR,
                    habitada: element.HABITADA == 1? true: false,
                    id_tenencia_vivienda: element.ID_TENENCIA_VIVIENDA,
                    id_tipo_vivienda: element.ID_TIPO_VIVIENDA,
                    id_material_pared: element.ID_MATERIAL_PARED,
                    id_material_piso: element.ID_MATERIAL_PISO,
                    id_material_techo: element.ID_MATERIAL_TECHO,
                    id_abastecimiento_agua: element.ID_ABASTECIMIENTO_AGUA,
                    id_tipo_servicio_sanitario: element.ID_TIPO_SERVICIO_SANITARIO,
                    id_uso_servicio_sanitario: element.ID_USO_SERVICIO_SANITARIO,
                    id_tratamiento_agua_gris: element.ID_TRATAMIENTO_AGUA_GRIS,
                    id_fuente_cocina: element.ID_FUENTE_COCINA,
                    id_ubicacion_cocina: element.ID_UBICACION_COCINA,
                    id_tipo_cocina: element.ID_TIPO_COCINA,
                    recipiente_agua_reposada: element.RECIPIENTE_AGUA_REPOSADA == 1? true: false,
                    total_vivienda_familia: element.TOTAL_VIVIENDA_FAMILIA,
                    total_vivienda_persona: element.TOTAL_VIVIENDA_PERSONA,
                    total_vivienda_cuarto: element.TOTAL_VIVIENDA_CUARTO,
                    total_vivienda_dormitorio: element.TOTAL_VIVIENDA_DORMITORIO,
                    /** */
                    estado_registro: element.ESTADO_REGISTRO,
                    id_usuario_registro: element.ID_USUARIO_REGISTRO,
                    fecha_registro: element.FECHA_REGISTRO,
                };
                lista.push(objeto);
            }, this);
        }
    }
    objeto.registros = lista;
    return objeto;
}
