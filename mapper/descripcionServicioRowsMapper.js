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
                    id_as: parseInt(element.IDAS),
                    id_ds: parseInt(element.IDDS),
                    id_ts: parseInt(element.IDTS),
                    id_tss: element.IDTSS,
                    nombre: element.NOMBRE,
                    activa: element.ACTIVA,
                    id_departamento: element.ID_DEPARTAMENTO,
                    id_municipio: element.ID_MUNICIPIO,
                };
                lista.push(objeto);
            }, this);
        }
    }
    objeto.registros = lista;
    return objeto;
}
