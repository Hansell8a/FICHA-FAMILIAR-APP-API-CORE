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
                    id_detalle_tratamiento_basura: element.ID_DETALLE_TRATAMIENTO_BASURA,
                    id_vivienda_caracteristica: element.ID_VIVIENDA_CARACTERISTICA,
                    id_tratamiento_basura: element.ID_TRATAMIENTO_BASURA,
                    observacion: element.OBSERVACION,
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
