let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

const cambiarNombre = ( persona )=>{
    persona.nombre = 'Stiven';
    return persona; 
}
let fabian = {nombre: 'Fabian'};
let tony = cambiarNombre(fabian);

console.log({fabian, tony});

//arreglos
const frutas = ['Pera','Manzana','Piña'];
//const otrasFrutas = [...frutas];



console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});