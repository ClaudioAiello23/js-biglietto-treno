'use strict';

/*- impostare variabile con valore prompt con la quale chiedere
all'utente il numero di km che deve percorrere (variabile const)*/
const kmTravel = parseInt (prompt ('PREGO INSERIRE IL NUMERO DI KM DA PERCORRERE'));

/*- impostare variabile con valore prompt con la quale chiedere
all'utente l'età (variabile const)*/
const etaUser = parseInt (prompt('PREGO INSERIRE IL NUMERO DI ANNI'));

/*- impostare una variabile prezzo base del biglietto che è di 
0,21 € per km (variabile let)*/
let basePrice = parseFloat (0.21);

/*- impostare una variabile prezzo minorenni che parta dal prezzo 
base e lo sconti del 20% (variabile let)*/
let underPrice = parseFloat (basePrice /100 *80);

/*- impostare una variabile prezzo over65 che parta dal prezzo 
base e lo sconti del 40% (variabile let)*/
let overPrice = parseFloat (basePrice /100 *60);



if (etaUser < 18){
    console.log("Prezzo totale da pagare:", kmTravel * underPrice, "€");
    
} else if (etaUser > 65){
    console.log("Prezzo totale da pagare:", kmTravel * overPrice, "€");

} else {
    console.log("Prezzo totale da pagare:", kmTravel * basePrice, "€");

}



// console.log("prezzo totale da pagare:", finalPrice);