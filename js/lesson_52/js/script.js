"use_strict";

// Lesson 52 - AJAX и общение с сервером 
// (pliki czwiczenia umieszczone w Open Server, katalog domains -> kurs_JS -> lesson_52 )

// XMLHttpRequest - https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
// Использование XMLHttpRequest - https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
// XMLHttpRequest.readyState - https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

// Использование Объектов FormData - https://developer.mozilla.org/ru/docs/Web/API/FormData/Using_FormData_Objects

// How To Convert FormData To JSON Object - https://ilikekillnerds.com/2017/09/convert-formdata-json-object/

// Заголовки HTTP - https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8_HTTP
// Список кодов состояния HTTP - https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP

// Asynchronous Javascript and XML
// Technologia AJAX - asynchronne wykonywane zadan na stronie i komunikacja z serwerem bez przeladowania strony.
// Roznego rodzaju filtry w sklepie, wyslania formy z uzyskaniam wyniku dzialania wyslania, dodanie, usuwania do koszyka itd.
// PLUSY: Aplikacje wykorzystujace AJAX dzialaja szybciej, mniejsze obciazenie serwera, wieksza uzytecznosc od zwyklych stron.
// MINUSY: u uzytkownika powinien byc wlaczony JS, kiedy Internet bedzie wolny to morz wystepowac dziwne dzialanie, elemnty moga sie nie zaladowac, mulic itd.

// Żeby nasz front-end umiał komunikować się z serwerem my potrzebujęmy umieć wyslac żądanie http 

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // Metody objekta request, czyli HTTP request
    // status żądania http - takie jak 404, uczyc ich nie trzeba wystarczy sprawdzic w google
    // request.open(method, url, async, login, pass); // szablon zapytania do zbierania potrzebnych informacji, ostatnie 3 argumenty nie zawsze potrzebne
    // metoda open() zbiera ustawienia zeby dalej mozna bylo wykorzystach do realizacji zadania http
    request.open('GET', 'js/current.json'); // Metoda GET (otrzymania danych), otrzymania danych ktore znajduja sie w podanej lokalizacji
    //request.open('GET', 'js/current1.json'); // przetestujemy czy podajac nie poprawny adres, wyswietlisie nasz tekst(zapisanej nizej w else) dla uzytkownika informujacy o bledzie. Jest to blad po stronie Klienta z num 4...
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // ustawiamy ządanie dla serwera przekazujac typ, format danych, kodowanie
    request.send(); // wysylamy sformowane ządanie do serwera 
    
    // Czesto wykorzystywane WLASCIWOSCI objekta request

    // request.statusText
    // request.responce
    // request.readyState 

    //Przyklady:
    // sledzenia zadania za pomoca sledzenia:
    // 1) redystatechange - 
    // request.addEventListener('readystatechange', () => { // 
    //     if (request.readyState === 4 && request.status === 200){ // sprawdzamy zwrocone statusy od serwera przed wykonaniem naszego skryptu
    //         console.log(request.response); // dla testu zeby zobaczyc co zwraca zadanie
    //         const data = JSON.parse(request.response); // deformacja formatu JSON w normalny objekt z ktorym bedziemy dzialac, zapisujemy do zmiennej. 
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // po
    //     } else {
    //         inputUsd.value = "Cos nie dziala, sproboj jeszcze raz lub pozniej"
    //     }
    // });

    // 2) load - wykona to samo co powyzszy kod
    request.addEventListener('load', () => {
            if (request.status === 200){
                console.log(request.response);
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputUsd.value = "Cos nie dziala, sproboj jeszcze raz lub pozniej"
            }
    });


    // 
});