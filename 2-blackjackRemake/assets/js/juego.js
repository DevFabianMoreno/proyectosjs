(() => {
    'use strict'

    let baraja = [];
    const tiposCartas = ['T','D','C','P'],
          cartasEspeciales = ['A','J','Q','K'];

    //let puntosJugador = 0,
        //puntosIa = 0;
    let puntosJugadores = [];
    
    //Referencias del HTML
    const btnPedirCarta = document.querySelector('#btnPedirCarta'),
          puntosHtml = document.querySelectorAll('small'),

          btnPlantarse = document.querySelector('#btnPlantarse'),
          btnNuevoJuego = document.querySelector('#btnNuevoJuego'),

          imgCartasJugadores = document.querySelectorAll('.imagenCarta');
          //cartasJugador = document.querySelector('#jugador-cartas'),
          //cartasIa = document.querySelector('#ia-cartas');

          
    
    const iniciarJuego = (numJugadores = 2) =>{
        baraja = crearBaraja();
        for (let i = 0; i<numJugadores; i++){
            puntosJugadores.push(0);
        };
        puntosHtml.forEach(elem =>elem.innerText = 0);
        imgCartasJugadores.forEach(elem => elem.innerHTML ='' );
    
        btnPlantarse.disabled = false;
        btnPedirCarta.disabled = false;
    }; 

    //Función para crear una nueva baraja.
    const crearBaraja = () => {
        baraja = [];
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
        return _.shuffle(baraja);
    }
    

    
    //Función para pedir una carta
    const pedirCarta = ()=>{
        if(baraja.length === 0){
            throw "no hay cartas en la baraja";
        };
        return baraja.pop();
    }
    
    //pedirCarta();
    
    
    
    /*for (let i = 0; i<=100; i++){
        pedirCarta();
    }*/
    //esta funcion nos dice cual es el valor de la carta
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
    };
    //turno = 0
    const acumularPuntos = ( carta ,turno )=>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHtml[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };
    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        imgCartasJugadores[turno].append(imgCarta); 
    };

    const determinarGanador = () =>{
        const[puntosMinimos, puntosIa] = puntosJugadores;
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
        }, 100);
    };
    
    //juego de la IA

    const turnoIa = (puntosMinimos) =>{
        let puntosIa = 0;
        do{
            const carta = pedirCarta();
            puntosIa = acumularPuntos(carta, puntosJugadores.length -1);
            crearCarta(carta,  puntosJugadores.length -1);
        }while((puntosIa < puntosMinimos) && (puntosMinimos<=21));
        
        determinarGanador();
        
    }
    
    
    //Eventos
    
    btnPedirCarta.addEventListener('click', ()=>{
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0 );
        crearCarta(carta, 0);
    
        if (puntosJugador > 21){
            btnPedirCarta.disabled = true;
            btnPlantarse.disabled = true;
            turnoIa(puntosJugador);
        } else if (puntosJugador === 21){
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
        
        iniciarJuego();
        
        
    })
        
})();
