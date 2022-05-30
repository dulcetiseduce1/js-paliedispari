const parola = prompt('Scrivi una parola')

let parolaSplit = parola.split("")
parolaSplit = parolaSplit.reverse()

let parolaReverse = parolaSplit.join("")

if (parola == parolaReverse)
{
    console.log(parola + ' è palindroma')
}
 else
{
    console.log(parola + ' non è palindroma')
}