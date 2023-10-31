let nome="mario"
let cognome="rossi"
let eta=45;
let città="roma"

let obj={
    nome:"mario",
    cognome:"rossi",
    eta:45,
    citta:"roma",
    attivo:true
}

console.log(obj.nome)

console.log(typeof obj)

obj.cap="00065"; //aggiungo propieta

console.log(obj.nome) // leggo e metto su l log

delete obj.nome; //elimino proprietà

const newUtente=obj; // assegno a new utente lo stesso riferimento di obj condividono locazione

console.log(obj);
console.log(newUtente);

newUtente.cognome="Verdi";
newUtente.citta="Milano";

console.log(newUtente)

const copyUtente=Object.assign(obj) //copia! niente locazione di memmoria

console.log(copyUtente)
obj.cap="00011"

console.log(obj)


//array//
let animals=['Gatto','cane','tartaruga']

//spazio di memoria dove metto piu valori//

//let arr=new Array()
//metodi equivalenti

//let arr2=[]


console.log(typeof animals)
console.log(animals)
console.log(animals[1]) //per indici numerici

//gli indici vanno da 0 a n-1 cioe sono 3 elementi ma gli inidici sono 0 1 2 

animals[2]="lumaca" //modifico valore di un array;

animals[4]="rospo"//aggiungo valore di un array;


animals.push("colomba")
animals.unshift("orso")
animals.shift() //toglie dall'inizio

console.log(animals.length)


animals.pop()//toglie elemento dalla fine


let val=animals.pop()
console.log( val +"eliminato da arry dalla fine questo è")

animals.splice(1,2,"coniglio","drago")//cancella indice 1 parti da la e cancella due elementi, se non metto deletcount cancella da 1 tutti
//spazio che si è creato inserisce coniglio

console.log(animals.sort((a,b)=>b-a))

console.log(animals.reverse())