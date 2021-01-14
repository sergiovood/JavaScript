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
 