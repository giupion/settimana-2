/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const num1 = prompt("inserisci un numero");
const num2 = prompt("inserisci un altro numero");
/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 > num2) {
  console.log("numero piu grande " + num1)
}
else if (num1 === num2) { console.log("sono uguali") }
else { console.log("numero più grande " + num2) }


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 4;
if (num3 !== 5) { console.log("not equal") }
else { console.log("equal") }



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const num4 = prompt("inserisci un numero per verificare sia divisibile per 5");
const num5 = 5
const rapporto = num4 / num5;
if (rapporto % 0) { console.log("divisibile per 5") }

else { console.log("non divisibile") }



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const num6 = 8;
const num7 = 3;

/* SCRIVI QUI LA TUA RISPOSTA */

if (num6 === 8) { console.log("num6 è uguale a 8") }
else if (num7 === 8) {
  console.log("num7 è uguale a 8")
}
else if (num6 + num7 === 8) {
  console.log("la somma num6 e 7 è uguale a 8")
}
else { console.log("diverso da 8") }


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = prompt("il tuo ammontare del carrello è ");
let blackfridaySconto = (totalShoppingCart * 20) / 100;
let totale = totalShoppingCart - blackfridaySconto;
let spedizionefissa = 10;
let sommaspedizione = totale + spedizionefissa;
if (totalShoppingCart > 50) { console.log("free delivery! " + "il total amount è " + totale) }
else {

  console.log("il total amount è " + sommaspedizione)
}



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* vedi sopra*/



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const a = 40
const b = 30
const c = 75
let arro = [];


if (a > b) 
  if (a > c) {
   console.log(c,a,b)
  }
  else { if (c > b) { console.log(a,c,b) } 


  else  { console.log(a,b,c) } }

  else{

    if (c>b){console.log(c,b,a)}
  

  else{console.log(b,a,c)}}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let drago = "fuoco";

if (typeof drago === "number") { console.log("questo è un numero") }
else { console.log("questo non è un numero") }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let number = prompt("inserisci un numero")
number /= 2;
if (number % 0) { console.log("questo numero è pari") }
else { console.log("questo numero è dispari") }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7

if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

//verifica sempre prima condizione...
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me)



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let arr = [];
console.log(arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(arr)



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


arr.pop()
arr[9] = 100
console.log(arr)