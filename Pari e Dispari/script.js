// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


var parDisp = prompt("Pari o dispari?");
var numUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
var numCpu = getRandomInt(1,5);
var somma = numCpu + numUtente;
console.log(numUtente, numCpu, somma);

if (somma == parDisp) {
    alert("Hai vinto")
    console.log("Hai vinto!");
} else {
    alert("Hai perso")
    console.log("Hai perso");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function dispPari(numUtente) {
      if (numUtente % 2 == 0) {
          return true;
      } else {
          return false;
      }
  }
