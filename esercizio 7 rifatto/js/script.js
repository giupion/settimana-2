//Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
//Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
//Alla fine mostra il risultato in console.//

let a = 45;
let b = 54;
let c = 43;


if (a > b) {
    if (c > a) { console.log(c, b, a) }
    else {
        if (c > b) { console.log(a, c, b) }
        else { console.log(a, b, c) }
    }
}
else {
    if (c > a) { console.log(b, c, a) }
    else {
        if (c > b) { console.log(c, b, a) }
        else { console.log(b, a, c) }
    }
}