"use strict";
//Wszystkie lekcje

//---------------------------------------------------------------------------------------------------
//Lessons 6 - Object 
let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const persone = '5 text';

const bool = true; //or false

//console.log(something); - zmienna nie zdefiniowana - null

let und; // zmienna istnieje ale bez znaczenia - undefined
console.log(und);

const obj = {
    name: "John",  //name - nazwa klucza objekta potrzebny pod czas pobrania informacji z objektu
    age: 25,        //age- nazwa klucza objekta
    isMarried: false //isMarried- nazwa klucza objekta
};

console.log(obj.name); // lepszy sposob na wyswietlenia imienia wzietego z objektu
//console.log(obj["name"]); - drugi sposob na wyswielenia imienia z objektu

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; // klasyczny masyw, dowolne typy danych ktore leza pokolei
console.log(arr[1]); // dostajemy z masywa elementy, indeks zaczyna sie od 0 zera. 
//Indeksy to są klucze nie zmienny w masywie w przeciwienstwie do objektów.

//---------------------------------------------------------------------------------------------------
//Lesson 7 - Okna wyskakujace, typy danych
// alert('Hello');  // modalne okno z informacja

//const result = confirm("Are you here?"); // okno z informacja i mozliwoscia wybrania YES or Cansel
//console.log(result);

// const answerOne = prompt("Masz 18 lat?", "18"); // okno z placeholder czyli mozliwoscia wpisania przez uzytkownika tresci
// console.log(answerOne + 5); // wyswietli string
// console.log(typeof(answerOne)); //wszystko co uzytkownik wpisze bedzie zapisane do zmiennej jako tekst string
//typeof - mozliwosc uzyskania informacji jaki typem jest zmienna

// const answerTwo = +prompt("Masz 18 lat?", "18"); // znaczek "+" zmienia typ formy do wpisania na numeryczny 
// console.log(answerTwo + 5); // wyswietli number
// console.log(typeof(answerTwo)); 

const answers = [];

// answers[0] = prompt('Jak Twoje imie?', '');
// answers[1] = prompt('Jak Twoje nazwisko?', '');
// answers[2] = prompt('Ile masz lat?', '');

document.write(answers);

//---------------------------------------------------------------------------------------------------

//Lesson 8 - Interpolacja
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings
const category = 'tojs';

console.log(`https://someurl.com${category}/5`);

const user = "Ivan";

alert(`Czesc, ${user}`);

//---------------------------------------------------------------------------------------------------
//Lesson 9 - operation
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table


console.log('arr' + "- object");
console.log(4 + +'5'); // unarny plus+ przed 5 zmiania typ string na number
console.log('4' + '5');


//Increment | Decrement
let incr = 10,   
    decr = 10;  

    incr++;  //postfiksny increment
    decr--;  //postfikny decrement
    console.log(incr);
    console.log(decr);
    //---
    console.log('-----');
    //---
    ++incr;  //prefeksny increment
    --decr;  //prefiksny decrement
    console.log(incr);
    console.log(decr);

      //---
      console.log('-----');
      //---

      let incrTwo = 9,
          decrTwo = 9;

      console.log(++incrTwo);
      console.log(--decrTwo);

      let incrThree = 9,
          decrThree = 9;
      console.log(incrThree++);
      console.log(decrThree--);

/* ++9   prefiksny increment
--9   prefiksny decrement
9++ postfiksnyj increment
9-- postfiksnyj decrement
Resultat taki sam, ale ruznica jest:
Prefiksny najpierw powiększa/zmniejsza potem zwraca znaczenie
Postfiksny najpierw zwraca znaczenia potem powieksza/zmniejsza
Wykorzystywane w cyklach.*/

//-----------

console.log(5%2) //modulo
console.log(2*4 == 8) // true
console.log(2*4 == '8') //true - bo porownujemy nie typy danych: numer z string, a znaczenia czyli 8 i 8
console.log(2*4 === 8) //false - tutaj juz bedzie porownywane jako typy danych  === - znaczy dokladne porownanie

const isChecked = true,
    isClose = true;
    
console.log(isChecked && isClose);  // operator &&(i) - zwraca true jesli wszystkie elementy true
console.log(isChecked || isClose);  // operator ||(lub) - zwraca true jesli jeden z nich będzie true1
console.log(isChecked || !isClose);  //operator !(zmiana znaczenia) - z true na false, ale wynik i tak będzie true bo jeden z nich true
console.log(!true);
    
console.log(5 != 9); //true ponieważ 5 nie równa sie 9

console.log(3 !== '3'); // true ponieważ typ danych numer nie równa się string

//---------------------------------------------------------------------------------------------------
//Lesson 10,11 - GIT
/*
Uczyc sie gita  - https://githowto.com/ru
Wizualne uczenie sie gita - https://learngitbranching.js.org/

komandy - rozpoczecia pracy
git init - inicjalizacja folderu projektu w ktorym bedziemy pracowac

Ustawienie swojego imia i email - globalnie dla wszystkich projektow (wybralismy ta opcje)
git config --global user.name "Sergio"
git config --global user.email sergiovood@gmail.com

Ustawienie danych lokalnie dla projektu, przydatne kiedy musimy podac rozne dane tworcy dla konkretnych projektow
git config --local user.name "Sergio"
git config --local user.email sergiovood@gmail.com


git status - sprawdzic status plikow
git add -A - dodac wszystkie pliki do indeksu gita, żeby on zaczął ich śledzić
git add nazwa_pliku.css - dodać tylko jeden plik
git commit -a -m"Podac informacje jakich zmian dokonalizmy"- stworzyć punk przywracania wszystkich plików lub konkretnego

git log - zobaczyc wszystkie commity(punkty kontrolne) ktore byly robione
git pull - przed pracą nad projektem zawsze trzeba pobrac ostatnie zmiany
--------------------------------------------------------------------
Klonowanie projektu np. jesjli pracujemy na innym komputerze
wejsc w folder na komputerze gdzie bedzie sklonowany projekt z github
git clone link do repozetorium ktory mamy sklonowac skopiojowac i wstawic tutaj i dodac nazwe folderu w ktory klonujemy
przyklad: git clone https://github.com/sergiovood/JavaScript.git project_2
zacznie sie klonowanie projektu na nowy komputer
--------------------------------------------------------------------
Polaczenia dwoch projektow - Merge.
Czasami zapomniemy zrobibic przed poczatkiem pracy nad projektem git pull i nie pobralismy aktualnych danych, robimy jeszcze na starych plikach.
I zeby nie zaczynac odnowa trzeba polaczyc dwa projekty w jedno. Czyli najpierw pobrac wszystko git pull 
i wtedy dodac nasze zmiane git add -A, git commit -a -m""zmiany", git push
czasem podczas polaczenia projektow (merge) będzie trzeba wpisac notatke > potem wcisnac ctrl + c i jeszcze raz ctrl + c > potem wpisac :wq! i wcisnac enter
--------------------------------------------------------------------
Plik .gitignore
dodawac do kazdego projektu, czasami projekt moze wazyc duzo MB, a ten plik pomoze nie pobierac wszystkiego tylko to co nie jest ignorowane gitem. 
--------------------------------------------------------------------
GitKraken - program do vizualnego zarządzania gitem. 
*/

//---------------------------------------------------------------------------------------------------
//Lesson 12 - Zadanie
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Ile filmów już wiedziałeś?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};
//Deklaracja zmiennych jednym zamachem
const a = prompt('Jaki film ostatnio widziałeś?', ''),
      b = prompt('Jaką ocenę zasługuje film?', ''),
      c = prompt('Jaki film ostatnio widziałeś?', ''),
      d = prompt('Jaką ocenę zasługuje film?', '');

//Przydzielenie odpowiedzi do objektu movies i wlaczenia odpowiedzi Jaki film oraz jaki posiada ranking
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

//wyswietlamy w konsoli wynik dla sprawdzenia poprawnosci zapisanych danych
console.log(personalMovieDB);


//---------------------------------------------------------------------------------------------------
//Lesson 13 - Warunki

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
const num2 = "50";

