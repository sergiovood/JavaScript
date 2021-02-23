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
          modal = document.querySelector ('.modal'), // dostajemy glownego rodzica ktory odpowiada za modalne okno i ma wszystkich dzieci
          modalCloseBtn = document.querySelector('[data-close]'); // dostajemy przycisk ktory bedzie odpowiadac za zamkniecie
    
    function openModal() {
        modal.classList.add('show'); // jesli klas show nie istnieje w przycisku to dodajemy zeby pokazac modalne okno
        modal.classList.remove('hide'); // takze musimy sprawdzic czy klas hide istnieje i usnac jesli chcemy zeby okno sie wyswietliwo 
        // modal.classList.toggle('show'); // metoda toogle - czyli PRZELACZNIK - dziala tak samo jak powyzsze 2 linijki kodu: jesli wskazany klas istnieje to jeko usunie, a jesli nie istnieje to doda 
        document.body.style.overflow = 'hidden'; // dodaje do body styl:  style="overflow:hidden"; -- co pozwala usunac przeiwjania(scrolowanie) strony pod czas wyswietlenia modalnego okna
        
        // clearInterval(modalTimerId); // czysciemy interwal po ktorym zostanie otwarte okno z lesson 43(kod nizej), po pierwszym otwarciu okna. Zeby odlowac ponowne otwarcia okna jesli np. uzytkownik sam kliknie w przycisk otwarcia okna przed czasem ktory ustawilismy w setTimeout
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

    modalCloseBtn.addEventListener('click', closeModal); // ustawiamy sledzenie dla przycisku krzyrzyka ktory odpowiada za zamykania modalnego okna i przykierujemy do funkcji

    modal.addEventListener("click", (e) => { // zamykanie modalnego okna po kliknieciu za przedzialem modalnego okna
        if (e.target === modal) { // korzystamy z event target - sledzenie gdzie klikna uzytkownik na stronie. Potem porownujemy czy klikna w klasie ktora odpowiada za background modalnego okna. Czyli jesli kliknie w same okno to bedzie to juz klas modal__dialog, a jesli po za modalnym oknem to bedzie to klas wyzej: modal
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
    
    // const modalTimerId = setTimeout(openModal, 3000); // uzytkownik wszedl na strone, skrypt sie zalodal i teraz czeka 3 sekundy na to zeby uruchomic funkcje ktora odpowiada za otwarcie modalnego okna. 
    

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

    new MenuCard( // przekazujemy argumenty do construktora w kolejnosci ustawionych zmiennych
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
    ).render();

    



});
