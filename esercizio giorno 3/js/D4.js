/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */

//dichiarazione funzione
function area(l1, l2) {

    let mi = l1 * 2 + l2 * 2;
    return mi;
}
console.log(area(4, 5)) //invocazione  nameFunction(...params)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(x, y) {
    let z = x + y;

    if (x === y) { return z * 3 }
    else { return z; }
}
console.log(crazySum(5, 5))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


function crazyDiff(x, y = 19) {
    let z = Math.abs(x - y);
    if (x > y) { return z * 3 }
    else { return z }
}

console.log(crazyDiff(25))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {

    if (20 < n <= 100 && n === 400) { return true }
    else { return false; }
}
console.log(boundary(101))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(String) {
    if (String.startsWith("EPICODE")) { return String }

    else { return String += "EPICODE" }
}

console.log(epify("MIO"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


function check3and7(n) {


    if ((n % 3) == 0) { return n + " numero multiplo di 3"; }
    else if ((n % 7) == 0) { return n + " numero multiplo di 7"; }
}

console.log(check3and7(15))



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(str) {
    return str.split("").reverse().join("");
}


console.log(reverseString("MIO"))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/





    function upperFirst(string) {
        let words = string.split(" ");
        let fraseConMaiuscole = "";
    
      for (let i = 0; i < words.length; i++) {
        let singleWord = words[i];
        fraseConMaiuscole += singleWord.charAt(0).toUpperCase() + singleWord.slice(1) + "";
        if (i < words.length - 1) {
            fraseConMaiuscole += " ";
        }
      }
      return fraseConMaiuscole;
    }
    

   
console.log(upperFirst("giuseppe vincenzo giovanni"))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/


function cutString(String)
{return String.slice(1,length-1);}
console.log(cutString("Taglio"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/



function giveMeRandom(n){
let array=[];
for(i=0;i<n;i++)
    { let casuale=Math.random()*n;
    array.push(casuale);
}
return array}

console.log(giveMeRandom(15))



/* SCRIVI QUI LA TUA RISPOSTA */
