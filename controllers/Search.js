const url = require('url');
const modelSearch = require("../models/modeloSearch");
const fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);


// AGREGO PARA COMUNICACION CON HTML-------------------------------------------------------------------------
const htmlRender = (html, data) => {
    let parsedHtml = html.toString('utf8');

    for (key in data) {
        let exp = "{{" + key + "}}";
        let reg = new RegExp(exp, 'g');
        parsedHtml = parsedHtml.replace(reg, data[key]);
    }
    
    return parsedHtml;
};

// FIN PARA COMUNICACION CON HTML-------------------------------------------------------------------------

const search = (request) => {
    console.log("Hola");
    let route = path.join('/views', 'view.html')
    // AGREGO PARA HACERLO CON .FILTER -------------------------------------------------------------------------
    let miURL = url.parse(request.url, true);
    var result = modelSearch()
    var term = miURL.query.n;

    const searchN = result.filter((alumno) => {
        if (alumno.nombre === term) {
            return alumno;
        }
    });

    // AGREGO PARA LEER LA VISTA -----------------------------------------------------------------------------
    const view = fs.readFileSync(appDir + route).toString('utf8');
    const parsedHtml = htmlRender(view, searchN[0]);
    return parsedHtml;
    // FIN PARA LEER LA VISTA -----------------------------------------------------------------------------

    //return (JSON.stringify(searchN)); //Para regresarlo sin HTML
    //FIN DE AGREGADO ------------------------------------------------------------------------------------------

    //result = searchName(request); //ahora mandamos a llamar el modelP1 que regresa el archivo JSON
    //return JSON.stringify(result); // JSON.stringify convierte el archivo JSON a string para que se pueda mostrar
};

// FUNCION CON FOR (SE USA JUNTO CON LO COMENTADO DE const search)

function searchName(request) {
    let miURL = url.parse(request.url, true);
    var mod = modelSearch();

    //Con For
    for (i = 0; i < mod.length; i++) {
        if (miURL.query.n === mod[i].nombre) {
            var n = mod[i].nombre
            var aP = mod[i].apellido_paterno
            var aM = mod[i].apellido_materno
            return n + " " + aP + " " + aM;

        }
    }
}
module.exports = search; 