switch (num2) {
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

//---------------------------------------------------------------------------------------------------
//Lesson 14 - Cyckle 
//https://learn.javascript.ru/while-for

let num3 = 55;

while (num3 <= 55){
    console.log(num3);
    num3++
}

do {
    console.log(num3);
    num3++;
}
while (num3 < 55);

for (let i = 1; i < 8; i++) {
    console.log(num3);
    num3++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}

//---------------------------------------------------------------------------------------------------
// Lesson 15 - Zadanie czesc 2
/*1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Ile filmów już wiedziałeś?', '');

let num = 0,
    a = '',
    b = '';

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};  

//wersja z WHILE
while (num < 2){
    a = prompt('Jaki film ostatnio widziałeś?', '');
    b = prompt('Jaką ocenę zasługuje film?', '');
    if (a != '' && b != '' && a != null && b != null && a.length < 50){
        personalMovieDB.movies[a] = b;
        num++;  
    }
}

//wersja z FOR
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

//wersja z Do - While
//zrobić

if (personalMovieDB.count <= 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (10 < personalMovieDB.count <= 30){
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30){
    alert("Вы киноман");
} else{
    alert("Произошла ошибка");  
}

//wyswietlamy w konsoli wynik dla sprawdzenia poprawnosci zapisanych danych
console.log(personalMovieDB);

//---------------------------------------------------------------------------------------------------
// Lesson 16 - Function
//Dodatkowe materialy
// https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970
// https://learn.javascript.ru/closures
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Typy finkcji: https://drive.google.com/file/d/1Xuw7feRJ-2ZzE_U7E4MZMXh1HLVljcU8/view



console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(19,6));

let num = 20; //globalna zmienna

//Typ funkcji Function declaration
function showFirstMessage (text) {  
    console.log(text);
    num = 10; //zmiana zmiennej num z 20 na 10
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b){
    return (a+b); // koniec funkcji, jesli oddac nizej kod w funkcji on juz nie bedzie dzialal
}

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(19,6));  // funkcji typu Function declaration można wyżwietlać nawet na początku dokumentu, jeszcze przed deklaracją funkcji, w kazdym miejscu skryptu.

function ret(){
    let num = 50; // lokalna zmienna dostepna tylko w srodku funkcji
    return num;
}

const anotherNum = ret(); // wynik funkcji zapisujemy do zewnetrzenj zmiennej
console.log(anotherNum);


//Typ: Function Expression
const logger = function() {
    console.log("Hello");
}; // w tym sposobie trzeba pamientac o ; na koncu, bo jest to funkcja ktora zapisana odrazu do zmiennej. Function declaration.

logger();  // wyzwać funcję można tylko po deklaracji kodu.


//Typ - arrow Function - stzalkowa funkcja, nowy standart ES6
//ma swoje ograniczniea, dziala automatycznie bez wyzwania, dlatego nie wszedzie moze byc wykorzystywana.
//1
const calcTwo = (a, b) => a + b;
//2
const calcThree = a => a + b;
//3
const calcFour = (a, b) => {
    console.log('5');
    return(a + b);
};  // tutaj tez pamietac zeby zamknac na koncu ;

//---------------------------------------------------------------------------------------------------
//Lesson - 17 - Методы и свойстава строк и чисел
//Dodatkowe materialy
//https://learn.javascript.ru/string
//https://learn.javascript.ru/number
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String

const str = "test";
console.log(str.length); // dlugosc string

const arr = [1, 2, 4]
console.log(arr.length); // dlugosc array

const strTwo = "test";
console.log(strTwo[2]); // wynik literk S. 

//console.log(strTwo[2] = 'd'); // w taki bezposerdni sposob zamiana literki nie zadziala, jest to nie poprawny zapis.

//Metody
console.log(strTwo.toUpperCase()); //DUZE litery
console.log(strTwo.toLowerCase()); //male litery

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

//---------------------------------------------------------------------------------------------------
//Lesson - 18 - zadanie function

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function star() {
    numberOfFilms = +prompt('Ile filmów już wiedziałeś?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Ile filmów już wiedziałeś?', '');
    }
}

star();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (10 < personalMovieDB.count <= 30){
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30){
        alert("Вы киноман");
    } else{
        alert("Произошла ошибка");  
    }
}

detectedPersonalLevel();

//wyswietlamy w konsoli wynik dla sprawdzenia poprawnosci zapisanych danych
//najpier sprawdzamy prywatnosc danych przed wyswietleniem
function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
 }

 showMyDB (personalMovieDB.privat);
 
 function writeYourGenres() {
//Standardowy wariant zapisu:
    // for (let i = 1; i < 4; i++) {
    //      const userGenres = prompt(`Ваш любимый жанр под номером: ${i}`);
    //      personalMovieDB.genres[i - 1] = userGenres;
    //  }
    //Lepszy warian zapisu, bez tworzenia dodatkowych zmiennych, mniej kodu.
     for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером: ${i}`); // [i-1] - trzeba podac zeby zapis w array zaczynala sie od 0, 
        //bo jesli nie podamy, zapis zaczynac sie bedzie od 1, bo w naszym cykle for startujemy od 1. 
    }
 }
 writeYourGenres();

 //---------------------------------------------------------------------------------------------------
//lesson 19 - Callback - function
// https://learn.javascript.ru/callbacks

function first (){
    // Do something
    setTimeout(function() { //задержка 
        console.log(1);
    }, 500); //задержка выполенения в пол секунди
}

function second() {  //здесь нет задержки
    console.log(2);
}

first();
second();
//Запомнить правило, если функции идут одно за другой это не значит что выводяться одна за другой
//иногда большая функцция выполняеться дольше чем маленькая что может привести к не очивидному результату
//это плохо когда мы должны получить снача даные с большой функции, чтобы передать результат в мальнукую.
//если вторая выполниться быстрее первой функции то может вывести не тот результат что нам нужною

//Callback funkcja - to funkcja która rozpoczyna swoje działanie po kolei, najpierw pierwsza musi skonczyc prace, 
//a tylko potem kolejna zacznie działanie.

//Szablon callback funkcji
//w miejsce argumenta callback można będzie wyswać wynik innej funkcji
function learnJs(lang, callback) { 
    console.log(`Uczy się: ${lang}`);
    callback();
}

function done() {
    console.log('Juz skonczylem lekcje');
}

learnJs('JavaScript', done);  //WAZNE: done zapisujemy bez (), bo my ja nie вызываем, а только передаем. 
//Схема работы
//Функция LearnJs -> выполни функию done 
//только тогда, когда ты дойдешь до callback() в ауткции LearnJs
//Функция Done передаеться в место аргумента callback і только 
//внутри уже вызиваеться callback(); - что запускает вторую функциию и выводить результат один за другим

 //---------------------------------------------------------------------------------------------------

 //Lesson - 20 Объекты, Деструктуризация объекта

 //Деструктуризация объекта - https://learn.javascript.ru/destructuring#destrukturizatsiya-obekta
 // Объекты Javascript в примерах - https://javascript.ru/tutorial/object/intro
 //Дескрипторы, геттеры и сеттеры свойств - https://learn.javascript.ru/descriptors-getters-setters
 // Объекты: перебор свойств - https://learn.javascript.ru/object-for-in
 
 const options = {
     name:'test',
     width: 1024,
     height: 1024,
     colors: {
         border: 'black',
         bg: 'red'
     },
     makeTest: function() {  //Metoda - która będzie pracować w środku Objektu
         console.log("Test");
     }
 };
 
 options.makeTest(); // Właczamy metodę
 
 //Destruktyracja objektu
 const {border, bg} = options.colors; //wycigamy potrzebne nam wlasciwosci
 console.log(border); //wyswietlamy to co nam trzeba, jednoczesnie sprawdzamy czy dziala destrukturyzacja
 
 //Objekty mają swoje włożone metody, które pomagają szybciej rozwiązywać zadania, o których mozna poczytac w dokumentacji
 console.log(Object.keys(options).lenght); //Metod Object.keys - spawdza ile wlasciwosci jest w objekcie
 
 // console.log(options.name)
 
 // delete options.name;  // usunac test z objektu
 // console.log(options);
 
 //Przeliterowac objekt 
 for (let key in options) {
     if (typeof(options[key]) === 'object'){ //typeof sprawdzamy czy jest typem danych object
         for (let i in options[key]) {
             console.log(`Właściwości ${i} ma znaczenie ${options[key][i]}`);
         } 
     }else {
         console.log(`Właściwość ${key} ma znaczenie ${options[key]}`);
 }

 //--------------------------------------------------------------------------------------------------
 //Lesson - 21 - Array - tablica - масив и псевдомасивы

//  Быстрая сортировка http://algolist.ru/sort/quick_sort.php
// Дескрипторы, геттеры и сеттеры свойств https://learn.javascript.ru/descriptors-getters-setters
// Отличие for...of от for...in в javascript  http://coldfox.ru/article/5c7ffe64bbf20e61c12c7348/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5-for-of-%D0%BE%D1%82-for-in-%D0%B2-javascript

const arr = [1, 13, 26, 8, 10];
arr.sort(); //sortuje po pierwszemu numeru, dlatego potrzebujemy ponizsza funkcje zeby bylo ok
console.log(arr);

function compareNum(a, b){  //collback funkcja ktora pomoga w poprawnym sortuwaniu 
    return a - b;
}

// console.log(arr.length); //licze dlugosc od 1 a nie od 0 

//Iteracja po tablicy
//METODA: forEach
const arr = [1, 13, 26, 8, 10];
arr.forEach(function(item, i, arr){  //forEach - перебирает таблицу, item - każdy element, i - liczba po kolei zaczynajac od 0, arr - wyswietli cala tablice. 
    console.log(`${i}: ${item} w środku tablicy ${arr}`);
 });

// arr[99] = 0; //na 99 pozycji zapiszemy 0 do tablicy
// console.log(arr.length); // wyswietli dlugosc masywu 100 elementow, jest to blad
// console.log(arr); // wyswietli, ze mamy 94 puste elementy w tablicy, bo zapisalismy 0 nie na kolejne wolne miejsce a na 99, co powoduje stworzenia pustych znaczeń

// arr.pop();
// console.log(arr); //usunie ostatnie znaczenie 8

// arr.push(10);  //dodaje na koniec tablicy 10
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//METODA for of 
// for (let value of arr) {  //iteracja po tablicy 
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(';'));



//--------------------------------------------------------------------------------------------------
//Lesson 22 - Rozne metody kopiowania objektow/tablicy do nowych zmiennych
// Копирование объектов в JavaScript - https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff
// Метод Object.assign() - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// ... Spread - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax


// Передача по ссылке или по значению, Spread оператор (ES6-ES9)
// Передача даных по значению, работает только с приметивными типами даных

//----
// let a = 5,
//     b = a; //przkazujemy liczbe 5 do nowej zmiennej b
// b = b + 5; //modyfikujemy zmienne b
// console.log(b); //rowna 10
// console.log(a); //rowna sie 5
//-----
//Z złożonymi typami zmiennych tak nie zadziala, bo przekazuje sie nie zawierające się dane, a link do tej zmiennej
// //Link - передача по ссылке

// const obj = {  //tworzymy objekt
//     a: 5, 
//     b: 1
// };

// const copy = obj; //do coby kladziemy link ktory bedzie prowadzil do zmiennej obj, jest to tylko link a nie kopia struktury calego objektu do nowej zmiennej
// //zmienna copy nie zawiera strukture ktore zawiera obj, tylko odnosnik do tej struktury
// copy.a = 10; //probujemy modyfikowac objekt copy, ale docelowo modefikowany jest objekt obj, bo zmienna copy zawiera link do niego, a kopie tego objektu.

// //wyswieli sie nam dwa taki same rezultaty
// console.log(copy); //ta zmienna wyswietli tak naprawde obj, bo w srodu ma link ktory do niej prowadzi
// console.log(obj); 


// Jak Kopiować objekt do innej zmiennej
// Kopie są 2 typów:
// Głeboka kopia | Prosta kopia 
// Głeboka kopia - jeśli np. w objekcie, tablice kopjowane takze inne wstawione w srodku objekty i tablicy
// Prosta kopia  - jest wtedy kiedy kopiowany jest tylko pierwszy rząd znaczeń, a jeśli objekt/tablica zawiera w srodku inne wstawione objekty/tablicy wtedy oni beda już kopiowane jako linki do nich a nie cala strukture, co oznacza ze przy zmianie znaczenia w skpjowanym objekcie/tablicy beda modyfikowac sie takze znaczenia w glownym objekcie/tablicy

//Prosta kopia (tylko gorne znaczenia objektu, wstawione objekty w objekt beda dalej kpiowane jako linki) - tworzymy funkcje ktora bedzie kopjowac objekt
function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
//tworzymy objekt ktory bedziemy kopjowac do innej zmiennej
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
//kopiujemy zmienna za pomoca funkcji do innej zmiennej
const newNumbers = copy(numbers);

//modyfikujemy znaczenie już w skopjowanym objekcie
newNumbers.a = 10;
newNumbers.c.x = 10; // zostanie zmodyfikowane juz nie w kopii a w glownym objekcie, bo sa to juz linki, funkcja nie kupjujie tak gleboko strukture
//sprawdzamy czy kopia po zmianie rozni sie do po docelowego objektu
console.log(newNumbers); //powinno byc a:10
console.log(numbers); //powinno zostac a:2
// -----

const add = {
    d: 17,
    e: 20
};

//Metoda pracy z objektamy, kopiowanie za pomoca metody a nie funkcji

// Object.assign(nazwa jaki objekt bierzemy, nazwa z jakim objektem wlaczymy)
// console.log(Object.assign(numbers, add));

// Tak samo można zrobic tylko juz z pustym objektom, wzic jeden i skopijowac do pustego (Prosta kopia - tylko pierwsze znaczenia z rzadu)
const clone = Object.assign({}, add); // zapisujemy wszystko w objekt clone

clone.d = 20;

console.log(add);
console.log(clone);


//Kopiowanie Tablicy - Array
//za pomocą metody .slice();
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

//sprawdzamy czy przy zmianie znaczenia w skopjowanej tablicy, nie zmienia to same znaczenie w tablicy glownej
newArray[1] = 'sdfsdfd';
console.log(newArray);
console.log(oldArray);

//...nazwa - Spread оператор разворота(выдобывания информаци), разварачивает структуру и привращает ее просто в набор каких то отдельных друг от друга данных
// jeśli tablica - [...nazwa]
//jeśli objekt - {...nazwa}
const video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'livejournal', 'blogger'],
        //wlaczenia dwoch zmiennych w jedna z dodatkowa informacja
        // [...nazwa zmiennej, ...nazwa zmiennej, jesli trzeba dodatkowe dane];
        internet = [...video, ...blogs, 'vk', 'facebook'];
// sprawdzamy polaczenia 
console.log(internet);


 //przyklad bardziej skomplikowany

 //musimy w funkcje przyjac trzy odzielne dane i wyswietlic ich
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
//mamy zbior danych, nie bedziemy mogli te dane odrazu przekazac do funkcji
const num = [2, 5, 7]; 
//za pomoca ... spread operatora rozkladamy tablice na trzy odzielnne dane, i funkcja automatycznie bedzie mogla wyswietlic trzy elementy
log(...num);
//------

// kopia tablicy za pomoca ... spread operatora, a nie za pomoca .slice()
const array = ['a', 'b'];

const newArrayOne = [...array];
console.log(newArrayOne);

// kopia objektu za pomoca ... spread operatora
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);



//--------------------------------------------------------------------------------------------------
// Lesson 23 - ООП обектно ориентированое програмирование
// а также один из стилей ООП - Прототипно-оринтированое наследие 

// Ghj __proto__ - Object.prototype.__proto__ -  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
// Dziedziczenie bez __proto__ - Prototype methods, objects without __proto__ - https://javascript.info/prototype-methods

//Пример - Легковой автомобиль - обьект
// Свойства - колеса, двигатель, фары, двери, радио, динамики
// Метод - езда, светить фарами, перевозка грузов, перевозка людей

"skdlfjsld" //zwykly typ danych

let str = "some"; 
let strObj = new String(str); // на основании строки str создаем новую строку
console.log(typeof(str)); //tutaj bedzie typ string
console.log(typeof(strObj)); //tutaj bedzie typ Object, poniewaz wykorzystalismy wbudowany metod dla stringu, dlatego zwraca juz objekt a nie string
console.dir([1,2,3]); //zobaczyc w konsoli przegliadarki jak wygliada lancuch prototypow

//PROTOTYPY
//Tworzymy glowny prototyp ktory bedzie dziedziczyl innym objektom swoje wlasciwosci
const soldier = { //duzy prototyp ktory opisuje zownierzy w calosci
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

//Wersja 1
//Tworzymy pusty objekt jonh i odrazu ustawiemy dla niego prototyp
const jonh = Object.create(soldier);
jonh.sayHello(); // testujemy jonj umie umiec Hello dziedziczony z swojego prototypu soldier


//Wersja 2 
//jeśli trzeba ustawić prototyp dynamicznie, czyli jesli jonh juz istnieje to wtedy ustawiamy dla niego prototyp
const jonh = {   //objekt jonh ktory bedzie mial swoje wlasciwosci, a takze dziedziczy wlasciwosci u swojego prototypa
    health: 100
};
Object.setPrototypeOf(jonh, soldier);


//Wersja 3
//przestarzaly format __proto__ ktory juz nie jest wykorzystywany
jonh.__proto__ = soldier; // przestarzaly zapis - przydzielenia prototypu do objektu
console.log(jonh.armor); // jonh ma teraz dostep do wlasciwosci swojego prototypa, wyswietli sie armor: 100;
jonh.sayHello(); // testujemy jonj umie umiec Hello dziedziczony z swojego prototypu soldier


//--------------------------------------------------------------------------------------------------
//Lesson 24 - refaktoring koda 
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Ile filmów już wiedziałeś?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Ile filmów już wiedziałeś?', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (10 < personalMovieDB.count <= 30){
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            alert("Вы киноман");
        } else{
            alert("Произошла ошибка");  
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
     },
     toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
     //wyswietlamy w konsoli wynik dla sprawdzenia poprawnosci zapisanych danych
    //najpier sprawdzamy prywatnosc danych przed wyswietleniem
     writeYourGenres: function() {
        //Standardowy wariant zapisu:
            // for (let i = 1; i < 4; i++) {
            //      const userGenres = prompt(`Ваш любимый жанр под номером: ${i}`);
            //      personalMovieDB.genres[i - 1] = userGenres;
            //  }
            //Lepszy warian zapisu, bez tworzenia dodatkowych zmiennych, mniej kodu.
             for (let i = 1; i < 2; i++) {
                // let genre = prompt(`Ваш любимый жанр под номером: ${i}`); // [i-1] - trzeba podac zeby zapis w array zaczynala sie od 0
                
                // if(genre === '' || genre == null) {
                //     console.log('Wprowadziles niepoprawne dane lub nie podales zadnych danych');
                //     i--;
                // } else {
                //     personalMovieDB.genres[i - 1] = genre;
                // }

                let genres = prompt('Wprowadz swoje ulubione gatunki filmow przez przecinek').toLocaleUpperCase();// dodajemy metod zeby wszystko bylo w malym registrze, co pozwoli potem poprawnie posortowac metoda sort()
                if(genres === '' || genres == null) {
                    console.log('Wprowadziles niepoprawne dane lub nie podales zadnych danych');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', '); //dzieli zdanie na czesci w momencie kiedy jest znaleziony przecinek
                    personalMovieDB.genres.sort(); //sortuje gatunki filmow po alfabecie. Pamietac ze metoda sort() slowa z wyzszym registrze posortuje wyzej od slow w malym registrze, dlatego trzeba wszystko w maly registr przeksztawcic, jak na poczatku funkcji
            }   
            //Pokazujemy jakie gatunki filmow wprowadzil uzytkownik    
            personalMovieDB.genres.forEach((item, i) => {  //za pomoca forEach() - проходимся по таблице, w item zapisuje sie zakdy element z tablicy, i wyswietli liczbe elementu 
                     console.log(`Любимый жанр ${i + 1} - ${item}`); // i zaczyna sie od 0 zera, ale dla UI dla uzytkownika lepiej zaczac od 1 dlatego dodajemy jeden 
                 });
                //bo jesli nie podamy, zapis zaczynac sie bedzie od 1, bo w naszym cykle for startujemy od 1. 
            }
        

    }
};


//--------------------------------------------------------------------------------------------------
//Lesson - 26 - Динамическая типизация в JS - 
// Jest to mozliwosc jednego typu danych zamieniac sie w inny
// czyli string moze stac sie number, i na odwrot, object moze stac sie typem boolean 
// Typy danych - https://drive.google.com/file/d/1Nm2PDGru199Yf0c9l1T-upYbi0UkEj1F/view
// Style cssText Property - https://www.w3schools.com/jsref/prop_style_csstext.asp

//To String

// 1) Rzadko wykorzystywane przeksztawcenie
console.log(typeof(String(null))); // wynik - String, bo to co w srodku String() jest juz w '' niezaleznie od znaczenia
console.log((String(null))); // jak to wyglida w konsoli
console.log(typeof(String(4))); // tutaj to samo co wyzej

//2)
console.log(typeof(5 + "")); //takie dodanie do "" przeksztawca number w string
console.log((5 + "")); //wynik juz bedzie stringiem
console.log(typeof(null + '')); //tez string

// stara wersja 
const num = 5;
console.log("https://vk.com/catalog/" + num); //liczba dodana do stringu bedzie stringiem

//nowa wersja - Interpolacja
const num = 5;
console.log(`https://vk.com/catalog/${num}`);

//tworzymy style css, ktora musi byc jako string
const fontSize = 26 + 'px'; 

//To number
//1 Rzadko wykorzystywany
console.log(typeof(Number('4')));  //przeksztawci w number

//2 Czesto wykorzystywany - unarny plus
console.log(typeof(+'5'));
let answ = +prompt("Hello", "");

//3 Rzadko wykorzystywany
console.log(typeof(parseInt('15px', 10))); //parseInt(string, сисстема исчисления 10 - означает десетичная)
console.log(parseInt('15px', 10)); //pozwala na przeksztawcenie string to number


// To boolean
// Zawsze False - 0 , '', null, undefined, NaN;
// 1
let switcher = null; //false
if (switcher) {
    console.log('Working...');
}

switcher = 1; //true
if (switcher) {
    console.log('Working...');
}

// 2 Prawie nigdy nie wykorzystywany
console.log(typeof(Boolean('4'))); //boolean
console.log(Boolean(' ')); // tutaj bedzie True, w srodku jest spacja, a znaczy ze nie jest puste

// 3 Prawie nigdy nie wykorzystywany
console.log(typeof(!!"44444")); // !! - przeksztawca w znaczenie booolean
console.log(!!"44444"); //wynik true



//--------------------------------------------------------------------------------------------------

//Lesson - 27 - Задачи с собеседований на понимание основ
//Zadania -  https://drive.google.com/file/d/1xXLFKnhETnMqI444sm4Jq1fpEcLQlnyb/view

//Какое будет выведено значение: 
let x = 5; alert( x++ );  
// x = 5 - bo najpierw zwraca 5 piec a tylko potem powieksza o 1 
// jesli zmienimy forme zapisu ++x to wtedy odrazu powiększymy i wyswietlisie 6


//Чему равно такое выражение: 
// [ ] + false - null + true ?
console.log(typeof([] + false - null + true));
//wynik "NaN"
// [] - pusta tabliza oznacza "" czyli pusty string
// jesli dodawac cos do stringa to automatycznie staje sie stringiem
// potem chcemy odjac od stringa null co oznacza NaN nie numeryczny typ danych Not a number
// NaN + true dalej będzie "NaN"


//Что выведет этот код: 
let y = 1; 
let x = y = 2; 
alert(x);  
// x = 2


//Чему равна сумма: 
// [ ] + 1 + 2 //
//wynik - "12" - jako string
//pusty array [] to samo co string
// dodanie do stringu powoduje przeksztawcenie w string
// jeszcze jedno dodanie poprostu dodaje numer do tekstu ktory juz jest i przerabia na tekst


//Что выведет этот код: 
alert("1"[0]);
//wynik: 1
// string tez mozna rozdielic na indeksy
// prosty string sklada sie tylko z jednego indeksu zaczynajac z 0
// dwa zerowe indeksy wyswietlaja 1


//Чему равно 
console.log(2 && 1 && null && 0 && undefined)
// wynik: null
// operator && i będzie szedł z lewa na prawo dopóki będzie prawda
// 2 - true, 1 - true, null - false, dalej kod nie będzie sprawdzany
// zwracasię to znaczenie gdzie zostało znaleziono false, czyli null


// Есть ли разница между выражениями? 
console.log(!!( 1 && 2 ) === (1 && 2));
//wynik: false
// !!- przeksztawca (1 && 2) w typ boolean
// dlatego nie będzie się równac znaczeniu bez !!


// Что выведет этот код: 
alert( null || 2 && 3 || 4 );
//wynik: 3
//jeśli nie wiemy jaki operator zadziała pierwszy 
// sprawdzamy pierwszenstwo operatorów - https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Pierwsze%C5%84stwo_operator%C3%B3w
// im wieksza liczba tym szybciej bedzie sie wykonywac w kodzie
// && - jest na 6 miejscu, || na 5 miejscu, czyli najpierw wykona sie &&
// w porownaniu 2 && 3 bedzie zwracany wiekszy element czyli 3
// potem porownujemy null z wynikiem || 3
// operator || przestaje dzialac jesli jest true
// null jest false, znaczy dalej nam zostaje 3
// potem porownujemy 3 || 4, operator przestaje dzialac bo 3 jest true, dlatego zwracana jest 3


//Правда ли что a == b ?
const a = [1, 2, 3]; 
const b = [1, 2, 3];
console.log(a == b);
//false
//net rozne indeksy w komorce pamieci


//Что выведет этот код: 
alert( +"Infinity" );
//wynik: Infinity


//Верно ли сравнение: 
console.log("Ёжик" > "яблоко");
// wynik: false 
// taki wynik przez zakodowanie znakow i na ktorym miejscy znajdujesie w tablicy
// widocznie znak Ё jest mniejszy po znaczeniu od я w tablicy unicode 
// https://en.wikipedia.org/wiki/Cyrillic_(Unicode_block)


//Чему равно 
console.log(0 || "" || 2 || undefined || true || falsе);
// wynik: 2
// kiedy jest porownanie || lub
// wtedy od konczy prace na pierwszej prawdzie ktora znajdzie i zwraca znaczenie, czyli 2


//--------------------------------------------------------------------------------------------------

// Lesson - 28 - Получение элементов со страницы
// Знаете ли вы селекторы? - https://learn.javascript.ru/css-selectors
// Немного о псевдомассивах (массивоподобных объектах или коллекциях) - https://habr.com/ru/post/336136/

//getElementById(); - znaczy wez jeden id 
//wpisujem tylko jeden unikalny id
const box = document.getElementById('box');
console.log(box);

//UWAGA: metoda pobiera wszystkie elementy ze strony o podanej nazwie 
//i zapisuje ich do pseudo tablicy [], nawet jesli jest tylko jeden taki element na stronie 
const btns = document.getElementsByTagName('button');
console.log(btns);
//możliwości wycigania z tablicy potrzebne nam elementy np. 2 przycisk
//Metoda 1 - do zmiennej zapisujemy odrazu rugi element z tablicy
const btns2 = document.getElementsByTagName('button')[1];
console.log(btns2);
//Metoda 2 - do zmiennej zapisujemy najpierw szystkie elementy z tablicy, a potem wyswietlamy potrzebny nam element
const btns3 = document.getElementsByTagName('button');
console.log(btns3[2]);

//pobieramy wszystkie ELEMENTY przez wybraną klasę
const circles = document.getElementsByClassName('circle');
console.log(circles);

//Selektor - czesto wykorzystywany w zamian powyzszym
//querySelectorAll() - wspiera wszystko z css, klasy, #id, atrybuty, kombinacja wszystkie miedzy soba itd.
const hearts = document.querySelectorAll('.heart'); //podanie klasy juz z kropka
console.log(hearts);

//Selector posiada jeden metod forEach() - ktora bedzie zbierac wszystkie elementy z pseudotablicy zapisanej do zmiennej
hearts.forEach(item => {
    console.log(item);
});

//Ten selektor wyswietla tylko pierwszy element spotkany na stronie
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
const oneDiv = document.querySelector('div');
console.log(oneDiv);

//--------------------------------------------------------------------------------------------------


//Lesson 29 - Действия с элементами на странице
//Can I use - https://caniuse.com/

//Pobieramy elementy ze strony z którymi będziemy pracować i zapisujemy do zmiennych
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

//Zmiana stylów róznych elementów na stronie

//zobaczymy co mozemy zrobic z tym objektem
//console.dir(box); // sprawdzamy w przegliadarce rozne metody

//dodaje do objektow na stronie swoje style
//wszystkie doane style beda inline style(najwyzszy priorytet wykonania) 
// czyli dodaja sie bezposrednio do kodu html jako np. style="color:blue; background-color:#000000"

// znaczenia dla stylow musza byc zapisane jako string w ''

//Metoda 1 - osobne dodanie stylów
//nazwaZmiennej.style.nazwaStylu = 'znaczenie';
//lub
//nazwaZmiennej[indekst w tablicy].style.nazwaStylu = 'znaczenie';

//Nazwy stylów zapisane z tą metodą powinne być bez myslnika '-', tylko w formacie camleCase
//czyli nie background-color, a backgroundColor

box.style.backgroundColor = 'blue'; 
box.style.width = '500px'; //zapisac dokladnie jak w css, czyli 500px, a nie prosto 500

btns[1].style.borderRadius = '100%'; //zmieniamy drugi przycisk na stronie
circles[0].style.backgroundColor = 'red';
// nie zapisywac jak ponizej, bo twedy my odlolujemy sie do tablicy[], a nie do elemntu i nie bedzie dzialac
// circles.style.backgroundColor = 'red';


//Metoda 2 - nadanie odrazu wszystkich stylow ciagiem jak w CSS 
// nazwaZmiennej.style.cssText = '' lub ``
//tutaj już format nie camleCase a taki jak w css
box.style.cssText = 'background-color: blue; width:500px;';


//Cykly - zadko wykorzystywane poniewaz jest metoda forEach dla wlasciwosci nazwaZmiennej.querySelectorAll('nazwa w css')
//Tworzymy cykl zeby przejsc po elemntach w tablicy i dodac jakis styl
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

//Metoda forEach dla przejscia po tablicy i zmianie stylu dla wybranych elementów
//w srodek forEach(wstawiemy zawsze callback funkcje)
hearts.forEach(item =>{
        item.style.backgroundColor = 'blue';
});


// Metody dla pracy z elementami strony
// Tworzymy elementy 
// Metoda - document.createElement('nazwa elementu na stronie');
const div = document.createElement('div'); // tworzy element tylko w srodku js pliku

// Tak samo mozemy stworzyc - текстовые узлы(Node, czyli texkstowa Noda)
// document.createTextNode('Text'); - rzeadko wykorzystywany
// const text = document.createTextNode('Tutaj bylem');

// Właściwość która jest bardzo popularna do pracy z elementami na stronie: 
// classList()
// nazwaZmiennej.classList.nazwaMetody('np. nazwaKlasy');
// Możliwości: dodawanie classList.add, usunięcie, sprawdzenie czy coś jest w środku, a nawet sprawdzenie ilości przypisanych klas do elementa 
div.classList.add('black');

// Wstawiania/usuwanie elementow na stronie
// w DOM bierzemy tag <rodzica> w który bedziemy wstawiac nasz element

// 1
// metoda .append(); - wstawia element na koniec w wybranym rodzicu
// jest jeszcze appendChild() - ale jest przestarzaly

document.body.append(div); //element pojawi sie na koncu w tegu body

// Można czesto zobaczyc jak na poczatku pobierany jest element, a potem odrazu wstawiany gdzies indziej
// bez zapisawania do zmiennej, jesli wiecej juz nie planuemy dzialac z ty, elementem

// document.querySelector('.wrapper').append(div);

//2
// wrapper.append(div); //wstawi element na koncu w rodzicu
// wrapper.prepend(div); //wstawi element na poczatek w wybranym rodzicu

//3
// hearts[0].before(div); //wstawiamy PRZED konkretnym elementem w wybranym rodzicu
// wrapper.insertBefore(div, hearts[1]); //stara wersja zapisu

//4
// hearts[0].after(div);  //wstawiamy PO konkretnym elemencie w wybranym rodzicu

//5
// circles[0].remove(); //usuwamy konkretny element z tablicy circles
// wrapper.removeChild(hearts[1]);

//6
// hearts[0].replaceWith(circles[0]);  //zamieniamy konkretny element na inny konkretny element z naszych tablic gdzie sa zaciagniete elementy ze strony
// wrapper.replaceChilde(circles[0], hearts[0]); //stara wersja


// Dynamiczne dodawanie wsrodek bloku informacji
        // roznica w metodach polega na bezpieczenstwu
        // w jeden mozna wstawic kod a w drugi tylko tekst, 
        // i wszystko zalezy od zadania co np. chcemy dostac od uzytkownika
        // innerHTML pozwala dodawac w srodek i tekst i tagi html
div.innerHTML = "<h1>Hello world</h1>";

        //textContent pozwala dowac tylko tekst
// div.textContent = "Hello";

        // Jak wstawić kawałek kodu przed lub po tegu 
div.insertAdjacentHTML('afterbegin', '<h2 style="background-color: #cfcfcf;">Hello</h2>');
// nazwaZmiennej.insertAdjacentHTML('WlasciwoscZponirzszejListy', 'kod html ktory chcemy dodac');
//Lista wlasciwosci - wstawic dane html:
// beforebegin - z zewnatrz PRZED ELEMENTEM w naszym przypadku div z klasa .black 
// beforeend - z zewnatrz tylko PO ZAKONCZENIU ELEMENTU tiv
// afterbegin - NA POCZATKU tylko w SRODKU ELEMENTU div 
// afterend - NA KONCU ELEMENTU tylko w SRODKU ELEMNTU div


//--------------------------------------------------------------------------------------------------


// Lesson 30 - Zadanie ver1 
// patrz plik project (w pliku juz beda nowe modyfikowane wersje, dlatego mozna skopjowac ponizszy kod i wstawic
// zeby zobaczyc jak bylo na poczatku)

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelectorAll('.promo__adv img'),
      promoBg = document.getElementsByClassName('promo__bg'),
      genres = document.getElementsByClassName('promo__genre'),
      filmList = document.querySelectorAll('.promo__interactive-item');
      
//console.log(filmList);

//1 Usunincie banerow reklamowych ze strony
ads.forEach(item => {
    item.remove();
});


// Inny zapis takiej samej funkcji:
// ads.forEach(function (item) {
//     item.remove();
// });


//2  zmiana napisu komedia na drama
genres[0].textContent = 'Drama';

//3 zamiana baneru na inny
//ver 1
//promoBg[0].style.cssText = 'background-image:url(../project/img/bg.jpg)';

//ver 2
promoBg[0].style.backgroundImage = 'url("../project/img/bg.jpg")';

//5 sortujemy nazwy filmow,
movieDB.movies.sort();

//4 usuwamy listy filmow statycznych dodanych przez html z bloku
//wersja nauczyciela
filmList.innerHtml = ""; //zamienia to co jest w zmiennej na pustey element

//dodajemy filmy dynamicznie z powyzszej tablicy oraz dodajemy numeracje
movieDB.movies.forEach((film, i) => {
    filmList.innerHtml += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});

//moja wersja, tez dziala
// for(let i = 0; i < movieDB.movies.length; i++){
//     filmList[i].insertAdjacentHTML('beforebegin', `<li class="promo__interactive-item">${i+1}. ${movieDB.movies[i]}<div class="delete"></div></li>`);
//     filmList[i].remove();
// }



//--------------------------------------------------------------------------------------------------
// patrz folder: preview -> file js
// Lesson 31 - События и их обработчики
// Простой список событий - https://oddler.ru/blog/i63
// Справочник по событиям - https://developer.mozilla.org/ru/docs/Web/Events
// addEventListener() - https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
// Обьект собития - https://developer.mozilla.org/ru/docs/Web/API/Event
// removeEventListener() - https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener

// События - это сигнал от браузера что чтото у нас призешлоб это:
// клик, двойной клик, прокрутка колесека миши, нажатие клавиши и тд.
// Шаблон такой:
// Собития по стороне пользьвотеля (кли на что-то) -> запускается функция котороя обрабатывает собитие, например отправляет даные в базу
// Собития в джаваскрипте выполняютьсяв порядке очереди

const btn = document.querySelector('button'), 
      btns = document.querySelectorAll('button'),      
      overlay = document.querySelector('.overlay');

// В джаваскрипте всего 3 способа назначить обработчика событий
// 
// 1.(Почти никогда не используеться)
// Использовать html атрибут кторый записуеться в верстке html 
// <button onclick="alert('Click')" id="btn" >Нажми меня</button>
//
// 2. (Почти никогда не используеться)
// Использовать свойство DOM дерева для использование события

 //birzemy selector button z html
// btn.onclick = function() {  //dodajemy zdarzenie onclick i funkcje która wykona się dokładnie po kliku elemntu
//     alert('Click');
// };
// malo bezpieczny bo po wykonaniu zawsze istnieje, 
// jesli dublowac kod i wyswietlic Second klik, to zadziala tylko ostatni zdubluwoany kod, co moze uszkodzic funkcjonalnosc projektu

// 3. Metoda (Najbardzie wykorzystywana)

// .addEventListener('nazwa zdarzenia wybrac z istaniajacych', callback funkcja ktora bedzie obrabiac zdarzenie); - sledzi za elmentami
// btn.addEventListener('click', () =>{
//     alert('Click');
// });
// bedzie dzialac i pierszy Click i Second Clik
// btn.addEventListener('click', () =>{
//     alert('Second Click');
// });

// dodajemy zdarzenie mouseenter - nakierowanie stralki na przycisk
// event lub skrocona e - argument dla callback funkcji jako pierwszy argument(nazwa moze byc dowolna)
// jesli potrzebujemy jeszcze jakis argument do funkcji który naprzyklad bedzie pobieral tekxst od uzytkownika, to zapisujemy na drugim miejscu, a pierwszym zawsze bedzie objekt zdazenia
// btn.addEventListener('mouseenter', (e) =>{
//     console.log(e.target); //wyswietli w konsoli element w calosci z ktorym mozna dalej pracowac
//     e.target.remove(); //np usunac ze strony
// });
// jesli skopjowac i wstawic takie same zdarzenie jak wyzej to beda to dwa roznych zdazenia
// dlatego zeby USUNAC potrzebne nam zdarzenie, musimy jego najpierw zapisac do zmiennej 
// const deleteElement = (e) => {
//     e.target.remove();
// };


// USUWANIE ZDAZEN
// .removeEventListener('nazwa zdarzenia z istniajacych', nazwa zmiennej gdzie jest funkcja ktora usuwa element);
// btn.removeEventListener('mouseenter', deleteElement); //deleteElement bez () na koncu, bo tedy my tylko linkujemy do niej a nie wylolamy.

// Usuwamy zdazenie z przycisku po tym jak zostanie raz wylowane zdazenie
// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('mouseenter');
//     }};


// СПЛЫТИЕ СОБЫТИЙ, не путать со сплитием переменных
// это когда срабатывает событие сначала на вложеном елементе, потм на родителе если он у него есть, а потом выше по иерархии в дереве DOM 
// <div class="overlay">  - здесь присутвуствует событие 
//        <button id="btn" >Нажми меня</button> - и здесь
//  </div>
// сначала сработает событие то что в середине(кнопка) а дальше вверх по иерархии DOM сработает следуещее тоесть клас оверлай.
const deleteElement = (e) => {
    //посмотрим в консоли работу события
    console.log(e.target); //выводит события, часто используюется
    //console.log(e.currentTarget); //выводит события всплывающие попорядку, редко используеться
    console.log(e.type); //выводит назву сработающего событияб тоесть mouseenter - наведения мыши
};
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// САМЫЙ ПРАВИЛЬНЫЙ СПОСОБ назначать обработчик событий когда нужно поставить его сразу на несколько елементов в коде
btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true}); //{once: true} на конце - это алтернатива методе removeEventListener(); 
    // чтобы не писать конструкции как выше, а только передать как опции и отменить сразу действие по его использовании
    // иногда в коде можна встетить как третий аргуммент - false (в вверхнем методе), что значит что мы не передаем опции 
});
// Отмена стандартных событий в браузере
// например: клик на сылку, выдиление текста и так далее
// .preventDefault(); - metoda do odmiany zdazen w przegliadarce
const link = document.querySelector('a'); //pobieramy link z ktorym bedziemy dalej dzialac
// usuwamy standardowe zdazenie w przegliadarce co do linku, czyli nie bedziemy po nim przechodzic jak w niego klikniemy
// czesto wykorzystywane kiedy programisci buduja aplikacje i nie chca za kazdym razem gdzies przechodzic dalej, atylko sprawdzaja funkcjonalnosc produktu
link.addEventListener('click', function(event){
    event.preventDefault(); //zawsze na poczatku w kodzie

    console.log(event.target); //zobaczy w kosoli co sie wydazy
});


//--------------------------------------------------------------------------------------------------
// Lesson 32 - Навигация по DOM - элементам, data-атрибуты, преимущество for/of
// Использование data-* атрибутов - https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Using_data_attributes

// jest pomocne przy implementacji kodu js w html

// dostaniemy body albo head
// console.log(document.body);
// console.log(document.head);

// dostajemy caly html
// console.log(document.documentElement);


//.childNodes - metoda pozwala dostac wszystkie nody(wezle) które znajduja sie w wybranym elemntu(rodzicu)
console.log(document.body.childNodes); // wyswietli wszystkie elementy dom i dom-nody tekstowe w htmlu
// czyli idzie DOM element <body> potem перенос строки text (это и есть тестовый дом узел(нода)), потом идет дом елемент, и тд.

// разница между дом елементом, и дом узлом - все на странице это нода(узел) но не каждая нода есть елементом
// если разбирать глубже то: <ul><li>1</li></ul> - то ul - есть дом лементом - потом перенос строки текстова дом-нода, 
// потом дом елемент <li>, потом текстова дом-нода 1.


// Własciwości: 
// Dostać Pierwsze lub Ostatni child w srodku rodzica
// zwroc uwage ze tutaj zawsze bierzemy od rodzica body
console.log(document.body.firstChild);  // tekstowa noda
console.log(document.body.firstElementChild);  // analog do gornej metody, tylko ze dostaje sie zawszesze element, pomija tekstowe nody
console.log(document.body.lastChild);  // element noda
console.log(document.body.lastElementChild); // analog do gornej metody, tylko ze dostaje sie zawszesze element, pomija tekstowe nody

// komendy pozwalajacy brac elementy od roznych rodzicow
// KOMENDY żeby dostać rodzica, sąsiadów, dzieci elementa w html
console.log(document.querySelector('#current').parentNode); //.parentNode - pozwoli dostac rodzica dla elementa który w niego jest zapisany #current
console.log(document.querySelector('#current').parentElement); // .parentElement - tutaj juz na 100% dostaniemy element node z html a nie tekstowa node
console.log(document.querySelector('#current').parentNode.parentNode); // .parentNode.parentNode - pozwoli od elementa pojsc w gore i dostac rodzica na 2 poziomie

// DATA-ATRYBUTY w kodzie html
// syntaksys: data-+nazwa ktora wymeslamy, np. co bedzie robil albo co zawiera
// np. data-current jest wlozony w tegu html
// data-current="3" - moze zawierac jakies znaczenie
// data-current - jesli bez znaczenia, bedzie prosto boolengowe znaczenia true

//zeby dostac atrybut html, musimy podac w [w kwadratowych nawiasach]
console.log(document.querySelector('[data-current="3"').nextSibling); // .nextSibling - dostac nastepna node, dostaniemy tekstowa node
console.log(document.querySelector('[data-current="3"').previousSibling); // .previousSibling - dostac poprzednia node, tez bedzie tekstowa noda
console.log(document.querySelector('[data-current="3"').nextElementSibling); // .nextElementSibling - dostac nastepny element noda, ten metod juz nie zwroci tekstowej nody, bo zoriontowany na elementy 

// Wszystkie elemnty nody ze strony bez tekstowych node
// konstrukcja for of pomoze przejsc po drzewu DOM i zebrac tylko elementy nody, be text node
for (let node of document.body.childNodes){
    if (node.nodeName == '#text'){  //#text - jest to nazwa tekstowej nody, nie wymyslona, tylko podana w wlasciwosciac: nodeName: "#text" - mozna zobaczyc otwierajac tekstowa node w konsoli przegliadarki
        continue;
    }
    console.log(node);
}


//--------------------------------------------------------------------------------------------------
// Lesson - 33
/* 
Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту
 */

'use strict';

// DOMContentLoaded + callback funkcja -  свойство отвечает за запуск всех скриптов 
// после того как построилась ДОМ структура
// остальные картинки, скрипты, стили будут подгружатся потом в фоновом режиме, но для нашого скрипта главное чтоб ДОМ 
// елементы уже были загружены перед тем как он начнет выполнятся браузером
// Помещаем наш весь джаваскрипт в ето событие 
document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const ads = document.querySelectorAll('.promo__adv img'),
          promoBg = document.querySelector('.promo__bg'),
          genres = document.querySelector('.promo__genre'),
          filmList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addingInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    
        //   console.log(filmList, addForm, addingInput);
    // submit - sledzi czy przycisk zostal wcisnienty
    addForm.addEventListener('submit', (event) => {
        // usuwa domyslne zachowanie dla przeglidarki, 
        // czyli po wcisnienciu przycisku strona nie bedzie sie ponownie ladowac
        event.preventDefault(); 

        let newFilm = addingInput.value;
        // sprawdamy czy czekbox zostal zaznaczony przez uzytkownika 
        // za pomoca metody .checked
        const favorite = checkbox.checked;

        // Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"
        // wykonasie tylko jesli zmienna favorite ma cos tam zapisane znaczy ze ma true
        if (favorite){
            console.log("Добавляем любимый фильм");
        }

        //sprawdzamy czy newFilm zawiera jakis film true or false
        if (newFilm) {

             // jesli nazwa dluzsza niz 21 sy,bol to usuwamy ogon i dodajemy ...
            if (newFilm.length > 21) {
               
                //Sposob 1
                //newFilm = newFilm.slice(0, 21) + '...';
                
                //Sposob bardziej perspektywny z wykorzystaniem interpolacji `${}`
                newFilm = `${newFilm.slice(0, 21)}...`;
            }

            // dodajemy film do tablicy po wprowadzeniu przez uzytkownika
            movieDB.movies.push(newFilm);
            //sortujemy filmy wyzywajac funkcje
            sortArr(movieDB.movies);
            // tworzymy nowa tablice z filmami wyzywajc funkcje
            createMovieList(movieDB.movies, filmList);
        }

        event.target.reset();
    });
          
    
    //1 Usuniecie banerow reklamowych ze strony
    // zeby funcka byla bardziej niezalezna
    // bedziemy przyjmowac argument arr
    // dzialac w srodku z argumentem,
    // nizeli przyjmowac odrazu jakis element ze strony bezposrednio
    // dlatego wyzywamy funkcje na koncu i przekazujemy ergument ktory chcemy 
    const deleteAds = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
    
        //2  zmiana napisu komedia na drama
        genres.textContent = 'Drama';
        
        //3 zamiana baneru na inny
        //ver 1
        //promoBg[0].style.cssText = 'background-image:url(../project/img/bg.jpg)';
        
        //ver 2
        promoBg.style.backgroundImage = 'url("../project/img/bg.jpg")';
        
    };

    const sortArr = (arr) => {
        arr.sort();
    };
  
    //dodajemy filmy dynamicznie z powyzszej tablicy oraz dodajemy numeracje 
    // ta funkcje bedziemy wykorzystywac w addForm na pocztku kodu
    function createMovieList(films, parent) {
        //wyciscimy blok przed dodaniem filmow
        parent.innerHTML = "";
        //sortujemy filmy ktore dostalismy
        sortArr(films);
        // dodaje filmy po kolei
        films.forEach((film, i) => {
            // dodajemy filmy po kolei
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        // usuwamy film z listy po kliknieciu przycisku delete
        // zbieramy wszystkie przyciski do tablicy i liczymy pod jakim numerem        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            // sledzimy moment wciskania na przycisk
            btn.addEventListener('click', () => {
                // usuwamy rodzica przycisku, czyli element <li> z html
                btn.parentElement.remove();
                // usuwamy z tablicy 1 konkretny element pod liczba przycisku ktora wyliczywa powyzsza funkcja
                movieDB.movies.splice(i, 1);
                // korzystamy z powyzszej funkcji zeby ponownie sortowac po kolei filmy po usunieciu
                createMovieList(movieDB.movies, filmList);  // РЕКУРСИЯ - когда функция вызывает сама себя в середине           
            });
            
        });
    }


    // deleteFilms(movieDB.movies, filmList);
    deleteAds(ads);
    makeChanges();
    // передаем актульный список фильмов с таблицы и второй аргумент это помещаем список на страницу
    createMovieList(movieDB.movies, filmList);
    
});


