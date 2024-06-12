//Creiamo funzione per l'identificazione della parola 

function UserParola (normalP){

   // Invertiamo la parola
  const reverseP = normalP.split('').reverse().join('');
    


   // Confrontiamo la parola originale con quella invertita

   return normalP === reverseP ? "parola palindroma" : "parola non palindroma ";



}