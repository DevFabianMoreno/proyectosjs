const elMayor = (a,b) => (a>b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? "2 dolares" : "10 dolares";

console.log(elMayor(121213312232,367236237276))
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = ["Fabian", 
                   "Stiven",
                   "Moreno",
                   "Alfonso",
                   amigo ? "Ternario true":"Ternario False",
                   (()=>"Retorno de funcion anonima auto invocada")(),
                   elMayor(8,25),
                ];
console.log(amigosArr);

const nota = 85;
const notaLetra = nota >= 95 ? 'A+' :
                  nota >= 90 ? 'A' :
                  nota >= 85 ? 'B+' :
                  nota >= 80 ? 'B' :
                  nota >= 75 ? 'C+' :
                  nota >= 70 ? 'C' : 'F';
console.log({nota, notaLetra});

