const fs = require('fs');
console.clear();
console.log('=================================');
console.log('          Tabla del 5');
console.log('=================================');
const base = 2;
let salida = '';
for (let index = 0; index <= 10; index++) {
    salida += (`${base} * ${index} = ${resultado = base * index}\n`);
}
fs.writeFile(`Tabla-del-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`Tabla-del-${base} crado correctamente`);
})