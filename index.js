require('dotenv').config()
const database = require('./api-services/database')
const webServer = require('./api-services/web-server');
const fs = require('fs');
const path = require('path');
console.log(process.env.DB_CLIENT_LIB);

fs.readdir(process.env.DB_CLIENT_LIB, (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }

    console.log('Archivos en el directorio:');
    files.forEach(file => {
        console.log(file);
    });
});



async function iniciar() {
    try {
        //process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
        //await database.initialize()
        await webServer.initialize()
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
iniciar();
async function apagar(e) {
    let err = e;
    try {
        await webServer.close();
        await database.close();
    } catch (error) {
        console.error(error);
        err = err || error;
    }
    console.log('\nCerrando servidor');
    if (err)
        process.exit(1);
    process.exit(0);
}

process.on('SIGTERM', () => {
    console.log('aqui');
    apagar();
});

process.on('SIGINT', () => {
    apagar();
});

process.on('uncaughtException', err => {
    console.error(err);
    apagar(err);
});