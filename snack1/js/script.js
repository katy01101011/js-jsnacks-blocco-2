// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Esegui questo programma in due versioni, con il for e con il while.
// Il programma stampa la somma di tutti i numeri inseriti.

// Versione con FOR
// let somma = 0;

// for (let i = 0; i < 5; i++) {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     somma += userNumber;
// }
// console.log(somma);

// Versione con WHILE
let somma = 0;
let i = 0;

while (i < 5) {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    somma += userNumber;
    i++;
}
console.log(somma);