//--------------------------------------------------------------------------------------------------
// Lesson 34 - События на мобильных устройствах

// Touch события на javascript, мультитач - реализация -  http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya
// Заставьте сайт работать на сенсорных устройствах - https://habr.com/ru/company/sibirix/blog/227175/
// HammerJS - https://hammerjs.github.io/  - gotowe roziwazania dla tworzenia dotykowych elementow na stronie pod dotykowe urzadzenia

// TABY - znajduja sie w mobilnych przegliadarkach na dotykowych urzadzeniach. 
// Sa ta wlasciwosci ktore monitoruja ekran i sprawdzaja kiedy, gdzie i jak uzytkownik dotyka palcem ekran oraz ile palcow wykorzystuje (multituch).


// Zdarzenia (event)
// touchstart  - zaczyna dzialac w momencie dotyku do elementa
// touchmove - licze staly dotyk palca od elementa, jesli prowadzic palcem po lemencie.
// touchend - w momencie kiedy zabieramy palec od elemntu, idzie rejestracja tego zdarzenia
// touchenter - kiedy prowadzimy palcem po ekranu, i naskoczymy na element ktory jest na ekranie i ma podlaczone to zdarzenia. Wtedy mozna zarejestrowac ze palec byl w granicach danego elementu.
// touchleave - kiedy palec prowadzony po lemencie nie odrywajac wyszedl za jego granicy, wtedy nastepuje rejestracja zdarzenia
// touchcancel - zdarze sie wtedy kiedy punkt dotyku palca juz wicej nie jest widoczny, nie jest rejestrowany. Np. mozemy prowadzic palcem i on wyjdzie za przedzial przegliadarki wtedy zadziala touchcancel

