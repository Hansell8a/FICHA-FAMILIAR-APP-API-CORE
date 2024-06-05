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
                    id_ficha_familiar: element.ID_FICHA_FAMILIAR,
                    id_estado_ficha: element.ID_ESTADO_FICHA,
                    nombre_estado_ficha: element.NOMBRE_ESTADO_FICHA,
                    numero_familia: element.NUMERO_FAMILIAS,
                    direccion: element.DIRECCION,
                    departamento: element.DEPARTAMENTO,
                    municipio: element.MUNICIPIO,
                    ddriss: element.DDRISS,
                    ditrito_salud: element.DISTRITO_SALUD
                };
                lista.push(objeto);
            }, this);
        }
    }
    objeto.registros = lista;
    return objeto;
}

