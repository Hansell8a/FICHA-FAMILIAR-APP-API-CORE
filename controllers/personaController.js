const { insertarPersonaSeguridad } = require('../db_apis/persona');
const { CODE } = require('../common/http-status-code')
const { manejarErrorRequest } = require('../common/error-handler');
const { BIND_IN, STRING, NUMBER, DATE } = require('oracledb');

module.exports.insertarPersonaSeguridad = async (request, response) => {
    try {
        let { 
            id_nacionalidad,
            id_tipo_doc_identificacion,
            cui,
            no_identificacion,
            primer_nombre,
            segundo_nombre,
            tercer_nombre,
            primer_apellido,
            segundo_apellido,
            fecha_nacimiento,
            telefono,
            email,
            direccion,
            id_sexo,
            id_estado_civil,
            id_departamento_residencia,
            id_municipio_residencia,
            id_usuario_ingreso,
            cui_responsable,
            edad,
            apellido_casada,
            validado_renap,
        // } = convertirParametrosEncriptadoAObjeto(request.body.request)
        } = request.body

        let parametros = {
            id_nacionalidad:                { type: NUMBER, dir: BIND_IN, val: parseInt(id_nacionalidad) },
            id_tipo_doc_identificacion:     { type: NUMBER, dir: BIND_IN, val: parseInt(id_tipo_doc_identificacion) },
            cui:                            { type: NUMBER, dir: BIND_IN, val: cui ? parseInt(cui) : undefined },
            no_identificacion:              { type: STRING, dir: BIND_IN, val: no_identificacion },
            primer_nombre:                  { type: STRING, dir: BIND_IN, val: primer_nombre },
            segundo_nombre:                 { type: STRING, dir: BIND_IN, val: segundo_nombre },
            tercer_nombre:                  { type: STRING, dir: BIND_IN, val: tercer_nombre },
            primer_apellido:                { type: STRING, dir: BIND_IN, val: primer_apellido },
            segundo_apellido:               { type: STRING, dir: BIND_IN, val: segundo_apellido },
            fecha_nacimiento:               { type: STRING,   dir: BIND_IN, val: fecha_nacimiento },
            telefono:                       { type: NUMBER, dir: BIND_IN, val: telefono ? parseInt(telefono) : undefined },
            email:                          { type: STRING, dir: BIND_IN, val: email },
            direccion:                      { type: STRING, dir: BIND_IN, val: direccion },
            id_sexo:                        { type: NUMBER, dir: BIND_IN, val: parseInt(id_sexo) },
            id_estado_civil:                { type: NUMBER, dir: BIND_IN, val: id_estado_civil ? parseInt(id_estado_civil) : undefined },
            id_departamento_residencia:     { type: NUMBER, dir: BIND_IN, val: id_departamento_residencia ? parseInt(id_departamento_residencia) : undefined },
            id_municipio_residencia:        { type: NUMBER, dir: BIND_IN, val: id_municipio_residencia ? parseInt(id_municipio_residencia) : undefined },
            id_usuario_ingreso:             { type: NUMBER, dir: BIND_IN, val: id_usuario_ingreso ? parseInt(id_usuario_ingreso) : undefined },
            cui_responsable:                { type: NUMBER, dir: BIND_IN, val: cui_responsable ? parseInt(cui_responsable) : undefined },
            edad:                           { type: NUMBER, dir: BIND_IN, val: validado_renap ? parseInt(edad) : undefined },
            apellido_casada:                { type: STRING, dir: BIND_IN, val: apellido_casada },
            validado_renap:                 { type: NUMBER, dir: BIND_IN, val: validado_renap ? parseInt(validado_renap) : undefined },
        }

        response.status(CODE.OK).json(await insertarPersonaSeguridad(parametros))
    } catch (error) {
        console.log(error);
        //return manejarErrorRequest(error, response)
    }
}