// Wlasciwosci - glowne pod czas pracy z dotykowymi urzedzeniami
// touches - ile palcow zostalo w interakcji z EKRANEM
// targetTouches - ile palcow w iterakcji z KONKRETNYM ELEMENTEM
// changedTouches - lista palcow ktora uczestniczy w danym zdarzeniu, nawet jesli jakis palec zabierzemy to lista wyswietli dalej wszystkie palcy ktory byly w dotyku z lementem

// dodajemy DOMContentLoaded który będzie sledzil zeby uruchomic skrypt jak juz beda sformowane wszystkie html nody
window.addEventListener('DOMContentLoaded', () =>{
    // dostajemy elment z html ktorym bedziemy pracowac
    const box = document.querySelector('.box');

    // dodajemy zdazenie do elementu
    box.addEventListener('touchstart', (e) => {
        // dodatkowo, rekomendowane jest usuwac standardowe dzialania przegliadark na element 
        // przed ropoczenciem dzialania z naszym elmentem
        e.preventDefault();

        // wyswietlimy start w momecie jak bedzie klik na elmenent
        // dzialac bedzie tylko w trybie przegliadaki mobile view, bo myszke ono nie bedzie sledzic tylko dotyk 
        console.log('Start');
        
        // wyswietli liczbe - ile palcow zostalo dotknietych do danego elemnta
        console.log(e.touches);
        // tak jak wyzej tylko ba inna strukture, takze sledzi ile palcow zostalo wykorzystano przez uzytkownika
        // w stosunku do elementa
        console.log(e.targetTouches);
        
    });

    // trzeba zacisnac myszke w trybie mobile view i prowadzic po elemencie, wtedy zaczen dzialac zdarzenie
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    // zdarzenie touchmove w polaczeniu z wlasciowoscia .targetTouches[0] i pageX
    // bedzie sledzic pierwszy palec i kiedy jego koordynaty na ekranie kiedy 
    // bedzie on sie zacisnienty ruchac sie w przedziale elementu box
    // koordynaty takie mozna wykorzystac do tego ze jesli zajde uzytkownik za jakies koordynaty to trzeba np. zmienic slader
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // zadziala jak zabierzemy palec z elementu
    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});


