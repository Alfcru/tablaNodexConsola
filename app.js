const { crearArchivoTabla, crearArchivoTablaProm } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors')



console.clear();

//console.log(process.argv)
console.log(argv)

console.log('base: yargs', argv.base)
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');


//const base = 8;

// crearArchivoTabla(base);
crearArchivoTablaProm(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log( nombreArchivo.zebra, 'creado'.rainbow))
    .catch( err => console.log(err,'nuestro error'))
