// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall'utente.

const n = parseInt(prompt("Inserisci un numero"));
const squares = [];
// let square;

// for (let i = 0; i <= n; i++) {
//      square = i * i * i;
//      console.log(square);
// }

let square;
let i = 0;

while (i <= n) {
    square = i * i * i;
    console.log(square);
    i++;
}