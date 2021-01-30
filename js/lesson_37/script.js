"use strict";

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

