let juegosPc = ['Counter Strike', 'League of Legends', 'Valorant','Overwatch','Zula'];
console.log('largo:', juegosPc.length);


let primerObjeto = juegosPc[2-2];
let ultimoObjeto = juegosPc[juegosPc.length - 1];
//console.log({primerObjeto, ultimoObjeto});


juegosPc.forEach( (elemento, indice, arreglo) =>{
    //console.log(elemento, indice, arreglo);
});


let nuevaLogitud = juegosPc.push('Gta V');
console.log({nuevaLogitud, juegosPc});


nuevaLogitud = juegosPc.unshift('Fall Guys');
console.log({nuevaLogitud, juegosPc});


let juegoBorrado = juegosPc.pop();
console.log({juegoBorrado, juegosPc});


let posicionABorrar = 2;
console.log(juegosPc);
let juegoBorradosConSplice = juegosPc.splice(posicionABorrar, 2);
console.log({juegoBorradosConSplice, juegosPc});

let CounterStrikeIndex = juegosPc.indexOf('Counter Strike');
console.log(CounterStrikeIndex);
