// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/







function giveMeRandom(n) {
    let array = [];
    for (i = 0; i < n; i++) {
        let casuale = Math.random() * n;

        array.push(casuale);
        function checkArray(array) {
            for (c = 0; array.length; i++) { if (array[i] > 5) { console.log(array = array[i]) } }
        }
        return array;

    }

}
console.log(giveMeRandom())


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [{
    price: 20,
    name: "dinosauri",
    id: "dino",
    quantity: 5,
},

{
    price: 5,
    name: "pentola",
    id: "cucina",
    quantity: 5,
},

{
    price: 11,
    name: "draghi",
    id: "fantasy",
    quantity: 5,
}];

function shoppingCartTotal() {
    let total = 0;
    for (i = 0; i < shoppingCart.length; i++) {
        let price = shoppingCart[i].price;
        let quantity = shoppingCart[i].quantity;
        total += price * quantity;
    }

    return total;

}

console.log(shoppingCartTotal())

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(shoppingCart) {

    let newObj = {
        price: 8,
        name: "spadelaser",
        id: "fantasy",
        quantity: 5,
    }
    shoppingCart.push(newObj);

    return shoppingCart.length;
}



console.log(addToShoppingCart(shoppingCart))


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


//function maxShoppingCart(shoppingCart){


//    if()
//  {return shoppingCart[0]}

//}
//console.log(maxShoppingCart(shoppingCart))
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
    shoppingCart.splice(0, 3);
    return shoppingCart
}
console.log(latestShoppingCart(shoppingCart))

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/


//function loopUntil(x){
//{for(i=0;i<x;i++)

//randomico= Math.random()*9;
// if(randomico>x) 


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
function average(array) {
    let somma = 0;
    let media = 0;
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") { i-- } else {
            somma += array[i];
            media = somma / array.length;
        }



    }

    return media


}

console.log(average([4, 3, 4,,"fj", 5,"f"]))
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

arrayStringhe = ["aj", "fsdf", "fsddfjf", "fj", "sjffsd"]



function longest(arrayStringhe) {
    let valoreMassimo = 0;
    let contenuto = 0;
    for (i = 0; i < arrayStringhe.length; i++) {
        contenuto = arrayStringhe[i];

        valoreMassimo = "la riga massima ha lunghezza " + Math.max(contenuto.length) + " indice " + [i]


    } return valoreMassimo
}



console.log(longest(arrayStringhe))



/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function antiSpam(emailContent) {
    if (emailContent !== "SPAM" && "SCAM") { return true }
    else if (emailContent === "SPAM" && "SCAM") { return false }
}

console.log(antiSpam("GIGI"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function data(data) { }

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
