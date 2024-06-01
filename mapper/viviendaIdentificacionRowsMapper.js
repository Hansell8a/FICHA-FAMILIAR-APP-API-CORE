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
                    id_vivienda_identificacion: element.ID_VIVIENDA_IDENTIFICACION,
                    id_ficha_familiar: element.ID_FICHA_FAMILIAR,
                    latitud: element.LATITUD,
                    longitud: element.LONGITUD,
                    direccion: element.DIRECCION,
                    id_departamento: element.ID_DEPARTAMENTO,
                    id_municipio: element.ID_MUNICIPIO,
                    id_lugar_poblado: element.ID_LUGAR_POBLADO,
                    id_as: element.IDAS,
                    id_ds: element.IDDS,
                    id_ts: element.IDTS,
                    id_cc: element.IDCC,
                    id_c: element.IDC,
                    id_territorio: element.ID_TERRITORIO,
                    id_sector: element.ID_SECTOR,
                    vivienda_habitada: element.VIVIENDA_HABITADA,
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
