"use strict";

// Lesson 34 - События на мобильных устройствах

// Touch события на javascript, мультитач - реализация -  http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya
// Заставьте сайт работать на сенсорных устройствах - https://habr.com/ru/company/sibirix/blog/227175/
// HammerJS - https://hammerjs.github.io/  - gotowe roziwazania dla tworzenia dotykowych elementow na stronie pod dotykowe urzadzenia

// TABY - znajduja sie w mobilnych przegliadarkach na dotykowych urzadzeniach. 
// Sa ta wlasciwosci ktore monitoruja ekran i sprawdzaja kiedy, gdzie i jak uzytkownik dotyka palcem ekran oraz ile palcow wykorzystuje (multituch).


// Zdarzenia (event)
// touchstart  - zaczyna dzialac w momencie dotyku do elementa
// touchmove - licze staly dotyk palca od elementa, jesli prowadzic palcem po lemencie.
// touchend - w momencie kiedy zabieramy palec od elemntu, idzie rejestracja tego zdarzenia
// touchenter - kiedy prowadzimy palcem po ekranu, i naskoczymy na element ktory jest na ekranie i ma podlaczone to zdarzenia. Wtedy mozna zarejestrowac ze palec byl w granicach danego elementu.
// touchleave - kiedy palec prowadzony po lemencie nie odrywajac wyszedl za jego granicy, wtedy nastepuje rejestracja zdarzenia
// touchcancel - zdarze sie wtedy kiedy punkt dotyku palca juz wicej nie jest widoczny, nie jest rejestrowany. Np. mozemy prowadzic palcem i on wyjdzie za przedzial przegliadarki wtedy zadziala touchcancel

// Wlasciwosci - glowne pod czas pracy z dotykowymi urzedzeniami
// touches - ile palcow zostalo w interakcji z EKRANEM
// targetTouches - ile palcow w iterakcji z KONKRETNYM ELEMENTEM
// changedTouches - lista palcow ktora uczestniczy w danym zdarzeniu, nawet jesli jakis palec zabierzemy to lista wyswietli dalej wszystkie palcy ktory byly w dotyku z lementem

// dodajemy DOMContentLoaded który będzie sledzil zeby uruchomic skrypt jak juz beda sformowane wszystkie html nody
window.addEventListener('DOMContentLoaded', () =>{
    // dostajemy elment z html ktorym bedziemy pracowac
    const box = document.querySelector('.box');

    // dodajemy zdazenie do elementu
    box.addEventListener('touchstart', (e) => {
        // dodatkowo, rekomendowane jest usuwac standardowe dzialania przegliadark na element 
        // przed ropoczenciem dzialania z naszym elmentem
        e.preventDefault();

        // wyswietlimy start w momecie jak bedzie klik na elmenent
        // dzialac bedzie tylko w trybie przegliadaki mobile view, bo myszke ono nie bedzie sledzic tylko dotyk 
        console.log('Start');
        
        // wyswietli liczbe - ile palcow zostalo dotknietych do danego elemnta
        console.log(e.touches);
        // tak jak wyzej tylko ba inna strukture, takze sledzi ile palcow zostalo wykorzystano przez uzytkownika
        // w stosunku do elementa
        console.log(e.targetTouches);
        
    });

    // trzeba zacisnac myszke w trybie mobile view i prowadzic po elemencie, wtedy zaczen dzialac zdarzenie
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    // zdarzenie touchmove w polaczeniu z wlasciowoscia .targetTouches[0] i pageX
    // bedzie sledzic pierwszy palec i kiedy jego koordynaty na ekranie kiedy 
    // bedzie on sie zacisnienty ruchac sie w przedziale elementu box
    // koordynaty takie mozna wykorzystac do tego ze jesli zajde uzytkownik za jakies koordynaty to trzeba np. zmienic slader
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // zadziala jak zabierzemy palec z elementu
    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

