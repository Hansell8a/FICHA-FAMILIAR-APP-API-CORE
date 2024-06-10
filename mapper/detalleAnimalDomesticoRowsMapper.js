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
                    id_detalle_animal_domestico: element.ID_DETALLE_ANIMAL_DOMESTICO,
                    id_vivienda_caracteristica: element.ID_VIVIENDA_CARACTERISTICA,
                    id_tipo_animal: element.ID_TIPO_ANIMAL,
                    nombre_animal: element.DESCRIPCION,
                    cantidad: element.CANTIDAD,
                    vive_dentro: element.VIVE_DENTRO == 1? true:false,
                    condicion_adecuada: element.CONDICION_ADECUADA == 1? true:false,
                    vacunado: element.VACUNADO == 1? true:false,
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
