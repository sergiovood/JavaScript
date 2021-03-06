'use_strict';

// Lesson 38 - Projekt Food - Czesc 1
// Создаем табы в новом проекте

// Owiniemy wszytko w event DOMContentLoaded zeby script poczekal na zalodanie sie elementow DOM 
window.addEventListener('DOMContentLoaded', () => {
    // TABY na stronie

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
            if (t.total <= 0) {  // t jest objektem, a total jednym z jego elemntow gdzie zapisuja sie cala ilosc milisekund ktora zostala do konca ustawionej daty w deadline
                clearInterval(timeInterval);
            }
        }
    }

    // wywolanie funkcji ktora uruchamia caly licznik
    // przekazujemy klase bloku z licznikiem i date koncowa jak argumenty do wykorzystania w funkcji
    setClock('.timer', deadline);


//--------------------------------------------------------------------------------------------------
// Lesson 43 - Czesc 3
// Создаем модальное окно
// Kod klawiautury - https://keycode.info/

// przy pomocy data atrybutow w html, вщвфоуьн ich do przyciskow zeby poznaczyc przyciski odpowiadajace za modelne okno 
// a takze wyciagnac te przyciski tutaj 
// nazwimy data atrybut ktory dodamy do html: 
// data-modal - bedzie otwierac sie okno modalne po nacisniecie na przycisk ktory ma ten selektor
// data-close - bedzie zamykac sie okno modalne  


    const modalTrigger = document.querySelectorAll('[data-modal]'), // dostajem przyciski z selktorom ktory dodalismy do przyciskow na stronie
          modal = document.querySelector ('.modal'); // dostajemy glownego rodzica ktory odpowiada za modalne okno i ma wszystkich dzieci
          // modalCloseBtn = document.querySelector('[data-close]'); // dostajemy przycisk ktory bedzie odpowiadac za zamkniecie (spoczotku tak tworzylismy ale z rozwojem projektu poprawilismy funkcje i nie potrzebujemy juz tego)
    
    function openModal() {
        modal.classList.add('show'); // jesli klas show nie istnieje w przycisku to dodajemy zeby pokazac modalne okno
        modal.classList.remove('hide'); // takze musimy sprawdzic czy klas hide istnieje i usnac jesli chcemy zeby okno sie wyswietliwo 
        // modal.classList.toggle('show'); // metoda toogle - czyli PRZELACZNIK - dziala tak samo jak powyzsze 2 linijki kodu: jesli wskazany klas istnieje to jeko usunie, a jesli nie istnieje to doda 
        document.body.style.overflow = 'hidden'; // dodaje do body styl:  style="overflow:hidden"; -- co pozwala usunac przeiwjania(scrolowanie) strony pod czas wyswietlenia modalnego okna
        
        clearInterval(modalTimerId); // czysciemy interwal po ktorym zostanie otwarte okno z lesson 43(kod nizej), po pierwszym otwarciu okna. Zeby odlowac ponowne otwarcia okna jesli np. uzytkownik sam kliknie w przycisk otwarcia okna przed czasem ktory ustawilismy w setTimeout
    }

    modalTrigger.forEach(btn => {  // przechodzimy po objekcie z przyciskiem zeby dodac do kazdego funkcje 
        btn.addEventListener('click', openModal); // jesli przycisk zostal klikniety to wysywalamy do funkcji otwarcia modalnego okna
    });

    function closeModal() { // funkcja zamykania okna, wzielismy w funkcje poniewaz, kiedy kod sie powtarza to lepiej wziac w funkcje, zeby wszedzie potem z niej korzystac
        modal.classList.add('hide'); // dodajemy klas ktory odpowiada za ukrycie funkcji
        modal.classList.remove('show'); // usuwa klas ktory odpowiada za pokaznaie funkcji
        // modal.classList.toggle('show'); // tez tak mozna zrobic zamias dwoch powyzszych linijek kodu, za pomoca przelacznika toggle()
        document.body.style.overflow = ''; // usuwamy z body styl ktory byl dodany podczas otwierania modalnego okna, zeby umowzliwic przewiajania strony poo zamknienciu modalnego okna
    }

    // modalCloseBtn.addEventListener('click', closeModal); // ustawiamy sledzenie dla przycisku krzyrzyka ktory odpowiada za zamykania modalnego okna i przykierujemy do funkcji (z rozwojem funkcjonalnosci juz nie potrzbujemy tego kodu, bo przenieslismy jego nizej do if)

    modal.addEventListener("click", (e) => { // zamykanie modalnego okna po kliknieciu za przedzialem modalnego okna
        if (e.target === modal || e.target.getAttribute('data-close') == '') { // korzystamy z event target - sledzenie gdzie klikna uzytkownik na stronie. Potem porownujemy czy klikna w klasie ktora odpowiada za background modalnego okna. Czyli jesli kliknie w same okno to bedzie to juz klas modal__dialog, a jesli po za modalnym oknem to bedzie to klas wyzej: modal
            closeModal();  // wylowania funkcji zamykania okna w srodku naszej funkcji
        }
    });

    document.addEventListener('keydown', (e) => {  // zamykania okna za pomoca przycisku na klawiaturze Esc
        if (e.code === "Escape" && modal.classList.contains('show')){  // ustawiamy e.code dla przycisku ktory musimy najpierw sprawdzic w internecie, a takze sprawdzamy czy modalne okno jest otwarte czyli dodany klas show do modalnego okna tylko wtedy Esc bedzie dzialal, zeby nie wylowyac funkcji wciskajac Esc kiedy modalne okno jest zamkniete
            closeModal(); // wylowania funkcji zamkniecia modalnego okna
        }
    });


