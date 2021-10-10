const regresaVerdadero = () =>{
    console.log("Regresa verdadero");
    return true;
}

const regresaFalso = () =>{
    console.log("Regresa falso");
    return false;
}

console.warn("Not o la negación");
console.log(!regresaFalso());

console.warn("And");
console.log(true && true);
console.log(true && !false);

console.warn("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150;
const a2 = "Hola" && "Mundo";
const a3 = soyFalso || "Ya no soy falso";
const a4 = soyFalso || soyNull || soyUndefined || "Ya no soy falso" || true;
const a5 = soyFalso || soyNull || regresaVerdadero() || "Ya no soy falso" || true;



console.log({a1,a2,a3,a4,a5})

