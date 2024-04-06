const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const { verificarToken } = require('./auth');

let server;

function initialize(){
    return new Promise((resolve, reject) =>{
        const app = express();

        app.use(express.static(path.join(__dirname,'../assets')))

        app.use(cors())
        app.use(express.urlencoded({ extended: true }))
        app.use(express.json())
        if(process.env.MORGAN_LOGGER) app.use(morgan('dev'));
        app.use('/',require('../controllers/index'));
        //app.use(`/${process.env.API_NAME}/${process.env.API_VERSION}`, require('../routing/router-index')); /// sin la validacion de la autenticacion MSPAS
        app.use(`/${process.env.API_NAME}/${process.env.API_VERSION}`, verificarToken, require('../routing/router-index')) /// validadcion de autenticacion MSPAS
        

        if(process.env.MODE == 'PROD'){
            server = https.createServer({
                key: fs.readFileSync(path.join(__dirname, '../key.pem')),
                cert: fs.readFileSync(path.join(__dirname, '../cert.pem')),
            }, app);
        }else{
            server = http.createServer(app);
        }

        server.listen(process.env.PORT)
        .on('listening', () =>{
            if(process.env.MODE == 'PROD') console.log(`Servidor iniciado en https://${process.env.HOSTNAME}:${process.env.PORT}`);
            else console.log(`Servidor iniciado en http://localhost:${process.env.PORT}`);
            resolve();
        })
        .on('error', error => {
            reject(error);
        });
    });
}

function close(){
    return new Promise((resolve, reject) => {
        server.close(err =>{
            if(err)
                return reject(err);
            resolve();
        });
    });
}

module.exports.initialize = initialize;
module.exports.close = close;