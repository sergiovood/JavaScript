"use strict";

//Lesson - 17 - Методы и свойстава строк и чисел
//Dodatkowe materialy
//https://learn.javascript.ru/string
//https://learn.javascript.ru/number
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String

const str = "test";
console.log(str.leght); // dlugosc string

const arr = [1, 2, 4]
console.log(arr.leght); // dlugosc array

const strTwo = "test";
console.log(strTwo[2]); // wynik literk S. 

//console.log(strTwo[2] = 'd'); // w taki bezposerdni sposob zamiana literki nie zadziala, jest to nie poprawny zapis.

//Metody
console.log(strTwo.toUpperCase()); //DUZE litery
console.log(strTwo.toLowerCase()); //male litery
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));  // znalezenie indeksu dla: fruit
console.log(fruit.indexOf("q")); // takiej litery nie bedzie dlatego wynik bedzie: -1

const logg = "Hello world";

//metoda - slice() - podajemy jeden lub dwa argumenty . Jesli podamy jeden to wytniemy tekst od zadanego miejsca i do konca.
console.log(logg.slice(6, 11));  // spacja nie liczy sie, dlatego zaczynamy z 6 a nie z 7
// konczymy na 11 bo jesli na 10 to zakonczymy na literce d i ona nie bedzie wlaczona do wyniku.
console.log(logg.slice(-5, -1)); // цнсштфс od konca (z prawej strony) tez mozna

//Metod substring()  - tez wycina tekst
console.log(logg.substring(6, 11)); // takze zwroci: world
// ta metoda nie wspiera wycinanie od konca jak w metodzie slice.

//Method - substr() - przyjmuje dwa argumenty (początek i długość - ile symboli trzeba wyciąć)
console.log(logg.substr(6, 5)); // róznica w tym że na końcu nie podajemy ostatniego indeksu wyciniania jak w poprzednich metodach
// podajemy indekst rozpoczecia i dalej ile literek wyciac po rozpoczenciu.

//Metod - Math.własciwosc();
const num = 12.2;

//Match.round() - okrąglenia liczby
console.log(Math.round(num)); //wynik 12

//Metod - parseInt() - zmienia liczbe w cala liczbe i jesli liczba byla zapisana jako string to zamieni sie number 
const test = '12.2px';
console.log(parseInt(test)); //wynik 12 - liczba nie tekst

//Metod - parseFloat() - tak samo jak wyzej tylko zwraca nie calkowite liczby
console.log(parseFloat(test)); //wynik 12.2 - liczba

console.dir(Number); //sprawdzić w przegliądarce -> console. Wszystkie metody i właściwości dla Number. 