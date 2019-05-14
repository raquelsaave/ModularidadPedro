'use strict';

const url = require('url');
const modelP1 = require ("../models/modeloPag1");

//CONTROLADOR

const pag1 = (request) => {
    console.log("Hola");
    //return request.url;
    var result = modelP1();
    alta(request, result); //ahora mandamos a llamar el modelP1 que regresa el archivo JSON 
    return JSON.stringify(result); // JSON.stringify convierte el archivo JSON a string para que se pueda mostrar
    //JSON.stringify(result)
};

function alta (request, result) {
    let miURL = url.parse(request.url, true);   
    //var mod= modelP1();
    if(miURL.query.func === "alta") {
        let nuevoRegistro = {
            nombre : miURL.query.n,
            apellido_paterno : miURL.query.ap,
            apellido_materno: miURL.query.am
        }
        result.push(nuevoRegistro);
    }
    //var mod= modelP1();
    //let objeto = { nombre: "Ana", apellido_paterno : "Macias" , apellido_materno : "Alonso"};
    //mod.push(objeto);
}
module.exports = pag1; 