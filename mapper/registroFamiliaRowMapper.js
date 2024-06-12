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
                    no_registro_familiar: element.NO_REGISTRO_FAMILIAR,
                    habilitada: element.HABILITADA,
                    no_vivienda: element.NO_VIVIENDA,
                    familiar: element.FAMILIAR,
                    cui: element.CUI,
                    no_identificacion: element.NO_IDENTIFICACION,
                    nombres: element.NOMBRES,
                    apellidos: element.APELLIDOS,
                    departamento: element.DEPARTAMENTO,
                    municipio: element.MUNICIPIO,
                    sector: element.SECTOR,
                    comunidad: element.COMUNIDAD,
                    estado_ficha: element.ESTADO_FICHA
                };
                lista.push(objeto);
            }, this);
        }
    }
    objeto.registros = lista;
    return objeto;
}
