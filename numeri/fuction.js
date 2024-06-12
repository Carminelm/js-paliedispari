//Identifichiamo un numero per il PC

let NumeroPC = Math.floor(Math.random() * 5) + 1;


// identifichiamo chi ha vinto 


function UserParola (somma){

    // sommiamo i numeri

    let somma = NumeroPC + userNumber;
     
    // Confrontiamo i numeri per capire chi ha vinto

    return somma % 2 === 0 ? "pari" : "dispari";

 }



