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
                    id_persona: element.ID_PERSONA,
                    primer_nombre: element.PRIMER_NOMBRE,
                    segundo_nombre: element.SEGUNDO_NOMBRE,
                    tercer_nombre: element.TERCER_NOMBRE,
                    primer_apellido: element.PRIMER_APELLIDO,
                    segundo_apellido: element.SEGUNDO_APELLIDO,
                    fecha_nacimiento: element.FECHA_NACIMIENTO,
                    edad: element.EDAD,
                    id_sexo: element.ID_SEXO,
                    id_estado_civil: element.ID_ESTADO_CIVIL,
                    id_pueblo: element.ID_PUEBLO,
                    id_comunidad_linguistica: element.ID_COMUNIDAD_LINGUISTICA,
                    id_departamento_residencia: element.ID_DEPARTAMENTO_RESIDENCIA,
                    id_municipio_residencia: element.ID_MUNICIPIO_RESIDENCIA,
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
