'use strict';

/*- impostare variabile con valore prompt con la quale chiedere
all'utente il numero di km che deve percorrere (variabile const)*/
const kmTravel = prompt ('PREGO INSERIRE IL NUMERO DI KM DA PERCORRERE');

/*- impostare variabile con valore prompt con la quale chiedere
all'utente l'età (variabile const)*/
const etaUser = prompt('PREGO INSERIRE IL NUMERO DI ANNI');

/*- impostare una variabile prezzo base del biglietto che è di 
0,21 € per km (variabile let)*/
let basePrice = 0.21;

/*- impostare una variabile prezzo minorenni che parta dal prezzo 
base e lo sconti del 20% (variabile let)*/
let underPrice = (0.21 * 80 / 100);

/*- impostare una variabile prezzo over65 che parta dal prezzo 
base e lo sconti del 40% (variabile let)*/
let overPrice = (0.21 * 60 / 100);






// prova prezzo normale
const finalPrice = kmTravel * basePrice;
console.log("prezzo per chilometro:", overPrice);