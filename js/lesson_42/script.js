'use strict';

// Lesson 42 - Параметры документа, окна и работа с ними 
// FOTO tlumaczenie dzilania parametrow  - https://drive.google.com/file/d/1eTxWzmaDfN0CXHC7Dv_AE39A1GlNO1nI/view

// document - jest to objekt ktory przechowuje cala html strukture
// window - przestrzen w ktorej widoczny jest document, czyli strona, jesli zmniejszac oknto przekslidarki, lub wyswietlic F12 konsol, to widocznosc bedzie mniejsza 
//          a znaczy rozmiar winodow bedzie zmieniony
// screen - caly MONITOR uzytkownika (w praktyce spotyka sie rzadko). Rozne monitory oznaczaja rozne znaczenia screen
//
// Wlasciwosci:
// .clientWidth
// .clientHeight
// .offsetWidth
// .offsetHeight
// .scrollWidth
// .scrollHeight
// .scrollTop
// .scrollLeft
//
// Metody:
// .getBoundingClientRect()
// .getComputedStyle()

// scrollBy(koordynatX, koordynatY)
// scrollTo(koordynatX, koordynatY)


// zobaczymy wszystkie wlasciwosci i metody, pseudotablicy ktore przechowuje objekt document
console.dir(document); 

const box = document.querySelector('.box'),
      btn = document.querySelector('button');


// clientWidth - wyswietli szerokosc elementu wlacznie z paddingami ale bez borderow i elementu scrolowania na stronie 
const width = box.clientWidth;
// w css mamy wpisane 400 px dla box oraz padding 10px z kazdej strony, czyli razem 420 px szerokosc elemntu
// ale w konsoli dostaniemy 405px szerokosc elemntu, a to dlatego, że -15px zajmuje scroll bar ktory nie jest wliczany kiedy korzystamy z wyliczania za pomoca clientWidth
// PAMIETAC: 
// jesli w css jest dodana wlasciwosc: box-sizing: border-box; dla elemnta u ktorego mierzymy szerokosc za pomoca clientWidth 
// to wtedy padding: 10px; juz bedzie w srodku wliczony w elemncie, czyli szerokosć zostanie 400px, 
// wtedy pod czas mierzenia szerkości za pomoca clientWidth bedzie brana pod uwage 400px ale w srodku bloku zanjduje sie takze scroll bar ktory wynoszi 15px,
// dlatego odliczamy 400 - 15px i mamy wynik 385px szerokosc mierzonego elemntu. box-sizing: border-box; - jest czesto stosowany dla elementow.

// clientHeight - wyswietli wysokosc elementu wlacznie z paddingami ale bez borderow i elementu scrolowania na stronie 
// wysokosc widocznego tekstu w elemncie box
// zasady takie same jak powyzej u clientWidth
const height = box.clientHeight;
console.log(width, height); // wyswietlimy usyzkane dane

// zasady takie same jak wyzej ale:
// offsetWidth i offsetHeight juz beda w siebie wlaczac scrollbar jesli wystepuje, border jesli dodany oraz margin
// liczona jest tylko widoczna czesc w elemncie, ukryta nie bedzie liczona
const widthWithBar = box.offsetWidth;
const heightWithBar = box.offsetHeight;
console.log(widthWithBar, heightWithBar);


// scrollWidth i scrollHeight - licza juz takze ukryte czesci elemntu, czyli razem ze scrolowaniem.
// Zazwyczas wykorzystywany jest scrollHeight, bo strona raczej jest zawsze po dlugosci tworzona a nie w szerokosc.
const allWidth = box.scrollWidth;
const allHeight = box.scrollHeight;
console.log(allWidth, allHeight);


// rozne zachowanie pod czas klikniecia na przycisk w odniesieniu do elementa
btn.addEventListener('click', () => {
    // wyswietli cala dlugosc boxu z tekstem na stronie 
    // box.style.height = box.scrollHeight + 'px';  // ustawimy inline style ktory przekryje css style dla height na ten ktory wyliczy w js 
    console.log(box.scrollTop);  // bedzie odliczal px ile juz my przesli od gory elemnta box za kazdym razem jak klikniemy w przycisk, wtedy wyswietlimy w konsoli 
});

// Koordynaty elemnta na stronie: 
// metod: getBoundingClientRect() - w formie OBJECT wyswietla koordynaty elemnta lewej, prawej gornej i dolnej granicy
// jako ze jest objectem mozna z niego w latwy sposob dostawac potrzebne nam kooordynaty przez odlowanie sie do nazwy linii w objekcie

// w JS koordynaty wyliczaja sie NIE tak jak w CSS
// wyliczanie zaczyna sie od Gornego Lewego kąta okna documentu 

// znaczy ze jesli uzyskujemy koordynat right to bedzie on liczony od lewej granicy documenta do prawej granicy elemnta. |----/--->\ 
// jesli uzyskujemy lewa granice elemnta to od lewej strony documenta do do lewej krawerdzi elemnta |---->/   \
// jesli uzyskujemy gore elemnta na stronie to liczone jest od gory do gornej krawedzi elemnta 
// jesli uzyskujemy dolna granice elemnta na stronie bottom, to liczone jest od gory i do dolnej granicy elemnta


console.log(box.getBoundingClientRect()); // dostaniemy wszystkie granicy elemnta w konsoli
console.log(box.getBoundingClientRect().top); // dostaniemy z objektu gore lementa, czyli ile od gornej granicy dokumenta do gornej granicy elemneta 


// metod: getComputedStyle() 
// PAMIENTAC:
// COMPUTED style to sa style ktore zapisane w .css pliku i podlaczone do strony
// INLINE style to te ktore dodajemy bezposrednio w html w tag elemnta czyli przez style="";

// zobaczymy jakie style z css przymienily sie do wwybranego elementa
const style = window.getComputedStyle(box); 
console.log(style); // wyswietli wszystkie style
console.log(style.display); // wyciagniemy z objektu ten ktory nas interesuje styl, zeby zobaczyc ustawione dla niego znaczenie

// DOCUMENT
// Praca z uzyskaniem znaczen px bezposrednio z documentu strony mozliwa przez objekt documentElement
console.log(document.documentElement.clientWidth); // szerokosc dokumentu w tej chwili, czyli szerokosc strony bez uwzglednienia scrollbara 
console.log(document.documentElement.scrollTop); // ile juz przeslismy po stronie od gory do momentu naszego zatrzymania na stronie

// ustawiamy znaczenie 0 co mowi o tym ze uzytkownik jeszcze nie przewijal strone  
document.documentElement.scrollTop = 0; // mozemy zmianiacz liczbe przejscia po stronie w dol na 0, wtedy skoczymy do gory strony
// w tali sposob jest tworzona strzalka do gory na stronie dla uzytkonika, zeby szybko przewinac


// WINDOW
// scrollBy(koordynatX, koordynatY)
// scrollTo(koordynatX, koordynatY)
// jesli podlaczyc do przycisku to:

window.scrollBy(0, 400); // przeskroluje w dol na 400px
window.scrollTo(0, 400); // przeskroluje w gore na 400px 
