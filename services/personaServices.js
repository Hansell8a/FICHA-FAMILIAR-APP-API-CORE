const {
    obtenerUsuario
} = require('../api-services/auth');
var oraServices = require("../db_apis/personaDB");
const axios = require('axios');

exports.obtener = (req, parametros, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            const objeto = {
                id_persona: parametros.id_persona ? parseInt(parametros.id_persona) : 0,
                cui: parametros.cui ? parseInt(parametros.cui) : 0,
                /** */
                id_usuario_registro: 0,
                estado_registro: null,
                fecha_registro: null
            }
            var reponse = await oraServices.obtener(objeto, method);
            const personaOra  = reponse.data;
            if (personaOra.length == 0) {
                let body = {
                    cui: parametros.cui ? parametros.cui : 0
                }
                let headersds = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic '+process.env.RENAP_BASIC_AUTH
                }
                await axios.post(`${process.env.RENAP_URL}`, body,{
                    headers: headersds
                }).then(function (response) {
                    personaRenap = response.data.data;
                    if(personaRenap.CUI == ''){
                        return resolve(reponse);
                    } else{
                        reponse.data = [];
                        const per = {
                            tipo_dpi: personaRenap.TIPO_DPI,
                            fecha_defuncion: personaRenap.FECHA_DEFUNCION,
                            fecha_inscripcion_defuncion: personaRenap.FECHA_INSCRIPCION_DEFUNCION,
                            ocupacion: personaRenap.OCUPACION,
                            muni_nacimiento: personaRenap.MUNI_NACIMIENTO,
                            pais_nacimiento: personaRenap.PAIS_NACIMIENTO,
                            tercer_nombre: personaRenap.TERCER_NOMBRE,
                            genero:personaRenap.GENERO,
                            primer_apellido: personaRenap.PRIMER_APELLIDO,
                            nacionalidad: personaRenap.NACIONALIDAD,
                            depto_nacimiento: personaRenap.DEPTO_NACIMIENTO,
                            mensaje: personaRenap.MENSAJE,
                            segundo_nombre: personaRenap.SEGUNDO_NOMBRE,
                            primer_nombre: personaRenap.PRIMER_NOMBRE,
                            segundo_apellido: personaRenap.SEGUNDO_APELLIDO,
                            cui: (personaRenap.CUI).toString(),
                            estado_civil: personaRenap.ESTADO_CIVIL,
                            apellido_casada: personaRenap.APELLIDO_CASADA,
                            fecha_nacimiento: personaRenap.FECHA_NACIMIENTO,
                        };
                        reponse.data.push(per);
                        return resolve(reponse);
                    }
                }).catch(function (error) {
                    return reject(error);
                });             
            } else {
                return resolve(reponse);
            }
            
        } catch (ex) {
            return reject(ex);
        }
    });
}