//--------------------------------------------------------------------------------------------------
// Lesson 35. Async, defer, динамические скрипты

// dodanie w html do scryptu atrybut
// async - kazdy skript z ta wlasciwoscia bedzie wykonywany nie zaleznie od kolei podlaczenia w html,
//         laduje sie jednoczesnie z html i wykonuje sie odrazu jak zostal zaladowany
//         takze nie czeka dopoki zaladuje sie DOM elementy 
//         Musimy byc pewni nadajac atrybut async, ze taki scrypt nie powiazany z DOM elementami, bo inaczej beda bledy przy ladowaniu
//         takze nie powinien byc powiazany z innymi skryptami, bo moze sie zalodowac szybciej niz te z ktorych korzysta
//         <script async src="script.js"></script>

// defer - kazdy script z ta wlasciwoscia bedzie wykonywany po kolei,
//         takze bedzie ladowany niewidocznie ale jednoczesnie z html, a nie po kolei 
//         i wykonany w momencie jak sam sie zaladuje i wtedy poczeka na DOM elementy i tylko potem wykonan sie.
//         <script defer src="script.js"></script>

const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src){
    // Sposob dodania dynamicznego skryptu na stronie 
    // tworzymy nowy tag z nazwa script
    const tag = document.createElement('script');
    // atrybut src = 'sciezka do podlaczenia scryptu', tutaj dostajemy ja dynamiczne pod czas wywolania funkcji nizej
    tag.src = src;
    // dynamiczne dodane scrypty zachowuja sie standardowo jak przy dodaniu atrybuta async, czyli
    // zaladowali sie po kolei i odrazu wykonuja sie kto szybcie zaladow sie nie czekaja na nikogo
    // w zadkich przypadkach musimy zmienic to zachowanie, dlatego musimy ustawic:
    tag.async = false; // co spowoduje wykonanie skrytpuw jeden po drugim
    // zamieszczamy nowy scrypt w body metoda append, ktora dodaje na koniec elemntu, czyli na koniec body dodaje nasz script
    document.body.append(tag); // dodawany scrypt zancznie sie ladowac tylko wtedy jak zostanie dodany do dokumentu na koncu body, czyli DOM elemnty juz beda zbudowane
}

