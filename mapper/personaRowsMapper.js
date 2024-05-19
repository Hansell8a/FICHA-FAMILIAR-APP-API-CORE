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
                    tipo_dpi: element.TIPO_DPI,
                    fecha_defuncion: element.FECHA_DEFUNCION,
                    fecha_inscripcion_defuncion: element.FECHA_INSCRIPCION_DEFUNCION,
                    ocupacion: element.OCUPACION,
                    muni_nacimiento: element.MUNI_NACIMIENTO,
                    pais_nacimiento: element.PAIS_NACIMIENTO,
                    tercer_nombre: element.TERCER_NOMBRE,
                    genero:element.GENERO,
                    primer_apellido: element.PRIMER_APELLIDO,
                    nacionalidad: element.NACIONALIDAD,
                    depto_nacimiento: element.DEPTO_NACIMIENTO,
                    mensaje: element.MENSAJE,
                    segundo_nombre: element.SEGUNDO_NOMBRE,
                    primer_nombre: element.PRIMER_NOMBRE,
                    segundo_apellido: element.SEGUNDO_APELLIDO,
                    cui: (element.CUI).toString(),
                    estado_civil: element.ESTADO_CIVIL,
                    apellido_casada: element.APELLIDO_CASADA,
                    fecha_nacimiento: element.FECHA_NACIMIENTO,
                    id_estado_civil: element.ID_ESTADO_CIVIL,   

                    
                    id_lp: element.ID_LP,
                    nombre_lugar_poblado: element.NOMBRE_LUGAR_POBLADO,
                    id_comunidad_linguistica :element.ID_COMUNIDAD_LINGUISTICA,
                    nombre_comunidad_linguistica:element.NOMBRE_COMUNIDAD_LINGUISTICA,
                    edad: element.EDAD

                };
                lista.push(objeto);
            }, this);
        }
    }
    objeto.registros = lista;
    return objeto;
}
