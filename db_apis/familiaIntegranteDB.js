const {
    ejecutarPackage
} = require('../api-services/database');
const {
    PACKAGES,
    PROCEDURES
} = require('../api-services/procedures/ficha-familiar');
var oracledb = require('oracledb');
const {
    rowMapper
} = require('../mapper/familiaIntegranteRowsMapper');

module.exports.obtener = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.FAMILIA_INTEGRANTE.OBTENER}(` +
                `:pIdFamiliaIntegrante,` +
                `:pIdFamilia,` +
                `:pIdPersona,` +
                `:pPrimerNombre,` +
                `:pSegundoNombre,` +
                `:pPrimerApellido,` +
                `:pSegundoApellido,` +
                `:pIdSexo,` +
                `:pIdPueblo,` +
                `:pIdComunidadLinguistica,` +
                `:pIdProveedorSalud,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdFamiliaIntegrante: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_familia_integrante
                },
                pIdFamilia: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_familia
                },
                pIdPersona: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_persona
                },
                pPrimerNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.primer_nombre
                },
                pSegundoNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.segundo_nombre
                },
                pPrimerApellido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.primer_apellido
                },
                pSegundoApellido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.segundo_apellido
                },
                pIdSexo: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_sexo
                },
                pIdPueblo: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_pueblo
                },
                pIdComunidadLinguistica: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_comunidad_linguistica
                },
                pIdProveedorSalud: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_proveedor_salud
                },
                pIdUsuarioRegistro: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_registro
                },
                /** */
                pCursor: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.CURSOR
                },
                pSmsError: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensaje: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsErrorLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensajeLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                }
            };
            let result = await ejecutarPackage(plsql, binds, rowMapper, method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.insertar = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.FAMILIA_INTEGRANTE.INSERTAR}(` +
                `:pIdFamilia,` +
                `:pIdPersona,` +
                `:pPrimerNombre,` +
                `:pSegundoNombre,` +
                `:pTercerNombre,` +
                `:pPrimerApellido,` +
                `:pSegundoApellido,` +
                `:pIdParentesco,` +
                `:pIdEstadoCivil,` +
                `:pJefeHogar,` +
                `:pIntegranteNumero,` +
                `:pIdSexo,` +
                `:pIdPueblo,` +
                `:pIdComunidadLinguistica,` +
                `:pFechaNacimiento,` +
                `:pEdad,` +
                `:pIdMunicipio,` +
                `:pIdDepartamento,` +
                `:pDeficiencia,` +
                `:pIdDiscapacidad,` +
                `:pLee,` +
                `:pEscribe,` +
                `:pIdEscolaridad,` +
                `:pTrabaja,` +
                `:pIdOcupacion,` +
                `:pMigrante,` +
                `:pIdMigrante,` +
                `:pFallecido,` +
                `:pIdProveedorSalud,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdFamilia: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_familia
                },
                pIdPersona: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_persona
                },
                pPrimerNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.primer_nombre
                },
                pSegundoNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.segundo_nombre
                },
                pTercerNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.tercer_nombre
                },
                pPrimerApellido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.primer_apellido
                },
                pSegundoApellido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.segundo_apellido
                },
                pIdParentesco: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_parentesco
                },
                pIdEstadoCivil: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_estado_civil
                },
                pJefeHogar: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.jefe_hogar
                },
                pIntegranteNumero: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.integrante_numero
                },
                pIdSexo: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_sexo
                },
                pIdPueblo: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_pueblo
                },
                pIdComunidadLinguistica: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_comunidad_linguistica
                },
                pFechaNacimiento: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.DATE,
                    val: parametros.fecha_nacimiento
                },
                pEdad: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.edad
                },
                pIdMunicipio: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_municipio
                },
                pIdDepartamento: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_departamento
                },
                pDeficiencia: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.deficiencia
                },
                pIdDiscapacidad: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_discapacidad
                },
                pLee: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.lee
                },
                pEscribe: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.escribe
                },
                pIdEscolaridad: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_escolaridad
                },
                pTrabaja: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.trabaja
                },
                pIdOcupacion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_ocupacion
                },
                pMigrante: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.migrante
                },
                pIdMigrante: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_migrante
                },

                pFallecido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.fallecido
                },
                pIdProveedorSalud: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_proveedor_salud
                },

                pIdUsuarioRegistro: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_registro
                },
                /** */
                pCursor: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.CURSOR
                },
                pSmsError: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensaje: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsErrorLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensajeLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                }
            };
            console.log(binds);
            let result = await ejecutarPackage(plsql, binds, rowMapper, method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.actualizar = (parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.FAMILIA_INTEGRANTE.ACTUALIZAR}(` +
                `:pIdFamiliaIntegrante,` +
                `:pIdFamilia,` +
                `:pIdPersona,` +
                `:pPrimerNombre,` +
                `:pSegundoNombre,` +
                `:pTercerNombre,` +
                `:pPrimerApellido,` +
                `:pSegundoApellido,` +
                `:pIdParentesco,` +
                `:pIdEstadoCivil,` +
                `:pJefeHogar,` +
                `:pIntegranteNumero,` +
                `:pIdSexo,` +
                `:pIdPueblo,` +
                `:pIdComunidadLinguistica,` +
                `:pFechaNacimiento,` +
                `:pEdad,` +
                `:pIdMunicipio,` +
                `:pIdDepartamento,` +
                `:pDeficiencia,` +
                `:pIdDiscapacidad,` +
                `:pLee,` +
                `:pEscribe,` +
                `:pIdEscolaridad,` +
                `:pTrabaja,` +
                `:pIdOcupacion,` +
                `:pMigrante,` +
                `:pIdMigrante,` +
                `:pFallecido,` +
                `:pIdProveedorSalud,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdFamiliaIntegrante: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_familia_integrante
                },
                pIdFamilia: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_familia
                },
                pIdPersona: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_persona
                },
                pPrimerNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.primer_nombre
                },
                pSegundoNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.segundo_nombre
                },
                pTercerNombre: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.tercer_nombre
                },
                pPrimerApellido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.primer_apellido
                },
                pSegundoApellido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.STRING,
                    val: parametros.segundo_apellido
                },
                pIdParentesco: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_parentesco
                },
                pIdEstadoCivil: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_estado_civil
                },
                pJefeHogar: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.jefe_hogar
                },
                pIntegranteNumero: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.integrante_numero
                },
                pIdSexo: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_sexo
                },
                pIdPueblo: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_pueblo
                },
                pIdComunidadLinguistica: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_comunidad_linguistica
                },
                pFechaNacimiento: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.DATE,
                    val: parametros.fecha_nacimiento
                },
                pEdad: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.edad
                },
                pIdMunicipio: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_municipio
                },
                pIdDepartamento: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_departamento
                },
                pDeficiencia: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.deficiencia
                },
                pIdDiscapacidad: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_discapacidad
                },
                pLee: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.lee
                },
                pEscribe: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.escribe
                },
                pIdEscolaridad: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_escolaridad
                },
                pTrabaja: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.trabaja
                },
                pIdOcupacion: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_ocupacion
                },
                pMigrante: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.migrante
                },
                pIdMigrante: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_migrante
                },

                pFallecido: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.fallecido
                },
                pIdProveedorSalud: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_proveedor_salud
                },

                pIdUsuarioRegistro: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_registro
                },
                /** */
                pCursor: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.CURSOR
                },
                pSmsError: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensaje: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsErrorLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensajeLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                }
            };
            console.log(binds);
            let result = await ejecutarPackage(plsql, binds, rowMapper, method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}

module.exports.eliminar  = (parametros,method) => {
    return new Promise(async (resolve, reject) => {
        try {
            var plsql = `${PACKAGES.PACKAGE}.${PROCEDURES.FAMILIA_INTEGRANTE.ELIMINAR}(` +
                `:pIdFamiliaIntegrante,` +
                `:pIdUsuarioRegistro,` +
                /** */
                `:pCursor,` +
                `:pSmsError,` +
                `:pSmsMensaje,` +
                `:pSmsErrorLog,` +
                `:pSmsMensajeLog` +
                `)`;
            var binds = {
                pIdFamiliaIntegrante: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_familia_integrante
                },
                pIdUsuarioRegistro: {
                    dir: oracledb.BIND_IN,
                    type: oracledb.NUMBER,
                    val: parametros.id_usuario_registro
                },
                /** */
                pCursor: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.CURSOR
                },
                pSmsError: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensaje: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsErrorLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                },
                pSmsMensajeLog: {
                    dir: oracledb.BIND_OUT,
                    type: oracledb.STRING
                }
            };
            let result = await ejecutarPackage(plsql, binds, rowMapper,method);
            return resolve(result);
        } catch (ex) {
            return reject(ex);
        }
    });
}
