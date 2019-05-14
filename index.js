'use strict'
// VAMOS  a hacer ejemplo de MVC
const http = require('http');
const router = require('./router/router')
const puerto = 3000;

//Crea un servidor en el puerto en el que le digamos, espera una peticion, en este caso
// (router)
http.createServer(router).listen(puerto);