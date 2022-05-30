// L’utente sceglie pari o dispari
let sceltaPariDispari = prompt("pari o dispari?")

while( sceltaPariDispari == "" || !isNaN(sceltaPariDispari))
{
    sceltaPariDispari = prompt("pari o dispari?")
}

// L’utente inserisce un numero da 1 a 5
let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"))

while(isNaN(numeroUtente)) 
{
    numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"))
}

while(numeroUtente > 5 || numeroUtente < 1 ) 
{
    numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"))
}

// Generiamo un numero random da 1 a 5
function numeroRandomComputer () {
    return Math.floor(Math.random() * 5 + 1)
}

const numeroComputer = (numeroRandomComputer())

// somma numeri e stabilisci pari e dispari
function sommaNumero (num1, num2) 
{
    
    let sum = num1 + num2

    if( sum % 2 === 0) 
    {
        console.log("la somma è PARI " + sum)
    }
    else 
    {
        console.log("la somma è DISPARI " + sum)
    }

    return sum
}

// salva somma variabili
const sommaUtenteComp = sommaNumero(numeroUtente, numeroComputer)

console.log("numero computer " + numeroComputer)
console.log("numero utente" + numeroUtente)

// Dichiariamo chi ha vinto.
// utente pari e somma pari
if(sceltaPariDispari === "pari" && sommaUtenteComp % 2 === 0) 
{ 
    alert("hai vinto")
}
else
{
    alert("hai perso")
}