//Identifichiamo un numero per il PC

let NumeroPC = Math.floor(Math.random() * 5) + 1;

console.log(NumeroPC);


// identifichiamo chi ha vinto 


function UserParola (userNumber){

    // sommiamo i numeri

    let numero = NumeroPC + userNumber;

     
    // Confrontiamo i numeri per capire chi ha vinto

    return numero % 2 === 0 ? "pari" : "dispari";


 }



