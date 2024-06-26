const CryptoJS = require('crypto-js');
const fs = require('fs');
const path = require('path');

module.exports.formarResponse = function (response, mensaje, estado) {
    response.status(200).json({
        mensaje: mensaje,
        status: estado,
    })
    return response;
}

module.exports.desencryptarParam = function (param) {
    var reb64 = CryptoJS.enc.Hex.parse(param);
    var bytes = reb64.toString(CryptoJS.enc.Base64);
    var decrypt = CryptoJS.AES.decrypt(bytes, process.env.ENCRYPT_SECRET);
    var plain = decrypt.toString(CryptoJS.enc.Utf8);
    return plain;
}

module.exports.encryptarParam = function (param) {
    var b64 = CryptoJS.AES.encrypt(param, process.env.ENCRYPT_SECRET).toString();
    var e64 = CryptoJS.enc.Base64.parse(b64);
    var eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
}

module.exports.encryptarSHA256Param = function (param) {
    return CryptoJS.SHA256(param).toString();
}

module.exports.registrarError = function (ubicacion, linea, error) {
    try {
        let data = `-----------------------------\n\nError en ${ubicacion} linea: ${linea}\n`
        if (fs.existsSync(path.join(__dirname, '..', 'logs', 'error.log')))
            fs.appendFileSync(path.join(__dirname, '..', 'logs', 'error.log'), data)
        else
            fs.writeFileSync(path.join(__dirname, '..', 'logs', 'error.log'), data)
        fs.appendFileSync(path.join(__dirname, '..', 'logs', 'error.log'), error.toString())
    } catch (error) {
        console.log(error)
    }
}

module.exports.cuiValido = (cui) => {
    cui = `${cui}`
    if (!cui || cui.length < 13) return false

    var depto = parseInt(cui.substring(9, 11), 10);
    var muni = parseInt(cui.substring(11, 13));
    var numero = cui.substring(0, 8);
    var verificador = parseInt(cui.substring(8, 9));

    var munisPorDepto = [17, 8, 16, 16, 13, 14, 19, 8, 24, 21, 9, 30, 32, 21, 8, 17, 14, 5, 11, 11, 7, 17,];

    if (depto === 0 || muni === 0) return false;
    if (depto > munisPorDepto.length) return false;

    if (muni > munisPorDepto[depto - 1]) return false;

    var total = 0;
    try {
        for (var i = 0; i < numero.length; i++) total += parseInt(numero[i]) * (i + 2);

        var modulo = (total % 11);

        if ((modulo === verificador) == false) return false;

    } catch (error) {
        return false;
    }

    return true;
}

module.exports.telefonoValido = (telefono) => {
    telefono = `${telefono}`
    if (telefono.length == 8) return false
    if (isNaN(telefono)) return false

    var numero = telefono.substring(0, 1);
    if (numero != '3' && numero != '4' && numero != '5') return false

    return true
}

module.exports.convertirObjetoABase64 = (objeto) => {
    let tmpObjetoCadena = JSON.stringify(objeto)
    return Buffer.from(tmpObjetoCadena).toString('base64')
}

module.exports.convertirBase64AObjeto = (base64) => {
    let tmpObjetoCadena = Buffer.from(base64, 'base64').toString()
    return JSON.parse(tmpObjetoCadena)
}

module.exports.cadenaABase64 = (cadena) => Buffer.from(cadena).toString('base64')
module.exports.convertirBase64ACadena = (base64) => Buffer.from(base64, 'base64').toString()

module.exports.convertirParametrosDeBase64AObjeto = (parametros) => {
    let objeto = {}
    let llaves = Object.keys(parametros)
    for (let i = 0; i < llaves.length; i++)
        objeto[this.desencryptarParam(llaves[i])] = this.desencryptarParam(`${parametros[llaves[i]]}`)
        // objeto[this.convertirBase64ACadena(this.desencryptarParam(llaves[i]))] = this.convertirBase64ACadena(this.desencryptarParam(parametros[llaves[i]]))
    return objeto
}

module.exports.convertirParametrosEncriptadoAObjeto = (request) => {
    let cadenaDesencriptada = this.desencryptarParam(request)
    let objetoDesencriptado = JSON.parse(cadenaDesencriptada)
    let objeto = {}
    let llaves = Object.keys(objetoDesencriptado)
    for (let i = 0; i < llaves.length; i++)
        objeto[this.desencryptarParam(llaves[i])] = this.desencryptarParam(`${objetoDesencriptado[llaves[i]]}`)
        // objeto[this.convertirBase64ACadena(this.desencryptarParam(llaves[i]))] = this.convertirBase64ACadena(this.desencryptarParam(objetoDesencriptado[llaves[i]]))
    return objeto
}


module.exports.convertirId = (request) => {
    try {
        let numValue = parseInt(request);
        if (isNaN(numValue)) {
            if (request === "null") return null;
            if (request === "") return null;
            if (request === undefined) return undefined;
        }
        if (numValue <= 0) return null;
        return numValue;
    } catch (e) {
        return null
    }
}

module.exports.convertirBinario = (request) => {
    let numValue = Number(request);
    if (isNaN(numValue)) {
        if (request === "") return 0;
        if (request === "null") return 0;
        if (request === "true") return 1;
        if (request === "false") return 0;
    }
    return numValue;
}

module.exports.convertirString = (request) => {
    if (request === 'null') return null
    if (request === '') return ""
    return request;
}
