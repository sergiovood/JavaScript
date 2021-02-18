"use strict";

// Lesson 46 - Контекст вызова. This
// О ключевом слове «this» языка JavaScript: особенности использования с пояснениями - https://tproger.ru/translations/javascript-this-keyword/


// Kontekst wyłowania funkcji - po prostemu znaczy to co otacza funkcję oraz w jakich warunkach ona jest wyłowana. 

// Przyklad: wyobraz sobie osobe ktora nie ma gdzie mieszka. W tym przypadku oznacza to ze ta osoba funkcjonuje w przedziale calego swiata, on nie jest przywiazany do konkretnego miejsca. No jesli my zapchamy jego w specjalny budynek gdzie on bedzie mogl mieszkac, zajac sie czyms to wtedy on dostanie tak zwany Kontekst wyłowania. Teraz on ma swoje miejsce do funkcjonowania. 

// Funkcji w JS zachowują się tak samo jak wyżej w przykladzie. Wystarczy wyobrazic sobie przyklad.

// zahowanie konteksty wylowania this - bedzie roznic sie od tego czy ustawiony "use strict" czy nie 


// Funkcja może być wyłowana na 4 sposoby:

// 1) Poprostu wyłowanie naszej funkcji z kontekstem
// wynik w konsoli dla kontekstu this, bedzie globalny objekt Window, a jesli ustawiony tryb "use strict" to wynik w konsoli - undefined
function showThis() {
    // 1. this = Window. Wylowujac sam kontekst wylowania this, bedzie sie odnosziw do globalnego objekt Window, ktory zostanie wyswietlony w konsoli (regula dziala wywacznie kiedy nie ustawiony "use strict")
    // 2. this = undefined. W przypadku ustawionego "use strict" - wyswietli sie w konsoli undefined i jshint bedzie podkreslaw this w kodzie. 
    console.log(this); 
}
showThis(); 

// przykladowe zadanie zeby zobaczy dzialanie this, pamientac wszystko zaleczy od trybu dokumentu JS czy jest ustawiony "use strict" czy nie. W naszym przypadku tak, dlatego mamy dostac wynik undefined
// Jaki bedzie kontekst wylowania this w funkcji sum() ktora znajduje w inej funkcji
function showThisTwo(a, b){
    console.log(this); // wyswietli undefined

    function sum(){
        console.log(this); // Odpowiedz: kontekst wylowania nie zmienny. Tez wyswietli undefined, poniewaz nie jest wazne gdzie ona jest wylowana, ona dalej ma tylko dwie mozliwosci wyswietlenia undefined (tryb "use strict") albo Window (bez trybu "use strict")
        
        // Co wyswietli wynik, bez bledu? Dlaczego?
        // 1) Ten zapis bedzie poprawny. Wykorzystujac zamykanie funkcji, co znaczy ze funkcja sum bedzie sprawdzac czy ona ma w sobie dwa argumenty a i b, jesli nie to pojdzie do rodzica wyzej i tam sprawdzi, tam juz znalazla i wynik bedzie 9
        return a + b;
        
        // 2) trzeba usnac this i ustawic tak jak na gorze zeby unikac bledu i stworzyc zamykanie funkcji
        // return this.a + this.b;
    }

    console.log(sum()); // wyswietli 9
}

showThisTwo(4, 5); //wylowanie funkcji oraz przekazywanie dwoch argumentow


// 2) Wylowania kontekstu w srodku metody objekta
// Wynik: kontekst wylowania w metodzie objekta bedzie zwracany sam objekt

const obj = {
    a: 20,
    b: 15,
    sum: function() {  // metod objekta - czyli tez jest funkcja 
        // Pytanie: jaki kontekst bedzie u metody objekta?
        console.log(this); // kontekst wylowania w metodzie objekta bedzie zwracany sam objekt, wynik: {a: 20, b: 15, sum: ƒ}

        function shout() { // jesli dodamy funkcje w srodku metody objekta, to wylowanie kontekstu this dla funkcji shout bedzie juz undefined, a nie zwracany objekt jak to bylo wyzej. Poniewaz 1 rodzicem funkcji shout jest inna funkcja a nie objekt. Czyli kontekst wylowania zostal stracony, jak w przykladzie pod numerem 1).
            console.log(this);
        }
        shout(); // wylowania funckji w srodku metody objektu
    }
};
obj.sum(); // wylowanie metody w objekcie, zeby zobaczyc jak on bedzie dzialal


