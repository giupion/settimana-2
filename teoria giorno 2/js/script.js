/*if (condizione) { }
else if (condizione) { }
else if (condizione) { }
//massimo 3 else if//
else { } */



//si usa quando ci sono piu else if//
/*switch (espressione) {
    case value:
        break;
    case value:
        break;
    case value: //else if
        break;
    default: //come else//

        break;
}*/

let giornoSettimana=3;
if(giornoSettimana===1){
    console.log('oggi è lunedi');
}
else if(giornoSettimana===2){
    console.log("oggi è martedì")
}
else{}

switch (giornoSettimana){
    case 1:console.log('oggi è lunedì')
    case 2:console.log('oggi è martedì')
}



let sum=0;
while(true)
{let v=prompt('inseriscis un numero o end per terminare')

if(v==='end'||v===null)
{break;}


console.log(Number(v))
if(isNaN(Number(v))) //Nan è un numero
{console.log("non è un numero")}
else{sum+=Number(v)}} //transformo stringa in un numero

console.log(sum);

console.log("FINE");


let pass;
do{pass=prompt("inserisci password");
}
//se diverso da controllo ritorna sopra//
while(pass !== "qwerty")

console.log("Fine")