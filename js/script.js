"use strict";

//Lesson 12 - Warunki

// if (4 == 9) {
//     console.log('Ok!');
// } else{
//     console.log('error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log("Zadużo");
// } else {
//     console.log('Ok');
// }
// // ? - Operator warunkowy, тернарный оператор
// (num === 50) ? console.log('OK') : console.log('Error');

// Konstrukacja Switch 
// standardowo porownuje tylko dokladne znaczenia, a nie jak if wicej > czy mniej <
const num = 50;

switch (num) {
    case 49:
        console.log('Nie prawda');
        break;
    case 100:
        console.log('Nie prawda');
        break;
    case 50:
        console.log('Prawda');
        break;
    default:
        console.log('Nie tym razem');
        break;
}

// switch tak samo zadzial z typem string, rezultat bedzie taki sam
const num = "50";

switch (num) {
    case "49":
        console.log('Nie prawda');
        break;
    case "100":
        console.log('Nie prawda');
        break;
    case "50":
        console.log('Prawda');
        break;
    default:
        console.log('Nie tym razem');
        break;
}