//--------------------------------------------------------------------------------------------------
// Lesson 43 - Czesc 4
// Модификации модального окна

// ustawiamy zeby modalne okno wyskakiwalo:

    // po tym jak minie jakis ustawiony czas przebywania na stronie uzytkownika
    
    // Nizej kod zakomentowany zeby okno nie wyskakiwalo co 3 sekundy kidy pracujemy nad strona i przeladowujemy ja.
    
    const modalTimerId = setTimeout(openModal, 50000); // uzytkownik wszedl na strone, skrypt sie zalodal i teraz czeka 50 sekundy na to zeby uruchomic funkcje ktora odpowiada za otwarcie modalnego okna. 
    

    // jak uzytkownik dojdzie do konca strony wylowania modalnego okna
    function showModalByScroll() {
        // Tworzymy formule dla porownania gdzie jest uzytkownik
        // sprawdzamy parametr okna uzytkownika pageYOffset ktore odpowiada za sledzenie ile px przewinal uzytkownik na stronie od gory okna
        // dodajemy parametr ktory sprawdza wysokosc widocznego okna dla uzytkownika na stronie
        // Dalej poruwnamy do calej wysokosci strony
        // Jesli jest wieksze lub rowna sie to wyswietlamy madalne okno
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // po tym jak skrypt zadzial pierwszy raz to usuwamy sledzenia scrola dla uzytkownika, zeby nie powtarzac kolejny raz wyswietlania okna jak uzytkownik po zamknieciu okna znow dojdzie do konca strony
        }
    }

 
    window.addEventListener('scroll', showModalByScroll); // sledzimy parametr scroll dla uzytkownika, jesli on chodziby przewianie strone na 1 px, uruchomisie sledzienie parametra scroll. Dalej odsylamy do funkcji ktura juz mowi co trzeba zrobic dalej


//--------------------------------------------------------------------------------------------------
// Lesson 48 - Используем классы в реальной работе
// Lesson 49 - Rest оператор. А также задаем параметры аргументов в функции по умолчанию
// Rest operator - ...nazwaOperatora - bierze oddzielne elementy i sklada ich razem w jedna tablice. Jest przeciwenstwem operatora ...spread - ktory rozklada tablice na oddzielne elementy.  

// Funkcja z rest operatorem - ktory przyjmuje wszystkie inne przekazane argumenty ktorych nie oczekujemy w funkcji domyslnie
// przyklady wykorzystania: np. zakladamy ze do jakies elemntu bedzie przekazano dodatkowe style ale nie wiemy ilosc.
const log = function(a, b, ...rest) { 
  console.log(a, b, rest);  // wynik: basic rest [ 'operator', 'usage' ]. Argumenty ktore zostaly zapisuje sie przez rest operator do tablicy
};

log('basic', 'rest', 'operator', 'usage'); // przekazujemy argumenty

// Czasami chcemy, zeby niektore argumenty funkcji mieli domyslnie ustawione znaczenia
// wykorzystywane dla: np. ustawiamy w aplikacji domyslne kolory, wysokosc i szerokosc dla popup, standardowe fonty oraz inne ustawienia dla pokazania dzialania aplikacji.
function calcOrDouble(number, basis = 3){ // ustawiany domyslna wartosc dla basis, jesli wartosc nie zostala przekazana podczas wylowania funkcji. Trzeba pamietac ze nie zawsze mozna tak ustawic. Zalezy od tworzonej funkcji. 
    // basis = basis || 2; // jesli nie mozna przekazac dla argumentu domyslna wartosc (jak teraz jest ustawione wyzej basis = 3) to korzystamy z tej metody. Gdzie operator ||lub, zwroci pierwsza prawde ktora zapisze sie do zmiennej basis. Jesli basis jako argument nie dostanie zadnej wartosci to do basis bedzie zapisana 2, bo pusta wartosc jest false, dlatego skrypt pozdzie dalej gdzie bedzie 2 co jest prawda. Tak zostanie ustawiona domyslna wartosc do argumentu, ktory ma byc wykorzystywany dalej. Czasami tego nie mozna wykorzystac, zalezy od skryptu.
    console.log(number * basis);
}

calcOrDouble(3); // przekazujemy tylko jeden argument, a drugi jesli nie przekazemy to zostanie ustaiony nasz domyslny. 

