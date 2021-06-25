const fs = require('fs');
const colors = require('colors');


const crearArchivoTablaProm = async (base, listar, hasta) => {
    /* return new Promise(function (resolve, reject) {
        console.log('_________________________')
        console.log(`Tabla del: ${base}`)
        console.log('_________________________')

        let salida = '';

        for (let i = 1; i < 11; i++) {
            salida += `${base} x ${i} = ${i * 5}\n`;
        }
        console.log(salida)

        fs.writeFileSync(`tabla-${base}.txt`, salida, (err)=>{
            reject(err)
        });
        //console.log(`tabla-${base}.txt creado`);
        resolve(`tabla-${base}.txt`)
    }) */
    try {

        let salida = '';
        let consola= '';

        for (let i = 1; i <= hasta; i++) {
            consola += `${colors.italic(base)} ${'x'.red} ${i} ${'='.red} ${colors.italic(i * base)}\n`;
            salida += `${base} ${'x'} ${i} ${'='} ${i * base}\n`;
        }
        if (listar) {
            console.log('========================='.bgGreen)
            console.log(`     Tabla del: ${base}       .`.bgGreen.brightCyan)
            console.log('========================='.bgGreen)
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

const crearArchivoTabla = (base = 5) => {

    console.log('=========================')
    console.log(`Tabla del: ${base}`)
    console.log('=========================')

    let salida = '';

    for (let i = 1; i < 11; i++) {
        salida += `${base} x ${i} = ${i * 5}\n`;
    }
    console.log(salida)

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt creado`);
}

module.exports = {
    crearArchivoTabla,
    crearArchivoTablaProm
}