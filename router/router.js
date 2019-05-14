'use strict';

//Los controladores van con mayuscula
const Pag1 = require("../controllers/Pag1");
const Pag2 = require("../controllers/Pag2");
const Search = require("../controllers/Search");

const router = (request, response) => {
    //console.log('Servidor corriendo');
    if (request.url === '/pag2') {
        //llamar nuestro controlador /todos mis controladores van a ser modulos
        var result = Pag2 (request);
        response.end(result);
        //response.end( 'Bye World' );
    } else if (request.url.startsWith('/pag1')) {
        var result = Pag1 (request);
        response.end(result);
        //response.end ( 'Hello World' );
    }else if (request.url.startsWith('/search')) {
        var result = Search (request);      
        response.end(result);
    }else {
        console.log("ignorando peticion: " + request.url );
    }
};

module.exports = router; 