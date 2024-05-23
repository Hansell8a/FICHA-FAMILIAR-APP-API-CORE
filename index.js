require('dotenv').config()
const database = require('./api-services/database')
const webServer = require('./api-services/web-server');
const fs = require('fs');
const path = require('path');
console.log(path.sep);

// Función para obtener la lista de carpetas en el directorio actual
function getDirectories(srcPath) {
    return fs.readdirSync(srcPath)
        .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

// Directorio actual
const currentPath = __dirname;

// Obtener la lista de carpetas
const directories = getDirectories(currentPath);

// Imprimir la lista de carpetas
console.log(directories);



async function iniciar() {
    try {
        //process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
        await database.initialize()
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