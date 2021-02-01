'use_strict';

// Lesson 38 - Projekt Food - Czesc 1
// Создаем табы в новом проекте

// Owiniemy wszytko w event DOMContentLoaded zeby script poczekal na zalodanie sie elementow DOM 
window.addEventListener('DOMContentLoaded', () => {
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

});