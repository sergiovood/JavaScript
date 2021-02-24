"use_strict";

// Lesson 52 - AJAX и общение с сервером 
// Rozbieramy wszystkie informacje od starej metody do nowoczesnych zeby umiec pracowac z kazda.

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

// Żeby nasz front-end umiał komunikować się z serwerem my potrzebujęmy umieć wyslac żądanie httpRequest - ktore juz jest przestazale, ale trzeba wiedziec jak dziala bo mozna spotkac w starych projektach

// TWORZYMY KONWERTOR WALUTOWY

// pobieramy z html nasze inputy gdzie uzytkownik bedzie wprowadzal dane
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');
// dodajemy sledzenie dla inputa wykorzystujac wlasciwosc 'input' ktora bedzie uruchamiac sledzenie za kazdym razem kiedy wpisujemy litere, cyferke itd (przycisk wyslania nie mysi byc wciskany wystarczy tylko wpisywac cos w input zeby sledzienie uruchamialo sie)
inputRub.addEventListener('input', () => {
    
    const request = new XMLHttpRequest(); // tworzymy rzadanie na serwer, wykorzystujac new XMLHttpRequest() - jest syntaksys konstruktora ktorzy tworzy nowy objekt. Ekzemplar tego klasu zapisujemy do zmiennej request. Class ma swoje metody, wlasciwosci, wydarzenia(events)

    
    // Metody objekta request

    // metoda open() zbiera ustawienia zeby w przyslosci mozna bylo zrealizowac ządania http

    // request.open(method, url, async, login, pass); // szablon zapytania do zbierania potrzebnych informacji, ostatnie 3 argumenty nie zawsze potrzebne
    // method - czyli GET lub POST ktory jest wykorzystywany do formuwania ządania
    // url - sciezka do naszego serwera do ktorego bedziemy tworzyc rządanie (morze byc sciezka albo plik do ktorego tworzymy rządanie)
    // async - odpowiada za asynchronne dzialania ządanie. Domyslne zawsze stoi w pozycji True, ale jesli zmienimy na false to ponizszy kod nie bedzie wykonywac sie dopuki nie przyjdzie odpowiedz z serwera. Prawie nigdu nie wykorzystywane.
    // login i pass - 

    // status żądania http - takie jak 404, uczyc ich nie trzeba wystarczy sprawdzic w google

    request.open('GET', 'js/current.json'); // Metoda GET (otrzymania danych), otrzymania danych ktore znajduja sie w podanej lokalizacji. Pamietac: ze rządanie idzie nie z tego nie z tego pliku z html pliku, dlatego sciezka ma byc podana od pliku html. 

    //request.open('GET', 'js/current1.json'); // przetestujemy czy podajac nie poprawny adres, wyswietlisie nasz tekst(zapisanej nizej w else) dla uzytkownika informujacy o bledzie. Jest to blad po stronie Klienta z num 4...
    
    // HTTP naglowki:
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Kiedy wysylamy rzadanie to musimy podac serweru naglowek z infomrcjami, zeby on rozumial co przejmuje, przekazujac: typ danych, format danych, kodowanie

    // Metoda wyslania sformowanych danych na serwer
    request.send(); // w zaleznosci od tego czy GET czy POST rządanie, metoda send(), bedzie sie róznic. Kiedy jest GET to pusta metoda, kiedy bedzie POST to metoda send(bedzie przyjmowac w siebie informacje ktore my wysywamy na serwer, np. tag: body)
    
    
    // Czesto wykorzystywane WLASCIWOSCI objekta HTTPrequest (linki do artykolow wyzej)

    // .status - wyswietli numer odpowiedzi od serwera, czy jest pozytywna 200, czy negatywna 5.., morze nie ma takiej strony 404 itd. 
    // .statusText - tekstowy opis odpowiedzi serwera: OK, not found itd. Tekst brany od zwróconej odpowiedzi od serwera ktory jest przypisany do kodu, co opisalem wyzej w wlasciwosci status
    // .responce - odpowiedz. My dostajemy odpowiedz od serwera ktory zadal backend programista, to co my mamy wykorzystac dla Klienta
    // .readyState - posiada znaczenie rządania w danej chwili. Zwraca od 0 do 4. Kazdy numer znaczy status operacji powyzszego kodu. Czyli kiedy 0 zmienia sie na 1 kiedy jest wylowana metoda open(), potem na 2 kiedy naglowki przygotowane, na 3 - kiedy jest wyslane rządanie na serwer, i 4 - kiedy objekt jest gotowy. Nas najczesciej bedzie interesowac 4 czyli sledzenie zakonczenia wykonania

    //Przyklady: 
    
    // sledzenia rzadania za pomoca:
    
    // 1) redystatechange - sledzi nasze rządanie w czasie rzeczywistym, poniewaz my nie morzemy znac kiedy odpowie serwer, dlatego ono bedzie sledzis wlasciwosc readyState - kiedy ten zwroci zakonczenie dzialania rzadania czyli 4, wtedy nasza konstrukcja logisczna przejdzie do wykonywania dalszego skryptu

    // request.addEventListener('readystatechange', () => { // 
    //     if (request.readyState === 4 && request.status === 200){ // sprawdzamy zwrocone statusy od serwera przed wykonaniem naszego skryptu
    //         console.log(request.response); // dla testu zeby zobaczyc co zwraca rzadanie
    //         const data = JSON.parse(request.response); // transformacja formatu JSON w normalny objekt z ktorym bedziemy dzialac, zapisujemy do zmiennej. 
    //    inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // Dalej liczymy kurs dla uzytkownika to co wrowadzil uzytkownik dzielac na to co dostalismy od serwera. inputUsd.value - kontrulujemy znaczenie inputa przypisujac do niego wyliczony kurs. +przedinputRub.value - przeksztawci dane od uzytkownika z string w num i podzieli na wlasciwosc(liczbe) wyciagnieta z objektu w srodku wlorzonego objektu data.current.  Dalej dodajemy metode toFixed(2) - ktora obcina ogon w licznie i zostawie tylko 2 liczby po przecinku. 
    //     } else { // zawsze dodajemy else, zeby w momencie kiedy cos pojdzie nie tak, serwer przestanie dzialac, zwrocic informacje dla uzytkownika o bledzie i dalszych krokach.
    //         inputUsd.value = "Cos nie dziala, sproboj jeszcze raz lub pozniej"
    //     }
    // });

    // 2) Wydarzenie: load - w porownaniu do readystatechange nie bedzie sledzil wlasciwosci readyState. Load - zadziala w momencie jak juz bedzie gotowy objekt bez sledzenia krokow wykonania. Jest czesciej wykorzystywany. Wykona to samo co powyzszy kod.
    // wyjasnienie do kody brac z powyzeszego kodu(przyklad 1)
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