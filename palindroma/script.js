
//prompt utente
var parolaUtente = prompt('Inserisci una parola');
console.log(parolaUtente);
//utilizzare la funzione per sapere se la parola inserita è palindroma
function stringReverse(word){
    var lettereParola = word.split("");
    console.log(lettereParola);

    var lettereParolaReverse = lettereParola.reverse();
    console.log(lettereParolaReverse);

    var parolaInversa = lettereParolaReverse.join('');
    console.log(parolaInversa);
    return parolaInversa;
}

var palindroma = stringReverse(parolaUtente);
console.log(palindroma);

// stampare un messaggio appropriato

if (parolaUtente == palindroma) {
    alert("La parola è palindroma");
    console.log('La parola è palindroma');
} else {
    alert("La parola non è palindroma")
    console.log('La parola non è palindroma');
}
