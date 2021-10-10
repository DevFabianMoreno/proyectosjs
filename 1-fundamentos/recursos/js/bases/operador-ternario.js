//Entre semana se abre a las 11am
//fines de semana se abre a las 9am

//entraa unsitio web para consultar si está abierto hoy
const dia = 1; // 0: domingo 1:lunes ...
const horaActual = 11;

let horaApertura;
let mensaje;

/*if ([0 ,6].includes(dia)){
    console.log("Fin de semana");
    horaApertura = 9;
} else {
    console.log("Entre semana")
    horaApertura = 11;
}*/
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

/*if(horaActual >= horaApertura){
    mensaje = "Está abierto";
} else {
    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}
*/

mensaje = ( horaActual>=horaApertura ) ? "Está abierto" : `Está cerrado, hoy abrimos a las ${horaApertura}` 

console.log({horaApertura, mensaje});