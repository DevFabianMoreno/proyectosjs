function saludar (nombre){
    console.log(arguments);
    console.log("Hola " + nombre);
    return [10, 22];

    //esto nunca se va a ejecutar
    console.log("Soy un código que está despues de un return")
}

const saludar2 = function(apellido){
    console.log("Hola " + apellido);
};

saludar("Fabian", "Stiven", 20, 1.73);
saludar2("Moreno");

//funciones de flecha
const saludar3 = ()=>{
    console.log("Hola Mundo");
};

const saludar4 = (nombre, apellido) =>{
    console.log("Hola " + nombre + " " +  apellido);
};

saludar3();
saludar4("Fabian", "Moreno");


let retornoSaludar = saludar("Fabian", "Stiven", 20, 1.73);
console.log(retornoSaludar[0], retornoSaludar[1]);

function sumar(a, b){
    return a + b;
};
console.log(sumar(1, 5));

let sumar2 = (a, b)=>{
    return a + b;  
};
console.log(sumar2(30, 50));

sumar2 = (a, b) => a + b;
console.log(sumar2(30, 50));

function getAleatorio(){
    return Math.random();
};

console.log( getAleatorio() );

const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );

