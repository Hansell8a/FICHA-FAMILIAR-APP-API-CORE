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
                    id_as: element.IDAS,
                    id_ds: element.IDDS,
                    id_ts: element.IDTS,
                    id_cc: element.IDCC,
                    nombre: element.NOMBRE,
                    activa: element.ACTIVA
                };
                lista.push(objeto);
            }, this);
        }
    }
    objeto.registros = lista;
    return objeto;
}
  