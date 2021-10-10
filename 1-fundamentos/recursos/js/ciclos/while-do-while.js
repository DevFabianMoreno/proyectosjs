const marcaCarros = ['Ford','Mazda','Toyota','Chevrolet','Renault','Land Rover'];
console.warn("While");
let i = 0;
while(marcaCarros[i]){
    if(i === 1){
        console.log(marcaCarros[i]);
        i++;
        continue;
        
    }
    console.log(marcaCarros[i]);
    i++;
}
console.warn("Do While");
let j = 0;
do{
    console.log(marcaCarros[j]);
    j++;
}while(marcaCarros[j]);