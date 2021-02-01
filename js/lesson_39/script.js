'use_strict';

// Lesson 39 - Скрипты и время их выполнения. 
// setTimeout - ile czasu poczekac zeby wykonac kod
// setInterval - co jaki czas wykonywac kod
// clearInterval - przerwac i wycziscic wykonanie dla setInterval lub setTimeout
// JavaScript-анимации -  https://learn.javascript.ru/js-animation

// dostajemy przycisk z html
const btn = document.querySelector('.btn');
let timeIdThree, // oglaszamy nowe globalne zmienne gtore bedziemy wykorzystywac w srodku funkcji
    i = 0;

// setTimeout(1argument, 2argument) - 1 argument to co trzeba zrobic, 2 argument za ile czasu, jesli nie podac to bedzie natychmiast wykonane 
const timeIdOne = setTimeout(function() { // w srodku jako argument callback funkcja ktora zwroci slowo hello one
    console.log('Hello One'); 
}, 2000); // wyswietlic to co wykona funkcja po 2 sekundach w konsoli

// setTimeout(1 argument, 2 argument, 3 argument) 
const timeIdTwo = setTimeout(function(text) { // 1 argument funkcja ktora pobiera znaczenia z 3 argumentu w setTimeout
    console.log(text);
}, 3000, 'Hello Two'); // 2 argument 3000 - wykonac po 3 sekundach funkcje. 
// 3 argument to znaczenie ktore bedzie przeslane do 1 argumentu i wykonane w funkcji.


// do przycisku podlaczamy sledzenie zdazenia click
// btn.addEventListener('click', () => {
//     // const timeIdTree = setTimeout(logger, 2000);
//  // w zmiennej timeIdThree bedziemy zapisywac unikalny indentyfikator 
//  //ktory tworzy  setTimeout lub setInterval, zeby potem mozna bylo do niego odlowac sie i przerwac dzialanie funkcji
//     timeIdThree = setInterval(logger, 500); // po wcisnienciu przycisku na stronie, setInterval bedzie wykonywac funkcje logger co pol sekundy
// });

// tworzymy funkcje logger ktora bedzie wlaczana sie co pol sekundy przez powyzszy setInterval, jesli zostanie klikniety przycisk na stronie
// function logger () {
       // ustawiamy licznik zeby przerwac wykonanie interwalu w pewnym momencie, zeby nie bylo w nieskonczonosc
//     if (i === 3){ 
//         clearInterval(timeIdThree); // w srodek przekazujemy zmienna ktora posiada unikalny indentyfukator setInterval ktory musimy przerwac w dzialaniu
//     }
//     console.log('text'); // wyswietlamy 4 razy text, potem zadziala powyzszy warunek i wyczysci setInterval
//     i++; // powiekszamy licznik 
// }

// funkcja ktora moze dzialac w nieskonczonosc bo sama siebie przyjmuje i wykonuje
// ten zapis zawsze wykona funkcje w calosci, potem dokladnie ODCZEKA pol sekundy i znowu zacznie wykonanie
// jest to rozwiazanie lepsze od setInterval przy duzym skrypcie ktory ma sie wykonac w srodku niego, 
// bo jesli w setInterval znajdujesie ciezka funkcja ktora bedzie wykonywac sie dluzej niz setinterval ma odczekac
// zeby ponownie ja uruchomic, to on juz nie bedzie czekal pol sekundy tylko wlicze ich do czasu wykonania funkcji i zacznie uruchamiac ja odrazu bez odczekania
// UWAZAC NA TO

// po wykonaniu sie po odczekaniu pol sekundy funkcja log() i wyswietli w konsoli log
// potem nizej w zmienna id przekaze znowu funkcje log() i wykonanie za pol sekundy, po czym wyswietli hello i znowy przekaze siebie
// i tak bedzie czaly czas
// let id = setTimeout(function log(){ 
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);

// Tworzymy animacje niebieskiego kwadracika w bloku na stronie
// od momentu powstania css3 wszystkie animacje tworzone w css a nie w js bo jest latwiej,
// ten przyklad pokazuje ze jednak mozna tez tworzyc w js jak dawniej, ale sa tu takze duzo nie dorobien do idealnej animacji
function myAnimation() {
    // niebieski blok wyciagamy z html za pomoca jego klasy
    const elem = document.querySelector('.box');
    let pos = 0;  // lokalna zmienna ktora bedzie sie zmieniac dla uzyskania animacji, start od 0

    const id = setInterval(frame, 10);  // przekazujemy funkcje ktora ma byc wykonana po 0,1 sekundy po tym jak zostanie przycisk wcisnienty
    function frame() {
        if (pos == 300){  // warunek w ktorym moncie bedzie wyczyszczony proces wykonania setInterval
            clearInterval(id); // w id zapisany jest setInterval wlasnie tam mamy na niego wplyl, czyli stop wykonaniu
        } else { 
            pos++;  // zwiekszamy o 1
            // wykorzystujemy o 1 wieksza liczbe w dynamicznie zmianie stylow na stronie dla elemnta box
            // tutaj zaczyna sie ruch elemnta
            // bedzie sie powtazac 300 razy, az poki nie zostanie wyczyszczony setInterval przez powyzszy warunek
            elem.style.top = pos + 'px'; // odbicie elementa od swojego rodzica od gory o 1 px
            elem.style.left = pos + 'px'; // odbicie elementa od swojego rodzica z lewej strony o 1 px
        }
    }
}

btn.addEventListener('click', myAnimation); // podlaczamy do przycsiku sledzenie za klikiem na stronie i od odrazu wlaczamy funkcje animacji.