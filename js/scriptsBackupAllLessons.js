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

//Lessons 8 - Interpolacja
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
console.log(str.leght); // dlugosc string

const arr = [1, 2, 4]
console.log(arr.leght); // dlugosc array

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
//Запомнить правило, еесли функции идут одно за другой это не значит что выводяться одна за другой
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

//Metoda forEach dla przejscia po tablicy i zmianie stylu dla wybranych elemntów
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
//wrapper.removeChild(hearts[1]);

//6
// hearts[0].replaceWith(circles[0]);  //zamieniamy konkretny element na inny konkretny element z naszych tablic gdzie sa zaciagniete elementy ze strony
// wrapper.replaceChilde(circles[0], hearts[0]); //stara wersja


// Dynamiczne dodawanie wsrodek bloku informacji
        // roznica w metodach polega na bezpieczenstwu
        // w jeden mozna wstawic kod a w drugi tylko tekst, 
        // i wszystko zalezy od zadania co np. chcemy dostac od uzytkownika
        // innerHTML pozwala dodawac w srodek i tekst i tagi html
div.innerHTML = "<h1>Hello world</h2>";

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
