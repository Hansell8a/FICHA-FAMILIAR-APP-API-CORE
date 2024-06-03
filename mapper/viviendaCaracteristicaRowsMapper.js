const e = require("express");
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
                    id_vivienda_caracteristicas: element.ID_VIVIENDA_CARACTERISTICA,
                    id_ficha_familiar: element.ID_FICHA_FAMILIAR,
                    id_tenencia_vivienda: element.ID_TENENCIA_VIVIENDA,
                    id_tipo_vivienda: element.ID_TIPO_VIVIENDA,
                    id_material_pared: element.ID_MATERIAL_PARED,
                    id_material_piso: element.ID_MATERIAL_PISO,
                    id_material_techo: element.ID_MATERIAL_TECHO,
                    id_abastecimiento_agua: element.ID_ABASTECIMIENTO_AGUA,
                    id_tipo_servicio_sanitario: element.ID_TIPO_SERVICIO_SANITARIO,
                    id_uso_servicio_sanitario: element.ID_USO_SERVICIO_SANITARIO,
                    id_tratamiento_agua_gris: element.ID_TRATAMIENTO_AGUA_GRIS,
                    id_fuente_cocina: element.ID_FUENTE_COCINA,
                    id_ubicacion_cocina: element.ID_UBICACION_COCINA,
                    id_tipo_cocina: element.ID_TIPO_COCINA,
                    recipiente_agua_reposada: element.RECIPIENTE_AGUA_REPOSADA == 1 ? 1 : 0,
                    total_vivienda_familia: element.TOTAL_VIVIENDA_FAMILIA,
                    total_vivienda_persona: element.TOTAL_VIVIENDA_PERSONA,
                    total_vivienda_cuarto: element.TOTAL_VIVIENDA_CUARTO,
                    total_vivienda_dormitorio: element.TOTAL_VIVIENDA_DORMITORIO,
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

exports.rowMapperDetalle = async (outBinds) => {
    let row;
    let tratamientoAguaResidual = [];
    let tratamientoBasura = [];
    let equipamientoVivienda = [];
    let animalDomestico = [];
    let lista = {
        tratamientoAguaResidual: tratamientoAguaResidual,
        tratamientoBasura: tratamientoBasura,
        equipamientoVivienda: equipamientoVivienda,
        animalDomestico: animalDomestico
    };
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
            const {aguaResidual, tratamientoBasura, equipamientoVivienda, animalDomestico} = rows;

            aguaResidual.forEach(function (element) {
                const objeto = {
                    id_detalle_agua_residual: element.id_detalle_agua_residual,
                    id_vivienda_caracteristica: element.id_vivienda_caracteristica,
                    id_tratamiento_agua_residual: element.id_tratamiento_agua_residual,
                    observacion: element.observacion,
                    estado_registro: element.estado_registro,
                    id_usuario_registro: element.id_usuario_registro,
                    fecha_registro: element.fecha_registro,
                    activo: element.activo
                };
                lista.tratamientoAguaResidual.push(objeto);
            }, this);

            tratamientoBasura.forEach(function (element) {
                const objeto = {
                    id_detalle_agua_residual: element.id_detalle_agua_residual,
                    id_vivienda_caracteristica: element.id_vivienda_caracteristica,
                    id_tratamiento_agua_residual: element.id_tratamiento_agua_residual,
                    observacion: element.observacion,
                    estado_registro: element.estado_registro,
                    id_usuario_registro: element.id_usuario_registro,
                    fecha_registro: element.fecha_registro,
                    activo: element.activo
                };
                lista.tratamientoBasura.push(objeto);
            }, this);

            equipamientoVivienda.forEach(function (element) {
                const objeto = {
                    id_detalle_equipamiento_vivienda: element.id_detalle_equipamiento_vivienda,
                    id_vivienda_caracteristica: element.id_vivienda_caracteristica,
                    id_equipamiento_vivienda: element.id_equipamiento_vivienda,
                    observacion: element.observacion,
                    estado_registro: element.estado_registro,
                    id_usuario_registro: element.id_usuario_registro,
                    fecha_registro: element.fecha_registro,
                    activo: element.activo
                };
                lista.equipamientoVivienda.push(objeto);
            }, this);

            animalDomestico.forEach(function (element) {
                const objeto = {
                    id_detalle_animal_domestico: element.id_detalle_animal_domestico,
                    id_vivienda_caracteristica: element.id_vivienda_caracteristicas,
                    id_tipo_animal: element.id_tipo_animal,
                    cantidad: element.cantidad,
                    vive_dentro: element.vive_dentro,
                    condicion_adecuada: element.condicion_adecuada,
                    vacunado: element.vacunado,
                    estado_registro: element.estado_registro,
                    id_usuario_registro: element.id_usuario_registro,
                    fecha_registro: element.id_usuario_registro,
                    activo: element.activo
                };
                lista.animalDomestico.push(objeto);
            }, this);

        }
    }
    objeto.registros = lista;
    return objeto;
}
