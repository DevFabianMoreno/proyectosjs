let personaje = {
    nombre: 'Sage',
    codeName: 'Curandera',
    estaVivo: true,
    edad: 200,
    coordenadas: {
        latitud: 34.252,
        longitud: -118.78
    },
    trajes: ['curandera maxima', 'curandera peligrosa', 'mata curas'],
    direccion: {
        zip: '2501524, 855885',
        ubicacion: 'Soacha, Cundinamarca'
    },
    'ultima-pelicula': 'sage la curandera malvada',
};
console.log(personaje);

console.log('Nombre del pesonaje:',personaje.nombre);

console.log('Edad:',personaje['edad']);

console.log('Apodo:',personaje.codeName);

console.log('Coordenadas/latitud: ', personaje.coordenadas.latitud );

console.log('Numero de trajes:', personaje.trajes.length);

console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'estaVivo';
console.log('Está vivo:',personaje[x]);

console.log('Ultima pelicula:',personaje['ultima-pelicula']);

//mas detalles

delete personaje.edad;

console.log(personaje);

const paresDeValores = Object.entries(personaje);
console.log(paresDeValores);

personaje.casado = false;
console.log(personaje);    

Object.freeze(personaje);
personaje.dinero = 1000000000000000;
personaje.casado = true;
personaje.direccion.ubicacion = "Bogotá, Colombia";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades, valores);