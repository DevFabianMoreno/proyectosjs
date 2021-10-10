const marcaCarros = ['Ford','Mazda','Toyota','Chevrolet','Renault','Land Rover'];

console.warn("For tradicional");

for( let i = 0; i < marcaCarros.length ; i++ ){
    console.log(marcaCarros[i]);
};

console.warn("For in");
for(let i in marcaCarros){
    console.log(marcaCarros[i]);
} ;

console.warn("For of");
for(let marcaCarro of marcaCarros){
    console.log(marcaCarro);
};