loadScript('test.js');
loadScript('some.js');

//--------------------------------------------------------------------------------------------------
// Lesson 36 - Nowy modul, opis

//--------------------------------------------------------------------------------------------------
// Lesson 37 - ClassList и делегирование событий
//
// classList - https://developer.mozilla.org/ru/docs/Web/API/Element/classList
// Element.matches() https://developer.mozilla.org/ru/docs/Web/API/Element/matches
// Делегирование событий 1 - https://learn.javascript.ru/event-delegation
// Делегирование событий 2 - https://medium.com/@stasonmars/%D0%B4%D0%B5%D0%BB%D0%B5%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B8%CC%86-%D0%B2-javascript-d91cbdd8916a
// 

const btns = document.querySelectorAll('button');

// sprawdazmy ile pierwszy przycisk ma klas np. 2
console.log(btns[0].classList.length);

// Metody 
// dostajemy z pierwszego przycisku pierwszy jego klas,
console.log(btns[0].classList.item(0)); // i wyswietlamy czy idalo sie w konsoli

// dodajemy dynamicznie dwa klasy do pierwsze przycisku
btns[0].classList.add('red','black');

// usuwamy klas z pierwszego przycisku 
btns[0].classList.remove('blue');

// Przelacznik
// toggle() - przelacznik, jesli istnieje klasa, to on usunie ja, jesli nie istnieje to doda
btns[0].classList.toggle('black'); // usunie black, bo my wyzej ta klase dodalismy

// sprawdzamy czy istnieje class ktorego potrzebujemy
// constains() zwraca false lub znaczenie klasu ktore szukamy
// najpierw dodamy klass do 2 przycisku i sprawdzimy w konsoli czy bedzie klass
btns[1].classList.add('red');
if (btns[1].classList.contains('red')){
    console.log('red');
}

// Warunek 
// dodajemy dla trzeciego przycisku sledzenia klikniecia
// jesli zostanie klikniety 3 przycisk to zadziala sprawdzenie klasy, czy taka istnieje dla 4 przycisku
// jesli nie istnieje to dodamy ja
// jesli istnieje to usuniemy ja po kliknieciu
// rezultat - dynamiczne dodanie/usuniecie koloru na przycisku, 
// Sposób 1
btns[2].addEventListener('click', () => {
   if (!btns[3].classList.contains('red')){ // za pomoca operatora ! sprawdzimy czy przycisk nie ma klasy red, jesli nie ma to dodamy
       btns[3].classList.add('red');
   } else{
       btns[3].classList.remove('red'); // jesli ma klase to usuwamy
   }
});
// Wybrania sposobu zalezy od tego co bedzie robione
// czasami samego toggle w wiekszych projektach nie wystarczy dlatego moze byc lepszym rozwiazaniem  Sposob 1 
// Sposób 2 - to samo co i powyzszy warynek zrobi
btns[2].addEventListener('click', () => {
    btns[5].classList.toggle('red');
 });

 // Stara metoda - className z ktorej lepiej nie korzystac
 // wyswietli wszystkie klasy dla 1 przycisku, ale pracowac z nimi bedzie nie przyjemnie
 // bo korzystac trzeba z roznych dodatkowych metod zeby wyciagnac lub zmienic klase, dlatego lepiej korzystac z powyzszych nowych rozwiazan
 console.log(btns[0].className);


// _____________________
// делегирование событий - dynamiczne delegowanie wydarzeń dla nowych elemntow  w tym samym bloku
// delegowanie wydarzeń - z rodzica na jego dzieci, zeby mozna bylo automatycznie poczepic ta sama 
// funkcjonalnosc na nowo powstale elementy jesli oni spewniaja warunek ktory stworzylismy
// doastejmy block wrapper z html
const wrapper = document.querySelector('.btn-block');

// podlaczamy sledzenie przez klik w obszarze wrappera
wrapper.addEventListener('click', (event) => {
    // sprawdzimy wszytkie dostepne wlasciwosci dla elmenta ktory nam potrzebny wrapper-ze np. przycisk, bo znim dalej bedziemy pracowac
    // console.dir(event.target);
    //
    // Jak juz wiemy jakie nam potrzebne wlasciwosci to sprawdzimy czy poprawnie w nich trafiamy pod czas kliku
    // event.target - sprawdzamy jego istnienie, bo nie wszystkie tagi beda miec target, np <br> przeniesienie wierszu
    // jesli istnieje to takze sprawdzamy konkretna wlasciwosc, zeby trafic dokladnie w przestrzeni wrapper w sam przycisk, a nie gdzies w obok w przestrzeni wrapper
    // dlatego bierzemy tagName i jego nazwe dla elementu ktora uzyskalismy wyzej kiedy sprawdzalismy element przed dir
    
    // Sposob 1
    // if (event.target && event.target.tagName == "BUTTON") {  //Google sam poleca tego sie dotrzymywac
    //     console.log('Hello');
    // }
    
    // Sposob 2 - uwielbiaja pracownicy Google
    // metod matches() - sprawdzamy czy jest element w kodzie ktory bedzie podobny do tego co podalismy
    if (event.target && event.target.matches('button.red')) {  // podajemy konkretne selktory ktory nas interesuja 
        console.log('Hello'); // wyswietlamy Hello tylko jesli jest klas red
    }
});


// Blad -tak robic nie mozna, bo jesli dodamy nowy przycisk nizej w kodzie to on bedzie dzialal jak inni bo ten kod nic nie wie o nowym przycisku,
// zeby wszytko dzialalo trzeba robic jak wyzej 

// btns.forEach(btn=> {
//     btn.addEventListener('click', () => {
//        console.log('Hello');
//     });
// });

// tworzymy nowy przycisk na stronie
// dodajemy do elementu klass
// pomieszczamy jego w wrapper na sam koniec, metoda append();
// i zobaczymy ze przycisk ma te same funkcje co i inni, wyswietla Hello jesli na niego kliknac i sprawdzic w konsoli
// czyli delegowania dziala
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);



//--------------------------------------------------------------------------------------------------
// Lesson 38 - Projekt Food - Czesc 1
// Tworzenia funkcjalnosci strony

// Owiniemy wszytko w event DOMContentLoaded zeby script poczekal na zalodanie sie elementow DOM 
window.addEventListener('DOMContentLoaded', () => {
    //pobieramy wszystkie potrzebne elementy z ktorymi bedziemy pracowac
    const tabsParent = document.querySelector('.tabheader__items'), // pobieramy konter gdzie sa wszystkie taby
          tabs = tabsParent.querySelectorAll('.tabheader__item'), // pobieramy wszystkie taby slidera
          tabsContent = document.querySelectorAll('.tabcontent'); // pobieramy wszystkie opisy dla tabow
          
    // funkcja ktora bedzie chowac chowac taby
    function hideTabContent() {
        // callback funkcja forEach bedzie sprawdzac po kolei pobrany tabe i usuwac jesli znajdzie ponizsze klasy z tabow
        tabsContent.forEach(item => {
             // item.style.display = 'none';
             item.classList.add('hide'); // dodajemy klas zdefiniowany w css ktory ma ustawienia display:none;
             item.classList.remove('show', 'fade'); // usuwamy klas show ktory pokazuje tab i fade ktory dodaje animacje pod czas pokazywania
        });
        // usuwa z tabow klas css ktory podwswietla aktywny tab 
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    
    // funkcja pokaze taby
    // i = 0 znaczy ze przyjmuje znaczenie poczatkowe 0
    function showTabContent(i = 0) {
        //tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade'); // doda potrzebne klasy do tabu zeby jego wyswietlic
        tabsContent[i].classList.remove('hide'); // usunie klas ktory blokuje wyswietlanie
        tabs[i].classList.add('tabheader__item_active'); // doda klas css ktory odpowiada za podswietlenia aktywnego tabu
    }

    // wywolujemy powyzsze funkcje
    hideTabContent();
    showTabContent();

    // dodajemy sledzenia klikniecia dla bloku tabheader__items gdzie znajduja sie  wszystkie taby
    tabsParent.addEventListener('click', (event) => {
        // zapisujemy do zmiennej target dla elemntu w ktory kliknelismy
        // przyda sie dla sprawdzenia czy uzytkownik kliknow dokladnie w ten element w przestrzeni tabheader__items z ktorymi skrypt powinien dzialac
        const target = event.target; 
        
        // sprawdzamy czy ten elemnt co nam trzeba zostal zapisany target
        if (target && target.classList.contains('tabheader__item')) { //sprawdzamy zeby zawieral klas tabheader__item
            tabs.forEach((item, i) => {  // przechodzimy po kazdym elemncie, a takze zapisujemy liczbe dla i po kolei
                if (target == item) { // szykamy element target ktory bedzie rownac sie z naszej tablicy ktore przeliterujemy, jak bedzie true
                    hideTabContent(); // to uruchamiamy nasze powyzsze funkcje, schowac tab
                    showTabContent(i); // wyswietlic tab z numerem i ktory przekazujemy do funkcji showTabContent
                }
            });
        }
    });

});



//--------------------------------------------------------------------------------------------------
// Lesson 39 - Скрипты и время их выполнения. 
// setTimeout - ile czasu poczekac zeby wykonac kod
// setInterval - co jaki czas wykonywac kod
// clearInterval - przerwac i wycziscic wykonanie dla setInterval lub setTimeout
// JavaScript-анимации -  https://learn.javascript.ru/js-animation

// dostajemy przycisk z html
const btn = document.querySelector('.btn');
let timeIdThree, // oglaszamy nowe globalne zmienne gtore bedziemy wykorzystywac w srodku funkcji
    i = 0;

// setTimeout(1argument, 2argument) - 1 argument to co trzeba zrobic, 2 argument za ile czasu, jesli nie podac to bedzie natychmiast wykonane 
const timeIdOne = setTimeout(function() { // w srodku jako argument callback funkcja ktora zwroci slowo hello one
    console.log('Hello One'); 
}, 2000); // wyswietlic to co wykona funkcja po 2 sekundach w konsoli

// setTimeout(1 argument, 2 argument, 3 argument) 
const timeIdTwo = setTimeout(function(text) { // 1 argument funkcja ktora pobiera znaczenia z 3 argumentu w setTimeout
    console.log(text);
}, 3000, 'Hello Two'); // 2 argument 3000 - wykonac po 3 sekundach funkcje. 
// 3 argument to znaczenie ktore bedzie przeslane do 1 argumentu i wykonane w funkcji.


// do przycisku podlaczamy sledzenie zdazenia click
// btn.addEventListener('click', () => {
//     // const timeIdTree = setTimeout(logger, 2000);
//  // w zmiennej timeIdThree bedziemy zapisywac unikalny indentyfikator 
//  //ktory tworzy  setTimeout lub setInterval, zeby potem mozna bylo do niego odlowac sie i przerwac dzialanie funkcji
//     timeIdThree = setInterval(logger, 500); // po wcisnienciu przycisku na stronie, setInterval bedzie wykonywac funkcje logger co pol sekundy
// });

// tworzymy funkcje logger ktora bedzie wlaczana sie co pol sekundy przez powyzszy setInterval, jesli zostanie klikniety przycisk na stronie
// function logger () {
       // ustawiamy licznik zeby przerwac wykonanie interwalu w pewnym momencie, zeby nie bylo w nieskonczonosc
//     if (i === 3){ 
//         clearInterval(timeIdThree); // w srodek przekazujemy zmienna ktora posiada unikalny indentyfukator setInterval ktory musimy przerwac w dzialaniu
//     }
//     console.log('text'); // wyswietlamy 4 razy text, potem zadziala powyzszy warunek i wyczysci setInterval
//     i++; // powiekszamy licznik 
// }

// funkcja ktora moze dzialac w nieskonczonosc bo sama siebie przyjmuje i wykonuje
// ten zapis zawsze wykona funkcje w calosci, potem dokladnie ODCZEKA pol sekundy i znowu zacznie wykonanie
// jest to rozwiazanie lepsze od setInterval przy duzym skrypcie ktory ma sie wykonac w srodku niego, 
// bo jesli w setInterval znajdujesie ciezka funkcja ktora bedzie wykonywac sie dluzej niz setinterval ma odczekac
// zeby ponownie ja uruchomic, to on juz nie bedzie czekal pol sekundy tylko wlicze ich do czasu wykonania funkcji i zacznie uruchamiac ja odrazu bez odczekania
// UWAZAC NA TO

// po wykonaniu sie po odczekaniu pol sekundy funkcja log() i wyswietli w konsoli log
// potem nizej w zmienna id przekaze znowu funkcje log() i wykonanie za pol sekundy, po czym wyswietli hello i znowy przekaze siebie
// i tak bedzie czaly czas
// let id = setTimeout(function log(){ 
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);

