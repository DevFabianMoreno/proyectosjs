/*
2C = 2 de corazones
2P = 2 de picas
2T = 2 de trebol
2D = 2 de diamantes
*/

let baraja = [];
const tiposCartas = ['T','D','C','P'];
const cartasEspeciales = ['A','J','Q','K'];
let puntosJugador = 0;
let puntosIa = 0;

//Referencias del HTML
const btnPedirCarta = document.querySelector('#btnPedirCarta');
const puntosHtml = document.querySelectorAll('small');
const cartasJugador = document.querySelector('#jugador-cartas');
const cartasIa = document.querySelector('#ia-cartas');
const btnPlantarse = document.querySelector('#btnPlantarse');
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');

//Función para crear una nueva baraja.
const crearBaraja = () => {
    for(let j = 2; j < 10; j++){
        for(let tipoCarta of tiposCartas){
            baraja.push(j + tipoCarta)
        }
    }
    for(let tipoCarta of tiposCartas){
        for(let cartaEspecial of cartasEspeciales){
            baraja.push(cartaEspecial + tipoCarta)
        }
    }
    //console.log({baraja});
    baraja = _.shuffle(baraja);
    //console.log({baraja});
    return baraja;
}

crearBaraja();

//Función para pedir una carta
const pedirCarta = ()=>{


    if(baraja.length === 0){
        throw "no hay cartas en la baraja";
    };
    const carta = baraja.pop();
    //console.log(baraja);
    //console.log(carta);
    return carta;
}

//pedirCarta();



/*for (let i = 0; i<=100; i++){
    pedirCarta();
}*/

const valorCarta = (carta) => {
    //se saca la letra de la carta la cual es el ultimo digito
    const valor = carta.substring(0, carta.length-1);
    return(isNaN(valor))?
          (valor === 'A')? 11 : 10
          :valor*1;

    /*if(isNaN(valor)){
        puntos = (valor === 'A') ? 11 : 10;
    }else{
        console.log("Es un numero");
        //se multiplica por uno para que quede como numero y no como string
        puntos = valor *1;
    }

    console.log(puntos);*/
}

//juego de la IA
const turnoIa = (puntosMinimos) =>{
    do{
        const carta = pedirCarta();
        puntosIa = puntosIa + valorCarta(carta);
        puntosHtml[1].innerText = puntosIa;

        //<img class ="carta" src="assets/cartas/2C.png" alt="">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        cartasIa.append(imgCarta);

        if (puntosMinimos > 21){
            break;
        }
    }while((puntosIa < puntosMinimos) && (puntosMinimos<=21));
    
    setTimeout(() => {
        if(puntosIa === puntosMinimos){
            alert('Empate, nadie gana');
        } else if (puntosMinimos > 21){
            alert('Gana la casa');
        } else if(puntosIa > 21){
            alert('Gana el jugador');
        } else {
            alert('Gana la casa')
        }
    }, 15);
    
}


//Eventos

btnPedirCarta.addEventListener('click', ()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = puntosJugador;

    //<img class ="carta" src="assets/cartas/2C.png" alt="">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    cartasJugador.append(imgCarta);

    if (puntosJugador > 21){
        console.warn('perdiste');
        btnPedirCarta.disabled = true;
        btnPlantarse.disabled = true;
        turnoIa(puntosJugador);
    } else if (puntosJugador === 21){
        console.warn('21 - muy bien!');
        btnPedirCarta.disabled = true;
        btnPlantarse.disabled = true;
        turnoIa(puntosJugador);
    }

});

btnPlantarse.addEventListener('click', ()=>{
    btnPedirCarta.disabled = true;
    btnPlantarse.disabled = true;
    turnoIa(puntosJugador);
});

btnNuevoJuego.addEventListener('click', ()=>{
    console.clear();
    baraja = [];
    baraja = crearBaraja();
    puntosJugador = 0;
    puntosIa = 0;
    puntosHtml[0].innerText = 0 ;
    puntosHtml[1].innerText = 0;

    cartasIa.innerHTML = '';
    cartasJugador.innerHTML = '';

    btnPlantarse.disabled = false;
    btnPedirCarta.disabled = false;
})
