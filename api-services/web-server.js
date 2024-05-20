const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const {
    verificarToken
} = require('./auth');
const {
    desencryptarRutas
} = require('../common/utils');

let server;

function initialize() {
    return new Promise((resolve, reject) => {
        const app = express();

        app.use(express.static(path.join(__dirname, '../assets')))

        app.use(cors())
        app.use(express.urlencoded({
            extended: true
        }))
        app.use(express.json())
        if (process.env.MORGAN_LOGGER) app.use(morgan('dev'));
        app.use('/', require('../controllers/indexController'));

        /*** Configuracion de accesos a rutas */
        const API_RUTA = `/${process.env.API_NAME}/${process.env.API_VERSION}/`;
        app.use(`${API_RUTA}login`, require('../controllers/loginController'))   // Acceso libre a Login

        // Configuracion de encriptacion. 
/*         app.use((req, res, next) => {
            const es_valida = req.path.startsWith(`${API_RUTA}`);
            if (es_valida) {
                const encryptedPart = req.path.split(`${API_RUTA}`)[1];
                req.url = `${API_RUTA}${desencryptarRutas(encryptedPart)}`;
            }
            next(); 
        }); */
        app.use(`/${process.env.API_NAME}/${process.env.API_VERSION}`, verificarToken, require('../routing/router-index')) /// validadcion de autenticacion MSPAS

        if (process.env.MODE == 'PROD') {
            server = https.createServer({
                key: fs.readFileSync(path.join(__dirname, '../key.pem')),
                cert: fs.readFileSync(path.join(__dirname, '../cert.pem')),
            }, app);
        } else {
            server = http.createServer(app);
        }
        server.listen(process.env.PORT)
            .on('listening', () => {
                /** */
                if (process.env.MODE == 'PROD'){
                    console.log(`--> Servidor iniciado en https://${process.env.HOSTNAME}:${process.env.PORT}/`);
                    console.log(`--> Consumo de servicios en https://${process.env.HOSTNAME}:${process.env.PORT}/${process.env.API_NAME}/${process.env.API_VERSION}/`);
                } else {
                    console.log(`--> Servidor iniciado en http://localhost:${process.env.PORT}/`);
                    console.log(`--> Consumo de servicios en http://localhost:${process.env.PORT}/${process.env.API_NAME}/${process.env.API_VERSION}/`);
                }

                const colorReset = "\x1b[0m";
                const colorCyan = "\x1b[36m";
                const colorYellow = "\x1b[33m";
                /** */
                console.log(colorCyan,""),
                console.log("**********************");
                console.log("* SALUD FAMILIAR API *");
                console.log("*    version 0.1     *");
                console.log("* hecho en nicaragua *");
                console.log("**********************");
                console.log(colorReset,"");

                resolve();
            })
            .on('error', error => {
                reject(error);
            });
    });
}

function close() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err)
                return reject(err);
            resolve();
        });
    });
}

module.exports.initialize = initialize;
module.exports.close = close;