// Tworzymy animacje niebieskiego kwadracika w bloku na stronie
// od momentu powstania css3 wszystkie animacje tworzone w css a nie w js bo jest latwiej,
// ten przyklad pokazuje ze jednak mozna tez tworzyc w js jak dawniej, ale sa tu takze duzo nie dorobien do idealnej animacji
function myAnimation() {
    // niebieski blok wyciagamy z html za pomoca jego klasy
    const elem = document.querySelector('.box');
    let pos = 0;  // lokalna zmienna ktora bedzie sie zmieniac dla uzyskania animacji, start od 0

    const id = setInterval(frame, 10);  // przekazujemy funkcje ktora ma byc wykonana po 0,1 sekundy po tym jak zostanie przycisk wcisnienty
    function frame() {
        if (pos == 300){  // warunek w ktorym moncie bedzie wyczyszczony proces wykonania setInterval
            clearInterval(id); // w id zapisany jest setInterval wlasnie tam mamy na niego wplyl, czyli stop wykonaniu
        } else { 
            pos++;  // zwiekszamy o 1
            // wykorzystujemy o 1 wieksza liczbe w dynamicznie zmianie stylow na stronie dla elemnta box
            // tutaj zaczyna sie ruch elemnta
            // bedzie sie powtazac 300 razy, az poki nie zostanie wyczyszczony setInterval przez powyzszy warunek
            elem.style.top = pos + 'px'; // odbicie elementa od swojego rodzica od gory o 1 px
            elem.style.left = pos + 'px'; // odbicie elementa od swojego rodzica z lewej strony o 1 px
        }
    }
}

btn.addEventListener('click', myAnimation); // podlaczamy do przycsiku sledzenie za klikiem na stronie i od odrazu wlaczamy funkcje animacji.



//--------------------------------------------------------------------------------------------------
// Lesson 40 - DATE - дата
//
// Дата - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
// Дата и время -  https://learn.javascript.ru/date

// Date() - jest objektem ktory ma w sobie rozne metody 
// mozna sprawdzac ile czasu pracuje jakas funkcja i na przyklad sprawdzic z inna funkcja
// mozemy wyliczac przedzial czasowy
// takze mozna wyswietlic jakas date lub tajmer zrobic na stronie, godzine 

// mozna wykorzystac do przechowywania np. godziny i daty zmiany jakiegos dokumentu (ten elemnt juz bardziej sie odnosi do node.js bo jest backendem, sam js nie umie pracowac z plikami)

// kazda data w javascript jest chroniona w milisekund nazywana timestemp
// milisekundy odliczaja sie z poczatku 1970 roku
// kazda date mozna transformowac w milisekundy a milisekundy w daty

// tworzymy nowa date i zapisujemy ja do zmiennej
const now = new Date('');
console.log(now);  // wynik: 2021-01-31T17:24:39.314Z - rok-miesiac-dzien (T это роздилитель как пробел) godzina:minuty:sekundy.milisekundy

const nowTwo = new Date('2021-01-31');  // mozemy przekazac odrazu argument do daty, np datu ze strony
console.log(nowTwo);  // 2021-01-31T00:00:00.000Z  - nasza data zapisala sie a godziny 0 bo nie byly ustawione

const nowThree = new Date(2021, 1, 31, 20, 55); // przekazujemy argumenty daty i godziny (dwa ostatnie)
console.log(nowThree);  // 2021-03-03T19:55:00.000Z -- wynik konsoli VIsualStudio
// Wed Mar 03 2021 20:55:00 GMT+0100 (czas środkowoeuropejski standardowy) - wynik przegliadarki Chrome
// trzeba pamietac ze VisualStudio korzysta z grinwicza, a przegliadarka z strefy czasowej środkowoeuropejski standardowy
// dlatego trzeba brac pod uwage strefy czasowe dla tego zeby uzyskac potrzebny nam czas

const nowFour = new Date(0); // 0 milisekund, czyli wyswietli poczatek daty z ktorego zaczyna sie liczba w javascript
console.log(nowFour);  // 1970-01-01T00:00:00.000Z

const nowFive = new Date(-7777777777); // jesli czhcemy dostac date ponizej 1970 roku, przekazujemy milisekundy z minusem
console.log(nowFive);  // 1969-10-02T23:30:22.223Z


// METODY DOSTAWANIA KOMPONENTOW DATY
// tylko popularny, ale ich jest wiecej

// 1.1 - GET-tery 
// pozwala na pobrania daty
const nowSix = new Date();
console.log(nowSix.getFullYear());  // 2021
console.log(nowSix.getMonth()); // wynik 0 - styczen 0 miesiac w programowaniu, liczany od 0
console.log(nowSix.getDate());  // 31 - dzien miesica
console.log(nowSix.getDay());  // 0 - niedziela, dni zaczynaja sie od niedzieli ktora ma zanczenia 0, i koncza sie na sobocie ze znaczeniem 6
console.log(nowSix.getHours()); //  18 - godzina brana z naszego lokalnego czasu
console.log(nowSix.getUTCHours()); // 17 - godzina po UTC, czyli +0, czasami moze byc potrzebna w projektach. Takze getUTC ma wszystkie inne znaczenia co prosty get
console.log(nowSix.getTimezoneOffset()); // -60 - roznica pomiedzy lokalna strefa czasowa i UTC, roznica z glowną strefą czasowa bedzie w minutach
console.log(nowSix.getTime());  // 1612115054379 - roznica w milisekundach ktora minela od 1970-01-01T00:00:00.000Z do momentu uruchomienia kodu.

const nowSeven = new Date(1612115054379); // liczba wzieta z powyzszego wyniku getTime()
console.log(nowSeven); // 2021-01-31T17:44:14.379Z - jesli powyzsza liczbe pomiescic w Date() to ono zwroci date konkretna od momentu 1970 


// 1.2 - SET-tery
// pozwala na ustawienia daty ktora potrzebujemy 
// wszystkie takie same metody jak wyzej tylko get zamieniamy na set
const nowEight = new Date(); 
console.log(nowEight.setHours(18)); // ustawiamy godziene na 18, a dodatkowo Date() jest pusta a znaczy ze ono pobierze nasza lokalna date, a godzie juz ustawi ktora my podajemy
console.log(nowEight); // console w visualcode zwrozi 17 godzine po standardowo patrzy na UTC czas, a w przegliadarce konsol zwroci 18 godzine bo patczy na czas lokalny

// 1.3 - PARSE
// metod Daty ktory przeksztawci na date to co my podalismy w nawisach
// Date.parse() wykorzystywany w sytuacjach kiedy dostajemy date w typie string a chcemy przeksztawic typ num 

// sposob bez metody parse()
const nowNine = new Date('2021-01-31'); // wynik bedzie z podana data

// sposob z metodą parse() przeksztawca string w num
new Date.parse('2021-01-31'); // taki sam wynik jak na gorze


// Benchmark-i
// Wyliczamy przedzial czasowy dzialnia skryptu z jednego momentu do drugiego
// najpierw tworzymy jedna terazniejsza date 
let start = new Date(); 

// potem wstawiamy fukcje lub cykl lub inny kod ktory chcemy przetestowac
for (let i = 0; i < 100000; i++){  // cykl bedzie wyswietlaw 100 000 tys znaczen
    let some = i ** 3; // ** operator podnoszenia, podnoszimy kazde znaczenie do 3 
    // i zapisujemy poprostu do miennej ktora nigdzie nie jest wykorzystywana dalej, potrebne tylko dla dla wykonania dzialnia na liczbach
}
// tworzymy druga date 
let end = new Date ();
// roznica miedzy pierwsza stworzona data i druga bedzie czas czas wykonania powyzszego skryptu.. kompilacja kodu idzie po kolei, dlatego jak stworzy pierwsza date, to dojdzie do kodu nizej i bedzie czekac az kod sie skompiluje i wtedy idzie dalej i tworzy druga date z nowa czasem.
alert(`Cykl skonczyl dzialanie za ${end - start} mm`);  // wynik: Cykl skonczyl dzialanie za 20 mm




//--------------------------------------------------------------------------------------------------
// Lesson 41 - Projekt Food - CZESC 2 
// Создаем таймер обратного отсчета на сайте
//
// Сокращенная запись объектов - https://alligator.io/js/object-property-shorthand-es6/

