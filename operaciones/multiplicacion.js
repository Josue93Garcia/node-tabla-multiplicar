const colores = require('colors');
const fs = require('fs');
const { argv } = require('yargs');
const crearArchivo = async(base = 5, listar = false, limite = 10) => {
    try {
        if (listar) {
            console.log('================================='.yellow);
            console.log(`         ${'Tabla del'.black} ${base}       `.bgMagenta);
            console.log('================================='.blue);
        }

        let salida = '';
        let consola = '';
        for (let index = 0; index <= limite; index++) {
            salida += (`${base} * ${index} = ${resultado = base * index}\n`);
            consola += (`${base} ${'*'.yellow} ${index} ${'='.brightRed} ${resultado = base * index}\n`);
        }
        if (listar) {
            console.log(consola);
        }


        fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, salida)

        return `Tabla-del-${base}.txt`.bgMagenta
    } catch (error) {
        throw err
    }

}

module.exports = {
    crearArchivo
}