// Generujemy dynamiczne kartki menu na stronie za pomoca Klas, konstrukotra i metody 
      class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) { // sprawdzamy w html jakie dane bedziemy potrzebowac zmieniac i podstawiac w kartce menu, wlasnie takie argumenty bedziemy przyjmowac, a takze rest operator jesli argumentow zeby zabezpiczyc jesli wlasciwosci przekywac bedziemy wiecej niz argumentow to zapiszemy do objektu.
            this.src = src; // przekazujemy otrzymane dane z argumentow do objektu, link zdjecia
            this.alt = alt; // opis zdjecia
            this.title = title; // naglowek
            this.descr = descr; // krotki opis produktu, uslugi
            this.price = price; // cena produktu, ktora bedzie zalezec od ustawionej ceny dolara. Przekazana cena z argumentu konstruktora najpierw trafi do metody changeToUAH zeby zostac przekonwertowana na aktualna cene pod wzgledem ustawienia dolara i tylko wtedy zostanie zapisana do objektu
            // this.classes = classes || '.menu__item' // ustawienia domyslnej wartosci tekstowej i przypisania jego do this.classes nie mozliwy w taki sposob, bo pomiescimy tam string. A sam string nie mozna bedzie przeliterowac za pomoca forEach() nizej w  metodzie render() - zeby wyciagnac potrzebni nam klasy z tablicy. Dlatego musimy ustawienie domyslne musimy logicznie stworzyc sami w metodzie render() za pomoca if()else
            this.classes = classes; // nasz rest operator bedzie objektem, wazno pamietac dla pracy 
            this.parent = document.querySelector(parentSelector); // przekazemy w parentSelector DOM elemenet, który pobierze ze strony przez querySelector i tam bedziemy wstawiac nasz szablon renderowany nizej szablon
            this.transfer = 27; //cena dolara w UAH po ktorej bedziemy konwertowac cene uslugi ktora domyslnie bedzie ustawiona w dolarach, a na stronie musimy wyswietlac w UAH 
            this.changeToUAH(); // wylowujumy metode ktora opisana nizej, zeby przed tym jak trafi na strone, zostala zmieniona na aktualna.
        }

        changeToUAH() { // metoda konwertacja ceny uslugi ktora jest zalezna od kursu dolara, ktorego my ustawiemy w konstruktorze
            this.price = this.price * this.transfer;
        }

        render() { // tworzymy metode ktora bedzie renderowac kafelki menu z potrzebna nam informacja. Czyli stworzylismy szablon
            const element = document.createElement('div'); // tworzymy element w ktorego bedziemy wstawiac ponizszy html kod na stronie
            // przekazujac znaczenia ${} usuwamy z html "", bo bedziemy przekazywac znaczenia juz z nawiasami(przyklad new MenuCard - zapis nizej tej metody) i zeby oni sie nie dublowali, bo bedzie blad i nie poprawny zapis.
            
            // Tworymy logiszny warunek dla ustawienia domyslnego znaczenia w razie jesli w argument rest operator ...classes w funkcji nic nie przyszlo z zewnatrz i on zapisaw w this.classes pusta tablice, jesli tak sie dzieje to ustawiamy jemu sami nasz klas css. Jesli okaze sie ze klasa zostala przekazana w rest operator to odrazu dodajemy ja do elemntu html pomiajac ustawienia domyslnej klasy. 
            if (this.classes.length === 0) { // sprawdzamy dwugosc tablicy
                this.element = 'menu__item'; // zapisujemy najpierw nasz klas w this.element zeby ustawic domyslna wartosc zamiast pustej. pamietajmy zeby przekazac klas bez kropki, poniewaz bedzie dodawany automatycznie wykorzystujac metode classList.add()
                element.classList.add(this.element); // przekazujemy zapisany klad do html 
            } else {
                this.classes.forEach(className => element.classList.add(className)); // za pomoca forEach przechodzimy po tablicy i wydobywamy wszystkie przekazane elemnty ktore dodajemy za kazdem razem do naszego elemnta nizej. Czyli najpierw dodamy potrzebny nam klas, czy to domyslny czy przekazany i w sworek pomiescimy ponizszy html szablon elemnta (karta menu na stronie)
            }
              
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element); // wstawiamy na koniec stworzony element, jeden po drugim w srodku klasy container ktora jest zapisana w zmienniej parrent. 
        }        
    }

    //   const div = new MenuCard ();
    //   div.render();

    // LESSON 59 - async, await
    // async i await - operatory wykorzystywane zawsze razem. Odpowiadaja za wykonanie asynchronnego kodu ale w momencie gdzie trzeba poczakac na zwrot informacji np. od serwera to musimy postawic await ktory poczeka na odpowiedz i juz potem zapisze wynik do zmiennej. Bo inaczej asynchronny kod bez tych operatorow poprostu nie doczeka sie zwrotu z serwera i zapisze pustote do zmiennej i dalszy kod moze dzialac nie poprawnie, pokazujac np. nie poprawne dane.

    // funkcja bedzie sprawdzac odpowiedz od serwera a takze pobierania kartek menu z bazy zeby potem zwrocic do wyswietlenia na stronie jesli nie bedzie bledu (jest zamienna dla kodu gdzie my podawalismy kartki recznie)
    const getResource = async (url) => { // function expresion - nazwa funkcji w JS. Bedzie przejmowac tylko url do bazy JSON gdzie beda zapisane karteczki menu
        const res = await fetch(url); 

        if (!res.ok) { // sprawdzenia dzilania Fetch API czy byl jakic blad pod czas wykonania zeby w razie czego wyswietlic blad w konsoli. Korzystamy z wlasciwosci .ok ktore jest zwracane z objektu po wykonaniu (np kod 200 jest OK) - Sprawdazamy czy zmienna res z promisem bedzie - nie ok (!res.ok) np. status 404, 503 itd. wtedy wyswietlamy blad. Jesli bedzie ok to kod dzila dalej. Jest to robione bo Fetch Api dziala na Promisach, a takze nie wyswietla block catch jesli jest jakis mniejszy blad, i zeby tego uniknac stawiamy dodatkowe sprawdzanie.
            // operator throw - odpowiada za wrzucenia bledu do konsoli
            throw new Error(`Could not fetch ${url}, status: ${res.status}`); // Objekt Bledu - new Error('w srodku tekst pomylki'). Dodatkowo dla lepszej informacji o Bledzie, dodajemy adres url po ktoremu bylo tworzone pytanie do bazy oraz korzystamy z wlasciwosci ktora jest u Promisa, czyli .status, zeby zobaczyc co wyszedl za status bledu, czy to 404 czy jakis inny.
            
        }
        
        return res.json(); // Fetch Api ma metode .json() ktora zwraca javascriptowy objekt ktory jest Promisem dla dalszego wykorzystania w then()
        
    };
 
    getResource('http://localhost:3000/menu') // wylowania funkcji i przekazania url do bazy z objektem menu (url jest brany z konsoli, ktory jest wyswietlany po uruchomieniU json-server i bazy projektu db.json)
        .then(data => { // zwrot promisa ktory dostalismy po dzilaniu funkcji zapisujemy w argument data
            // przechodzimy po objektu i za pomoca destruktyryzacji {} wyciagamy wszystkie klucze z objektu przekazujac ich w callback funkcji jako argumenty
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render(); // pobrane argumenty przekazujemy do objektu MenuCard ktory bedzie renderowany na stronie, za pomoca naszej funkcji render()
            });
        }); 

    /* 
    // To same co wyzej, storzy kartki menu tylko jest to sposob jesli trzeba stworzyc jeden raz pojedyncze elementy odrazu na stronie (lesson 59 - (5min przed koncem filmiku)) 

    getResource('http://localhost:3000/menu')
    .then(data => createCard(data));

    function createCard(data) {
        data.forEach(({img, altimg, title, descr, price}) => {

            price = price * 27

            const element = document.createElement('div');

            element.classList.add('menu__item');

            element.innerHTML = `
                <img src=${img} alt=${altimg}>
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> грн/день</div>
                </div>
            `;

            document.querySelector('.menu .container').append(element);

        });
    } */

    // ten blok z menu kartkami na stronie zamieniamy na powyzszy
    /* new MenuCard( // przekazujemy argumenty do construktora w kolejnosci ustawionych zmiennych
        "img/tabs/vegy.jpg", // link do menu, przekazywac w "", to jest poprawny zapis, tak jak bedzie zapisany w html 
        "vegy", // opis zdjecia
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9, // cena uslugi w dolarach ktora bedzie na strone trafiac przekonwertowana na UAH za pomoca metody
        '.menu .container',// przekazujemy klase ktora bedzie pobrana w construktorze ze strony -> dalej zapisana do parent -> potem w ten container bedzie wstawiany szablon karty menu generowany wyzej przez metode render
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg" ,
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
        'menu__item'
    ).render(); */

    
    //--------------------------------------------------------------------------------------------------

    // Lesson - 53, 54 (czesc projektu Food) - Реализация скрипта отправки данных на сервер - metody POST - Realizacja dzialania form na stronie
   
    // Zeby dzialal method POST - trzeba uruchomic jego na lokalnym serwerze OPEN SERVER ktory umie obslugiwac ta metode. Plagin serwera live Serwer w VSCode umie tylko obslurzyc methode GET
    // WAZNE: zeby my mogli zobaczyc ze nasz backend normalnie przujmuje nasze dane z formy przekazywane metoda POST, my musimy dodac dodadtkowy plik backendu .php (dodalismy server.php) i tam dodac dodac kilka linijek kodu php. 
    // Standardowo php nie umie dzialac z formatem JSON, ale jesli dodac do pliku php decoder dla super globalnej tablicy &_POST ktora przyjmuje dane od klienta to dzilac bedzie.. (Patrz kod w pliku server.php)
    
    // formaty przekazywania danych do serwera:
    // wszystko zalezy jaka forme wybiera backendowiec z ktorym bedziemy wspolpracowac, on ma nam powiedziec w jakim formacie mamy ustawic wyslanie danych na backend
    // my wykorzystamy dwie formy dla przykladu
    // FormData() - prosty format danych. Pozwala zebrac wszystkie dany z formy ktore podal uzytkownik. Sformuje objekt format -> klucz: znaczenie. WAZNA ZASADA: zeby FormData() zadzialal i pobral wszyskie value z inputow ktore nam potrzebne, muszka w kazdym input (w html) byc podany selektor name="uniklan_nawa". Wtedy bedzie sformowany poprawny objekt danych.
    // JSON - jest to specjalny format danych
    // 
    // WSKAZOWKI do czwiczenia:
    // shift+F5 - korzystac, zeby wyczyscic na stronie cache i przeladowac ponownie, trzeba tak robic zeby usuwac podane dane zeby sprawdzac poprawnosc formy i zapsania danych na serwerze
    // Korzystac z wkladki Network obok Console w CHROME, zeby zobaczyc nasz plik server.php ktory przejmuje dane z formy. Musimy sprawdzic jego status oraz co on bedzie zawieral. 
    // Metoda wyslania danych FormDate. Jesli jest problem z zwracanym pustym array{} w konsoli pod czas wyslania danych z formy, to znaczy ze nie morzemy wykorzystywac razem rzadanie XMLHttpRequest i naglowek przekazania formatu dla serwera - setRequestHeader(); - mysimy usunac poprostu naglowek, bo on ustawia sie automatycznie, kiedy korzystamy z metody wyslania danych FormDate(); A jesli bedzie to JSON to juz bedzie potrzebny.
    
    // 
    // Na stronie mamy 2 formy, jedna na glownej stronie i jedna jako wyskakujace okienko. 
    // Realizacja bedzie dotyczyla odrazu sledzienia dwoch form jednoczesnie za pomoca funkcji ktora bedzie ich przyjmowac, bo oni przyjmuja takie same informacje
    const forms = document.querySelectorAll('form'); // dostajemy wszystkie formy z html
    // console.log(forms); // sprawdzamy czy dostalismy dwie formy
    
    const message = { // tworzymy objekt wiadomosci ktore bedza wyswietlac sie na stronie dla uzytkowniak w zaleznosci od etapu wyslania formy na serwer
        // loading: 'Chwila. Ładujemy dane',
        loading: 'img/form/spinner.svg',
        success: 'Dziekuje! Skontajume sie z Toba w najblizszym czasie',
        failure: 'Cos poszlo nie tak'
    }


    // Powiazania pobranych form ze strony pod funkcje bindPostData()
    forms.forEach(item => { // przechodzmy po objektu za pomoca callback funkcji i w item zapisujemy forme ktora przekazemy do funkcji bindPostDate()
        bindPostData(item); // klucze przekazujemy do funkcji jako zmieniajacy sie argument
    });

    // LESSON 59 - Получение данных с сервера. Async/Await (ES8)
    const postData = async (url, data) => { // function expresion - nazwa funkcji w JS
        const res = await fetch(url, {
            // zadajemy naglowek dla wyslania na serwer w formacie JSON
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data // bedzie przekazana pod czas wylowania funkcji
        });

        return res.json(); // Fetch Api ma metode .json() ktora zwraca javascriptowy objekt ktory jest Promisem dla dalszego wykorzystania w then()
    };
    // KONIEC LESSON 59 (nizej w kodzie takze sa czesci kodu podpisane lesson 59)

    // --- BLOK REALIZACJI FUNKCJALNOSCI W PROJEKCIE ---
    // Tworzymy funkcje ktora bedzie zbierac dane z formy i wysywac na serwere metoda POST
    function bindPostData(form) { // przejmujemy argument z powyzszej callback funkcji 
        
        // --- blok kodu odpowiadajacy za zbieranie danych z formy---
        form.addEventListener('submit', (e) => { // ustawiamy sledzenia formy ktura przekazalismy jako argument do funkcji, Wlasciwosc: submit - bedzie wylowana w momencie klikniecia na przycisk wyslania formy
            e.preventDefault(); // usuwamy domyslne zachowanie po wcisnieciu przeciska formy (czyli przeladowanie strony).

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
           
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
           
            form.insertAdjacentElement('afterend', statusMessage);

            // --- BLOK OBJASNIENIA DZIALANIA XMLHttpRequest ---
            /*
            // Na ten moment korzystamy ze starej wersji do wysywania rzadania - XMLHttpRequest, dalej w innych lekcjach nauczymie sie dzialac z nowa wersje rzadania
            const request = new XMLHttpRequest(); // tworzymy rzadanie do serwera
            request.open('POST', 'server.php'); // przekazujemy dane o formie rzadanie, czyli POST i link do rzadania

            // Przyklad 1 - wykorzystamy FormDate() do wyslania danychna serwer, metoda POST
    
            // request.setRequestHeader('Content-type', 'multipart/form-data');
            request.setRequestHeader('Content-type', 'multipart/form-data'); // Ustawiamy naglowek rzadania dla serwera zeby ten wiedzial co przejmuje w siebie
            const formData = new FormData(form); // tworzymy konstruktor zbierajac wszystkie sledzone dane z formy do objektu za pomoca new i specjalnego objektu zbieracza danych FormData(). Wazne zeby inputy na stronie z ktprych chcemy pozyskac dane mialy poustawiane selektor name="unikalna_nazwa"

            request.send(formData); // wysylalismy na serwer na poczatku specjalny format ktory generuje FormData, potem przerobilismy na JSON


            // Przyklad - wykorzystamy JSON do wyslania danychna serwer, metoda POST

            request.setRequestHeader('Content-type', 'application/json'); // Ustawiamy naglowek rzadania dla serwera zeby ten wiedzial co przejmuje w siebie dla formatu JSON. Jesli bylby to FormDate() i w tym samym momencie korzystalibysmy z rzadania XMLHTttpRequest - wtedy on dodawany bylby automatycznie jak w przykladzie 1(wyzej) gdzie jego nie podajemy.
            const formData = new FormData(form); // tworzymy konstruktor zbierajac wszystkie sledzone dane z formy do objektu za pomoca new i specjalnego objektu zbieracza danych FormData(). Wazne zeby inputy na stronie z ktorych chcemy pozyskac dane, mialy poustawiane selektor name="unikalna_nazwa", bo inaczej beda bledy. 

            // Dalej Objekt FormDate musimy przeksztawcis w JSON
            const object = {}; // tworzymy pusty objekt ktory bedzie przyjmowal znaczenia z FormData
            formData.forEach(function(value, key){ // przechodzimy po objektu FormData metodo forEach i formujemy swoj objekt wyciagajac z niego klucz i wartosc
                object[key] = value; // zapis do objektu - klucz: wartość
            });

            //teraz jak juz mamy standardowy objekt, a nie FormDate() to morzemy zaczac konwertowac w JSON
            const json = JSON.stringify(object); // tworzymy z naszego objektu format JSON
            request.send(json); // wysyłamy na serwer

            // request.send(formData); // wysylalismy na serwer na poczatku specjalny format ktory generuje FormData, potem przerobilismy na JSON

            <--- BLOK KODU ODPOWIADAJACY ZA SPRAWDZENIA WYSLANIA WIADOMOSCI NA SERWER I DALSZA MANIPAULACJA ---> (teraz przerobiony na Promisy, ale mozna zakomentowac prmisy na koncu funkcji i rozkomentowac ten kawalek ktory bedzie dzialal z wyslaniem danych przez XMLHttpRequest)
            request.addEventListener('load', () => { // sledzimy wlasciwoscia: load zeby objekt z naszymi danymi zostal do konca sformowany na serwerze 
                if (request.status === 200) { // sprawdzamy czy kod serwera zwrocil 200, czyli wszystko przebiega dobrze z rzadaniem
                    console.log(request.response); // wyswietlamy status dla sprawdzeniaw konsoli
                    // statusMessage.textContent = message.success; // wyswietlamy wiadomosc pod forma, ze wszystko zostalo wyslane (przerobilismy na ponizszy kod z rozwojem projektu)
                    showThannksModal(message.success); 
                    form.reset(); // wyczyszczamy forme z wprowadzonych danym przez uzytkownika
                    // setTimeout(() => { // zadajemy interwal
                    //     statusMessage.remove(); // po 2 sekundach forma usuniemy informacje wiadomosci o wyslanej formie
                    // }, 2000); // juz nie jest potrzebne bo przeniesione nizej do funkcji showThannksModal
                    statusMessage.remove();
                } else { 
                    // statusMessage.textContent = message.failure; // jesli bedzie na jakims etapie blad to tez poinformujemy uzytkownika o problemie z wylaniem. // teraz poniszy kod zamiast tego 
                    showThannksModal(message.failure); 
                }
            });
            // --- Koniec BLOK OBJASNIENIA DZIALANIA XMLHttpRequest ---
            */

            //--------------------------------------------------------------------------------------------------
            // Lesson 56 - Fetch API (projekt Food) - lokal
            // Modalne okno ktore wysywa dane na serwer, przepiszemy wykorzystujac Fetch API
            // Takze wykorzystamy dla przykladu dwie formy wyslania danych na serwer: FormDate i JSON. 

            // Использование Fetch -https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
            // {JSON} Placeholder - cos naksztalw bazy danych dla testow - https://jsonplaceholder.typicode.com/

            // API - aplication programing interface
            // API - nabor danych i mozliwosci ktore przedstawia nam jakies gotowe rozwiazanie
            // Najprostyszy API ktore my znamy jest - DOM API - czyli sa to rozne metody ktore pozwalaja nam pracowac z elemntami na stronie.

            // Znane API np. api map google, api zarzadzania metodami w telefonie jak np, wibracja, wszystkie te api - przedstawiaja metody ktore my morzemy wykorzystac i modyfikowac dla swojego projektu zeby uzyskac rzadany cel.

            // --- BLOK OBJASNIENIA FUNKCJALNOSCI FETCH API ktory dziala na Promisach (promisy - lesson 55) ---
            // Przyklad z wykorzystanie Fake API JSON Plasecholder (jsonplaceholder.typicode.com)
            /*     fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: JSON.stringify({name: 'Sergiusz'}),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(json => console.log(json)); 
            */
            // --- KONIEC BLOKU OBJASNIENIA FUNKCJALNOSCI FETCH API  ---


            // --- BLOK KODU FETCH API dla formy na stronie ---
                    
            /*     
            // --- BLOK WYSLANIA DANYCH przez FormData() ---
            // Przyklad 1: wyslania danych z z formy na stronie za pomoca Fetch API i FormDate()
            const formData = new FormData(form); // tworzymy konstruktor zbierajac wszystkie sledzone dane z formy do objektu za pomoca new i specjalnego objektu zbieracza danych FormData(). Wazne zeby inputy na stronie z ktorych chcemy pozyskac dane, mialy poustawiane selektor name="unikalna_nazwa", bo inaczej beda bledy.        
            
            // Fetch Api zamiast starej wersji rzadania XMLHttpRequest
                    fetch('server.php', {
                    method: "POST",
                    body: formData
                    })
                    // koniec wyslania danych prosta metoda FormData()

            // --- KONIEC BLOK WYSLANIA DANYCH przez FormData() ---
            */

            
            // --- BLOK PRZEKSZTAWCENIE z formData() W JSON ---
            // Przyklad 2: wyslania danych za pomoca Fetch API wykorzystujac format JSON()
            const formData = new FormData(form); // tworzymy konstruktor zbierajac wszystkie sledzone dane z formy do objektu za pomoca new i specjalnego objektu zbieracza danych FormData(). Wazne zeby inputy na stronie z ktorych chcemy pozyskac dane, mialy poustawiane selektor name="unikalna_nazwa", bo inaczej beda bledy.        

            // Dalej Objekt FormDate musimy przeksztawcis w JSON
            /* const object = {}; // tworzymy pusty objekt ktory bedzie przyjmowal znaczenia z FormData
            formData.forEach(function(value, key){ // przechodzimy po objektu FormData metodo forEach i formujemy swoj objekt wyciagajac z niego klucz i wartosc
                object[key] = value; // zapis do objektu - klucz: wartość
            }); */
            // (czesc lesson 59)
            // zamiast tego kodu co wyzej 
            const json = JSON.stringify(Object.fromEntries(formData.entries())); // czytac kod z prawa na lewo. Bierzemy formData ktora zebrala wszystkie dane z formy i przeksztawcamy ich na tablice-tablic(matryca).Potem przerabiamy w klasyczny objekt za pomoca metody Object.fromEntries(). Dalej objekt przerabiamy w fomrat JSON
            /* 
            const obj = {a: 23, b: 50} // przyklad zeby zobaczyc dzialania metody Object.entries()
            console.log(Object.entries(obj)) // Wynik: [ [ 'a', 23 ], [ 'b', 50 ] ] - tworzy z objektu Tablice i w srodku kazda linie objektu obraca w wlozone tablice, dostajemy tym samym matryce  
            */
           // koniec (czesci lesson 59)

            // Fetch Api zamiast starej wersji rzadania XMLHttpRequest
            /* fetch('server.php', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
            }) */

            // (odnoszenia do lesson 59), przerabiania na JSON za pomoca Fetch API ktorego przenieślimy w srodek funkcji postData z wykorzystaniemiem async,await - a tutaj wylolujemy ta funkcje przekazujac argumenty
            postData('http://localhost:3000/requests', json) // (url do pliku z backendem(pobrany z json-server z konsoli po uruchomieniu z baza danych db.json dla projektu), zmienna gdzie zapisany przeksztawcony objekt w json dla wyslania na serwer)
            // Z postDate nam zwroci sie Promise dlatego nizej wykorzystujemy theny do dzialania z danymi dalej
            // --- KONIEC przekstawcania danych w JSON

            // --- BLOK LANCUCHA PROMISE ---
            // Dalej Budujemy lancuch. co robimy z danymi kiedy dostalismy pozytywna odpowiedz z serwera. dzila i dla FormData() i dla JSON

            // .then(data => data.text()) // po lekcji 59, transformacja danych juz nie potrzebna bo jest robiona w funkcji postDate() automatycznie (schowana w srodku wykorzystujac)
            .then(data => { 
                    console.log(data); // wyswietlamy status przyjmowanych danych dla sprawdzenia w konsoli
                    showThannksModal(message.success); // wyswietlamy podziekowanie
                    form.reset(); // reset wypenionej formy przez uzytkownika, zeby mogl zrobic to powtornie jesli bedzie chcial
                    statusMessage.remove(); // po kilku sekundach usunie sie wyswietlany komunikat dla uzytkownika po wyslaniu formy
            }).catch(() => { // wyswietli blad jesli cos pojdzie nie tak
                showThannksModal(message.failure); 
            }).finally(() => { 
                form.reset(); // w kazdym przypadku nie zaleznie od poprawnej, czy blednego wyslania formy zostanie ona wyczyszczona z wprowadzonych danych zeby moc wpisac ponownie
            });
            // --- Koniec BLOK LANCUCHA PROMISE ---

            // --- KONIEC BLOKU FETCH API dla formy na stronie ---

        }); // koniec sledzenie 'submit'
 

    } // koniec funkcji bindPostData()


    // Funkcjonal dodatkowy(lesson 54): Funkcja odpowiadajaca za Wyswietlania wiadomosci 
   function showThannksModal(message) { // funkcja pokazania powiadomien dla uzytkownika po wyslaniu formy na stronie
    // Po wyslaniu bedziemy zamieniac zawartosc formy na wyswielenia zawartosci wiadomosci w tym samym modalnym oknie
    const prevModalDialog = document.querySelector('.modal__dialog'); // pobieramy klas w krorym jest zawarty content modalnego okna

    // Tworzymy przelacznik ktory bedzie, zamienial kontent formy na wiadomosc dla uzytkownika
    // 
    prevModalDialog.classList.add('hide'); // dodajemy do contentu formy, klase hide, ktory ma: display:none;
    openModal(); // dodajemy funkcje ktora odpowiada za otwierania okna, zeby jesli okno zostanie ponownie otwarte przez uzytkownika, nasze okienko modalne moglo znow pojawic sie z forma i korzystac z tej funkcji ponownie. 

    const thanksModal = document.createElement('div'); // tworzymy div w ktory bedziemy wstawiac wiadomosc z tekstem dla Uzytkownika strony, tp wszystko istnieje narazie w JS
    thanksModal.classList.add('modal__dialog'); // dodajemy klas odpowiadajacy za kontent w modalnym oknie i pomieszczemy w niego ponizszy html z wiadomoscia
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;

    document.querySelector('.modal').append(thanksModal); // pobieramy klas i wstawiamy w niego sformuwany szablon wiadomosci wyzej.  
    setTimeout(() => { // ustawiamy czas na 4 sek
        thanksModal.remove(); // po 4 sekundach usuwamy kontent z wiadomoscia dla Klienta
        prevModalDialog.classList.add('show'); // ponownie ustawiamy dla kontentu z forma klas na wyswietlania formy
        prevModalDialog.classList.remove('hide'); // i jednoczesnie usuwamy klas odpowiadajacy za schowania elementow na stronie  
        closeModal(); // dodajemy mozliwosc Klientowi samemu zamknac modalen okno
    }, 4000);

    } // zamykanie funkcji showThannksModal()



    //--------------------------------------------------------------------------------------------------

    // Lesson - 58. Подробно про npm и проект. JSON-server
    // Czesc Projektu - Food

    // JSON server dokumentacja na github- https://github.com/typicode/json-server

    // NPM package - pakiet npm, sa to kawawki jakiegos kodu rozmieszczonych na roznych serwerach ktore morzemy zainstalowac i wykorzystac dla swojego projektu. Popularne pakiety GULP, browser-sync oraz inne. Morzemy ich wziac funkcjonalnosci tych pakietow i zainstalowac dla swojego projektu. 

    // Pakiety npm czesto powiazane miedzy soba, zeby funkcjonalnosc ich byla duza podzielone one na mniejsze pakiety w srodku duzego pakietu

    // POCZATEK 
    // Konfiguracja NPM pakieta
    // wchodzimy w glowny katalog projektu dla jakiego chcemy zainstalowac npm pakiet. w naszym przypadku /lesson_38/Food

    // npm init - inicjalizacja npm (poczatek roboty, od tego zaczynac jesli chcemy zainstalowac pakiet)
    // odpowiadamy na pytania: nazwa pakiety dla naszego projektu (np. zadamy food), dalej morzemy nic nie wpisywac w: version, description, entry point (glowny plik projektu), test comand,  git reposytory(morzemy podac link do repozytorium projektu, a moremy nie podawac), keywords(slowa kluczowe ktore opisuja nasz projekt), author, licence
    // Potwierdzamy i ma sie pojawic plik w projekcie z nazwa: package.json - w ktorym beda zapisane wszystkie nasze ustawienia dla projektu, a takze bedzie zawieral (po dalszej instalacji) wszystkie wykorzystane pakiety npm dla danego projektu, ich wersje itd.

    // INSTALACJA NPM pakieta
    // pakiety mozna instalowac lokalnie a mozna globalnie
    // zazwyczaj dla projektu instalujemy lokalnie zeby:
    // 1) bylo informacja powiazana z konkretnym pakietom i  jego konkretna wersja 
    // 2) inna osoba ktora pobierze nasz projekt bedzie na 100% wiedziec z pliku package.json, ktore pakiety ma pobrac na swoj komp i w jakiej wersji rzeby wszystko dzilalo dla danego projektu
    // jesli globalnie - to pakiet bedzie dzialal w calym systemie nie zaleznie czy byl instalowany w innym projekcie czy nie, zawsze do niego mozna sie podlaczyc
    // podczas instalacji pakieta musimy na koncu komendy podac flage, co bedzie oznaczac czy pakiet bedzie wykorzystywany dla DZIALANIA PROJEKTU (np. JQuary, React inne): --save, Czy tylko dla TWORZENIA PROJEKTU (np. symulacja backendu json-server): --save-dev

    // komenda dla lokalnej instalacji: npm i nazwa_pakietu lokalna_sciezka
    // komenda dla globalnej instalacji: npm i nazwa_pakietu lokalna_sciezka -g

    // Instalacja json-server dla symulacji beckednu, dla testowania naszych funkcji  projekcie
    // JSON-server bedzie dodawac 
    // npm install (lub i) json-server --save-dev

    // zostana zainstalowane pakiety i stworzony folder node_modules - ktora ma wszystkie pakiety w srodku, ktore polaczone miedzy soba, dlatego tam nigdy nic nie zmieniamy. Recznie tez nie usuwamy tego folderu, a korzystamy z komendy. A najwazniejsze jest to, ze zainstalowac folder node_modules mozna jedna komenda (npm i) np. w sytuacji kiedy dzialamy nad projektem z innego komputera i do pobranego projektu mamy podciagnac wszystkie wykorzystywane npm pakiety ktore mozna bedzie sciagnac majac tylko plik w projekcie: package.json gdzie sa zapisane wykorzystywane pakiety. Wszystko zainstaluje sie automatycznie po wpisaniu komendy: npm i

    // Dodajemy folder node_modules do .gitignore, zeby nie wysylac ciezki folder na gita.

    // plik package-lock.json - jest plikiem gdzie zapisane wszystkie polaczenia modulow miedzy soba.

    // JSON-SERVER - jest prostym serwerem dla pracy z plikami .json ktora my bedziemy wykorzystywac jak malo baze danych. Tutaj beda dzilac wiekszoc metod: GET i POST oraz inne.

    // do projektu dodajemy plik db.json z ktorym bedziemy dzialac


    // za pomoca fetch API pobierzemy nasza baze danych db.json i wyswietlimy ja w consoli
    /* fetch('db.json')
        .then(data => data.json())
        .then(res => console.log(res)); // Wyswitli sie Object ktory bedzie zawieral tablice Array z objektami danych z naszej bazy
    */


    // Zeby uruchomic JSON-server (pamientac zeby w terminalu wejsc w terminalu w lokalizacje umieszczonej bazy danych):
    // npx json-server db.json  (dla Windows)

    // teraz jak juz mamy uruchomiony to powyzszy kod fetch zamieniamy na inny:
    fetch('http://localhost:3000/menu') // zamieniamy na link wygenrowany w terminalu po uruchomieniu json-server
    .then(data => data.json())
    .then(res => console.log(res)); 

    
    
    //--------------------------------------------------------------------------------------------------

    // LESOON 59 (czesc projektu Food) - Получение данных с сервера. Async/Await (ES8)
    // Пишем парсер на JavaScript | QA - https://www.youtube.com/watch?v=wPG7RgPzxmM

    // kod z tej leksji jest umieszczony wyzej w roznych czesciach projektu i podpisany lesson 59

    

}); // zamykania DOMContentLoaded()

