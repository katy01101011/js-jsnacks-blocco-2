// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
const names = ["Harry", "Ermione", "Ron", "Rubeus", "Lucius", "Albus", "Luna", "Drako", "Minerva", "Bellatrix"];
const surnames = ["Trump", "Obama", "Berlusconi", "Prodi", "Merkel", "Renzi", "Mattarella", "Grillo", "Rydzyk", "Tusk"];

const falseGuest = [];

for (let i = 0; i < 3; i++) {
    let randomNameIndex = Math.floor(Math.random() * names.length);
    let randomName = names[randomNameIndex];
    console.log(randomName);
    
    let randomSurnameIndex = Math.floor(Math.random() * surnames.length);
    let randomSurname = surnames[randomSurnameIndex];
    console.log(randomSurname);

    console.log(`${randomName} ${randomSurname}`);
}