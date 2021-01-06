"use strict";


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
*/


//---------------------------------------------------------------------------------------------------