// 3) wykorzystania funkcji-konstruktora przez operator - new
// WAZNE: this w kontruktorach i klasach - jest nowym prototypem objektu (czyli kopia objektu ze swoimi wlasciwosciami przekazanami pod czas wylowania konstryktora) 

function User(name, id) { 
    // kiedy zostanie wylowana ta funkcja-konstruktor, to zostanie stworzy nowy objekt, poniewaz jest wylowana nizej za pomoca operatora - new
    // kontekst this w srodku objekta bedzie TWORZYL nowy objekt (regula numer 2 wyzej). Dlatego przez kropke mozemy odczytac przekazany name objekta ivan i zapisac imie do zmiennej czyli takze do name. 
    // to samo z id 
    // human jest dodawana dla objektu automatycznie
    // tworzona takze metoda this.hello dla objektu, dodatkowo przekazujemy do metody imie objektu poprostu odczytujac z objekta przez this.name
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello" + this.name);
    };
}

let ivan = new User('Ivan', 23); // tworzymy ekzemplarz nowego usera z jego danymi 
console.log(ivan);


// 4) Ręczne powiązanie this z kazdą funkcją 
// metody: 
// call(), apply() - dodają kontekst do funkcji ktory chcemy  wyswietlac 
// double() - najpierw tworzy automatycznie nowa funkcje pod czas wylowania, a tylko potem ustawia kontekst dla funkcji.


function sayName(surname) { // przekazujemy argument, jesli potrzebujemy przyjmowac dodatkowy  z zewnatrz, moze takze byc pusta bez argumenta
    console.log(this); // w celu testowym sprawdzamy jaki kontekst wylowania bedzie dla funkcji, kiedy jeszcze nie podlaczylismy this do objektu przez przedstawione metody wyzej, to ma byc wyswietlany undefined lub globalny objket Window (zalezy czy jest tryb "use stricte" czy nie) A jesli juz jestesmy podlaczeniu pod objekt to on powinien zostac wyswietlony w konsoli
    console.log(this.nameTwo + surname); // Zadanie pokazac jakies imie w konsoli. Zeby to zadzialalo trzeba skorzystac z metody call() lub apply(), zeby mozna bylo dostac sie wlasciwosci nameTwo w swodku objektu user. 
}

const user = { // tworzymy objekt ktory bedzie zawieral wlasciwosc nameTwo
    nameTwo: 'John'
};

// Metody call() i apply() podobne do siebie, wyswietla takie same dane, tylko roznica polega w zapisaniu argumentow w srodku. 
sayName.call(user, 'Smith'); // do srodka przekazujemy kontekst wylowania ktory my chcemy przekazac do funkcji czyli: user. Jesli chcemy przekazac funkcji dodatkowe argumenty, to rowniez mozna dodac, w tym przepdaku dodatkowo dodajemy nazwisko.
sayName.apply(user, ['Smith']); // tutaj robimy to samo co w call(), tylko argument przekazujemy przez tablice ['argument'].


// Metoda bind() - czesto spotykany 
function count(num) { // przyjmuje jakis argument z zewnatrz
    return this*num; // bedzie mnozyl przejmowany argument num na ten co bedzie w kotekscie wylowania this 
}

// stworzymy funkcje ktora bedzie zawsze podlajac liczby ktore my przekazemy
const double = count.bind(2); // do zmiennej bedzie wlozona nowa funkcja ktora bedzie zawierac w kontekscie wylowania this juz znaczenie 2. Czyli bedzie to kopia funkcji count, a w this przekazane zostane na zawsze 2.

console.log(double(3)); // teraz wylowamy nowa stworzona funkcje w ktorej jest zapisane ze this = 2, a takze przekazujemy argument dla funkcji 3, a znaczy ze 2 * 3 = wynik 6. 
console.log(double(13)); // wynik 26
