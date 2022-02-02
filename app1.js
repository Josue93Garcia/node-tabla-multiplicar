//const { argv, option, options } = require('yargs');
const argv = require('./config/yargs'); //--> Mando a llamar mi archivo yargs.js
const { crearArchivo } = require('./operaciones/multiplicacion'); //--> Mando a llamar mi archivo multiplicacion.js
console.clear();
crearArchivo(argv.b, argv.l, argv.x)
    .then(nombreArchivo => console.log(nombreArchivo, 'Archivo credo Correcamente'.toUpperCase().brightMagenta))
    .catch(err => console.log(err, 'Nose pudo crear el archivo'));