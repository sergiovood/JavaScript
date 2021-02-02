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
});



//--------------------------------------------------------------------------------------------------
// Lesson 