// TIMER
    
    // Alogorytm:
    // Powinna byc funkcja ktora bedzie ustawiac nasz timer
    // Funkcja ktora bedzie sprawdzac roznice miedzy data terazniesza u uzytkownika i koncowa data ktora my ustawiamy
    // Funkcja ktora bedzie uaktualniac czas timera: dni, godziny, minuty, sekundy

    // tworzyy date od ktorej bedziemy odliczac
    const deadline = '2021-02-08';

    // Tworzymy funkcje ktora bedzie sprawdzac roznice czasu ile zostalo do konca od terazniejszej daty i do konca
    // przyjmuje w siebie deadline i oblica aktualna godzine 
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), // najpierw wyliczymy ile milisekund czasu zostalo do konca daty od naszej daty
              // DNI - bierzemy cala ilosc milisikund 't' i dzielimy na milisekundy w jednym dniu (1000 milisekund * 60 i dostajemy ilosc milisekund w jednej minucie * 60 i dostajemy ilosc minut w jednej godzinie * 24 i dostajemy ilosc godzin w jednym dniu)
              days = Math.floor(t / (1000 * 60 * 60 * 24)),  // Math.floor - zaokraglenia liczby do najblizszej calej liczby
              // Godziny - bierzemy cala ilosc milisikund 't' i dzielimy na milisekundy w jednej godzinie ((1000 milisekund * 60 i dostajemy ilosc milisekund w jednej minucie * 60 i dostajemy ilosc minut w jednej godzinie) % 24 dzielimy przez modulo ilosc godzin w dniu, zeby dostac ilosc dni ktora zostanie z dzielenia t / (1000 * 60 * 60))
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              // Minuty - tutaj odrazu dzielimy wszystkie milisekundy na 1000 milisekund w jednej sekundzie i dzielimy na 60 sekund zeby dostac ilosc sekund, potem korzystamy sie z % 60 minut zeby dostac z calej liczby ilosc sekund ktore zostaly
              minutes = Math.floor((t / 1000 / 60) % 60),
              // Sekundy - tutaj cala ilosc milisekund sekund dzielimy na 1000 milisekund w jednej sekundzie, dalej korzystamy z modulo % i 60 sekund w jednej minucie zeby dostac niewystarczajaca ilosc do 60 sekund ktora bedzie wyswietlac sie na stronie
              seconds = Math.floor((t / 1000) % 60);
        
        // zwracamy wszystkie uzyskane dane, zeby dalej z nich korzystac w innych funkcjach'
        // zwracac bedziemy w formie object
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // sprawdza kiedy liczba jest ponizej 10 to dodaje na poczatku liczby 0, i zwraca liczbe 01, 02 itd
    // a jesli liba rowna sie lub wyzej niz 10 to nic nie zmienia i zwraca jej numer
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // funkcja ktora bedzie pobierac i zmieniac liczby dynamicznie na stronie
    function setClock(selector, endtime){
        const timer = document.querySelector(selector), // przyjmuje selector z wylowania funkcji, czyli blok z klasa gdzie jest zawarty caly licznik
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); // ustawiamy powtorzenia dla glownej funkcji UpdateClock na 1 sekunde

        updateClock(); // odrazu wylowamy funkcje zeby uniknac pierszego  odczekania 1000 ms na stronie pod czas ladowania strony, czyli zatrzymania na poczatkowej dacie, ktora zmieni sie tylko po 1 sekundzie

        // funkcja bedzie juz wpisywac na strone dynamicznie zmieniajacy sie liczby
        function updateClock() {
            // do zmiennej t zapisujemy wyliczenie w formie objektu z funkcji getTimeRemaining oraz w srodek wstawimy argument endtime w ktorym bedzie nasz deadline z ktorego beda robione wyliczenia  przez funkcje
            const t = getTimeRemaining(endtime);
            
            // innerHTML usuwa poprzednie znaczenie w kodzie html i wstawia kolejne ktore my zadamy dynamicznie
            // t.days oraz inni zmienni - so to objekty ktore dostalismy z funkcji getTimeRemaining i teraz dostajemy z objektu dane, czyli odlowanie do objektu.kropka i nazwa klucza w objekcie z ktorej chcemy uzyskac dane
            days.innerHTML = getZero(t.days); // znaczenia wstawiamy ale najpierw sprawdzamy przez funkcje getZero czy nie trzeba dopisac zera przed liczba od 1 do 9
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            // jesli ilosc milisekund dojdzie do zera lub bedzie juz ujemne bo minie data po za ustawiona, to wtedy wyczyscimy licznik na 0
            if (t.total <= 0) { // t jest objektem, a total jednym z jego elemntow gdzie zapisuja sie cala ilosc milisekund ktora zostala do konca ustawionej daty w deadline
                clearInterval(timeInterval);
            }
        }
    }

    // wywolanie funkcji ktora uruchamia caly licznik
    // przekazujemy klase bloku z licznikiem i date koncowa jak argumenty do wykorzystania w funkcji
    setClock('.timer', deadline);
});


//--------------------------------------------------------------------------------------------------
// Lesson 42 - Параметры документа, окна и работа с ними 
// FOTO tlumaczenie dzilania parametrow  - https://drive.google.com/file/d/1eTxWzmaDfN0CXHC7Dv_AE39A1GlNO1nI/view

// document - jest to objekt ktory przechowuje cala html strukture
// window - przestrzen w ktorej widoczny jest document, czyli strona, jesli zmniejszac oknto przekslidarki, lub wyswietlic F12 konsol, to widocznosc bedzie mniejsza 
//          a znaczy rozmiar winodow bedzie zmieniony
// screen - caly MONITOR uzytkownika (w praktyce spotyka sie rzadko). Rozne monitory oznaczaja rozne znaczenia screen
//
// Wlasciwosci:
// .clientWidth
// .clientHeight
// .offsetWidth
// .offsetHeight
// .scrollWidth
// .scrollHeight
// .scrollTop
// .scrollLeft
//
// Metody:
// .getBoundingClientRect()
// .getComputedStyle()

// scrollBy(koordynatX, koordynatY)
// scrollTo(koordynatX, koordynatY)


// zobaczymy wszystkie wlasciwosci i metody, pseudotablicy ktore przechowuje objekt document
console.dir(document); 

const box = document.querySelector('.box'),
      btn = document.querySelector('button');


// clientWidth - wyswietli szerokosc elementu wlacznie z paddingami ale bez borderow i elementu scrolowania na stronie 
const width = box.clientWidth;
// w css mamy wpisane 400 px dla box oraz padding 10px z kazdej strony, czyli razem 420 px szerokosc elemntu
// ale w konsoli dostaniemy 405px szerokosc elemntu, a to dlatego, że -15px zajmuje scroll bar ktory nie jest wliczany kiedy korzystamy z wyliczania za pomoca clientWidth
// PAMIETAC: 
// jesli w css jest dodana wlasciwosc: box-sizing: border-box; dla elemnta u ktorego mierzymy szerokosc za pomoca clientWidth 
// to wtedy padding: 10px; juz bedzie w srodku wliczony w elemncie, czyli szerokosć zostanie 400px, 
// wtedy pod czas mierzenia szerkości za pomoca clientWidth bedzie brana pod uwage 400px ale w srodku bloku zanjduje sie takze scroll bar ktory wynoszi 15px,
// dlatego odliczamy 400 - 15px i mamy wynik 385px szerokosc mierzonego elemntu. box-sizing: border-box; - jest czesto stosowany dla elementow.

// clientHeight - wyswietli wysokosc elementu wlacznie z paddingami ale bez borderow i elementu scrolowania na stronie 
// wysokosc widocznego tekstu w elemncie box
// zasady takie same jak powyzej u clientWidth
const height = box.clientHeight;
console.log(width, height); // wyswietlimy usyzkane dane

// zasady takie same jak wyzej ale:
// offsetWidth i offsetHeight juz beda w siebie wlaczac scrollbar jesli wystepuje, border jesli dodany oraz margin
// liczona jest tylko widoczna czesc w elemncie, ukryta nie bedzie liczona
const widthWithBar = box.offsetWidth;
const heightWithBar = box.offsetHeight;
console.log(widthWithBar, heightWithBar);


// scrollWidth i scrollHeight - licza juz takze ukryte czesci elemntu, czyli razem ze scrolowaniem.
// Zazwyczas wykorzystywany jest scrollHeight, bo strona raczej jest zawsze po dlugosci tworzona a nie w szerokosc.
const allWidth = box.scrollWidth;
const allHeight = box.scrollHeight;
console.log(allWidth, allHeight);


// rozne zachowanie pod czas klikniecia na przycisk w odniesieniu do elementa
btn.addEventListener('click', () => {
    // wyswietli cala dlugosc boxu z tekstem na stronie 
    // box.style.height = box.scrollHeight + 'px';  // ustawimy inline style ktory przekryje css style dla height na ten ktory wyliczy w js 
    console.log(box.scrollTop);  // bedzie odliczal px ile juz my przesli od gory elemnta box za kazdym razem jak klikniemy w przycisk, wtedy wyswietlimy w konsoli 
});

// Koordynaty elemnta na stronie: 
// metod: getBoundingClientRect() - w formie OBJECT wyswietla koordynaty elemnta lewej, prawej gornej i dolnej granicy
// jako ze jest objectem mozna z niego w latwy sposob dostawac potrzebne nam kooordynaty przez odlowanie sie do nazwy linii w objekcie

// w JS koordynaty wyliczaja sie NIE tak jak w CSS
// wyliczanie zaczyna sie od Gornego Lewego kąta okna documentu 

// znaczy ze jesli uzyskujemy koordynat right to bedzie on liczony od lewej granicy documenta do prawej granicy elemnta. |----/--->\ 
// jesli uzyskujemy lewa granice elemnta to od lewej strony documenta do do lewej krawerdzi elemnta |---->/   \
// jesli uzyskujemy gore elemnta na stronie to liczone jest od gory do gornej krawedzi elemnta 
// jesli uzyskujemy dolna granice elemnta na stronie bottom, to liczone jest od gory i do dolnej granicy elemnta


console.log(box.getBoundingClientRect()); // dostaniemy wszystkie granicy elemnta w konsoli
console.log(box.getBoundingClientRect().top); // dostaniemy z objektu gore lementa, czyli ile od gornej granicy dokumenta do gornej granicy elemneta 


// metod: getComputedStyle() 
// PAMIENTAC:
// COMPUTED style to sa style ktore zapisane w .css pliku i podlaczone do strony
// INLINE style to te ktore dodajemy bezposrednio w html w tag elemnta czyli przez style="";

// zobaczymy jakie style z css przymienily sie do wwybranego elementa
const style = window.getComputedStyle(box); 
console.log(style); // wyswietli wszystkie style
console.log(style.display); // wyciagniemy z objektu ten ktory nas interesuje styl, zeby zobaczyc ustawione dla niego znaczenie

// DOCUMENT
// Praca z uzyskaniem znaczen px bezposrednio z documentu strony mozliwa przez objekt documentElement
console.log(document.documentElement.clientWidth); // szerokosc dokumentu w tej chwili, czyli szerokosc strony bez uwzglednienia scrollbara 
console.log(document.documentElement.scrollTop); // ile juz przeslismy po stronie od gory do momentu naszego zatrzymania na stronie

// ustawiamy znaczenie 0 co mowi o tym ze uzytkownik jeszcze nie przewijal strone  
document.documentElement.scrollTop = 0; // mozemy zmianiacz liczbe przejscia po stronie w dol na 0, wtedy skoczymy do gory strony
// w tali sposob jest tworzona strzalka do gory na stronie dla uzytkonika, zeby szybko przewinac


// WINDOW
// scrollBy(koordynatX, koordynatY)
// scrollTo(koordynatX, koordynatY)
// jesli podlaczyc do przycisku to:

window.scrollBy(0, 400); // przeskroluje w dol na 400px
window.scrollTo(0, 400); // przeskroluje w gore na 400px 



//--------------------------------------------------------------------------------------------------
// Lesson 43 - projekt Food( w srodku lesson 38)
// Создаем модальное окно
// Kod klawiautury - https://keycode.info/

// przy pomocy data atrybutow w html, вщвфоуьн ich do przyciskow zeby poznaczyc przyciski odpowiadajace za modelne okno 
// a takze wyciagnac te przyciski tutaj 
// nazwimy data atrybut ktory dodamy do html: 
// data-modal - bedzie otwierac sie okno modalne po nacisniecie na przycisk ktory ma ten selektor
// data-close - bedzie zamykac sie okno modalne  

const modalTrigger = document.querySelectorAll('[data-modal]'),
modal = document.querySelector ('.modal'),
modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
btn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.classList.remove('hide');
  // modal.classList.toggle('show');
  document.body.style.overflow = 'hidden';
});
});

function closeModal () {
modal.classList.add('hide');
modal.classList.remove('show');
// modal.classList.toggle('show');
document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener("click", (e) => {
if (e.target === modal) {
  closeModal();
}
});

document.addEventListener('keydown', (e) => {
if (e.code === "Escape" && modal.classList.contains('show')){
  closeModal();
}
});

//--------------------------------------------------------------------------------------------------
