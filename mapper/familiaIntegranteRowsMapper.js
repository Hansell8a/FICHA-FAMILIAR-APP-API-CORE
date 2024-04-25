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
                    id_familia_integrante: element.ID_FAMILIA_INTEGRANTE,
                    id_familia: element.ID_FAMILIA,
                    id_persona: element.ID_PERSONA,
                    primer_nombre: element.PRIMER_NOMBRE,
                    segundo_nombre: element.SEGUNDO_NOMBRE,
                    tercer_nombre: element.TERCER_NOMBRE,
                    primer_apellido: element.PRIMER_APELLIDO,
                    segundo_apellido: element.SEGUNDO_APELLIDO,
                    id_parentesco: element.ID_PARENTESCO,
                    id_estado_civil: element.ID_ESTADO_CIVIL,
                    jefe_hogar: element.JEFE_HOGAR == 1 ? true : false,
                    integrante_numero: element.INTEGRANTE_NUMERO,
                    id_sexo: element.ID_SEXO,
                    id_pueblo: element.ID_PUEBLO,
                    id_comunidad_linguistica: element.ID_COMUNIDAD_LINGUISTICA,
                    fecha_nacimiento: element.FECHA_NACIMIENTO,
                    edad: element.EDAD,
                    id_municipio: element.ID_MUNICIPIO,
                    id_departamento: element.ID_DEPARTAMENTO,
                    deficiencia: element.DEFICIENCIA == 1 ? true : false,
                    id_discapacidad: element.ID_DISCAPACIDAD,
                    lee: element.LEE == 1 ? true : false,
                    escribe: element.ESCRIBE == 1 ? true : false,
                    id_escolaridad: element.ID_ESCOLARIDAD,
                    trabaja: element.TRABAJA == 1 ? true : false,
                    id_ocupacion: element.ID_OCUPACION,

                    migrante: element.MIGRANTE == 1 ? true : false,
                    id_migrante: element.ID_MIGRANTE,
                    fallecido: element.FALLECIDO == 1 ? true : false,
                    id_proveedor_salud: element.ID_PROVEEDOR_SALUD,
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
