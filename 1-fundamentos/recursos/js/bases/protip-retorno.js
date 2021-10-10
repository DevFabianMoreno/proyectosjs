//Tip 1
function crearPersona (nombre, apellido){
    return {nombre: nombre, apellido: apellido};
};

const persona = crearPersona("Fabian", "Moreno");

console.log(persona);

crearPersona = (nombre, apellido) => {
    return {nombre, apellido}
};

const crearPersonaFlecha = (nombre, apellido)=>({nombre, apellido})

const persona1 = crearPersona("Stiven", "Alfonso");
const persona2 = crearPersonaFlecha("Fabian Stiven", "Moreno Alfonso"); 
console.log(persona1);
console.log(persona2);
//Tip 2

function imprimeArgumentos(){
    console.log(arguments)
};

imprimeArgumentos("a", "b", 1, 2, true, false);
// con el parametro res ... hay que tener en cuenta que despues del parametro res nu se pueden recibir mas argumentos, si se quiere sacar aparte un argumento del parametro res se debe colocarantes de declarar este parametro
//edad tendra su valor independiente del res

const imprimeArgumentosFlecha = (edad, ...argu) => {
    //console.log({edad, argumentos});
    return argu;
}
const [primeraLetra, SegundaLetra, primerNumero, segundoNumero, primerBooleano, segundoBooleano] = imprimeArgumentosFlecha(20,"a", "b", 1, 2, true, false);
console.log({primeraLetra, SegundaLetra, primerNumero, segundoNumero, primerBooleano, segundoBooleano});

const {apellido: nuevoApellido} = crearPersona("Stiven", "Alfonso");
console.log({nuevoApellido});

let Sage = {
    nombre: 'Sage',
    codeName: 'Curandera',
    estaVivo: true,
    edad: 200,
    trajes: ['curandera maxima', 'curandera peligrosa', 'mata curas'],
};

const imprimePropiedades = (personaje) =>{
    console.log("nombre:", personaje.nombre);
    console.log("codeName:", personaje.codeName);
    console.log("estaVivo:", personaje.estaVivo);
    console.log("edad:", personaje.edad);
    console.log("trajes:", personaje.trajes);
};

imprimePropiedades(Sage);

const imprimePropiedadesBien = ({nombre, codeName, estaVivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({estaVivo});
    console.log({edad});
    console.log({trajes});
};
imprimePropiedadesBien(Sage);