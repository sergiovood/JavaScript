'use strict';
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
