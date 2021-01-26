// Lesson 32 - Навигация по DOM - элементам, data-атрибуты, преимущество for/of
// Использование data-* атрибутов - https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Using_data_attributes

// jest pomocne przy implementacji kodu js w html

// dostaniemy body albo head
// console.log(document.body);
// console.log(document.head);

// dostajemy caly html
// console.log(document.documentElement);


//.childNodes - metoda pozwala dostac wszystkie nody(wezle) które znajduja sie w wybranym elemntu(rodzicu)
console.log(document.body.childNodes); // wyswietli wszystkie elementy dom i dom-nody tekstowe w htmlu
// czyli idzie DOM element <body> potem перенос строки text (это и есть тестовый дом узел(нода)), потом идет дом елемент, и тд.

// разница между дом елементом, и дом узлом - все на странице это нода(узел) но не каждая нода есть елементом
// если разбирать глубже то: <ul><li>1</li></ul> - то ul - есть дом лементом - потом перенос строки текстова дом-нода, 
// потом дом елемент <li>, потом текстова дом-нода 1.


// Własciwości: 
// Dostać Pierwsze lub Ostatni child w srodku rodzica
// zwroc uwage ze tutaj zawsze bierzemy od rodzica body
console.log(document.body.firstChild);  // tekstowa noda
console.log(document.body.firstElementChild);  // analog do gornej metody, tylko ze dostaje sie zawszesze element, pomija tekstowe nody
console.log(document.body.lastChild);  // element noda
console.log(document.body.lastElementChild); // analog do gornej metody, tylko ze dostaje sie zawszesze element, pomija tekstowe nody

// komendy pozwalajacy brac elementy od roznych rodzicow
// KOMENDY żeby dostać rodzica, sąsiadów, dzieci elementa w html
console.log(document.querySelector('#current').parentNode); //.parentNode - pozwoli dostac rodzica dla elementa który w niego jest zapisany #current
console.log(document.querySelector('#current').parentElement); // .parentElement - tutaj juz na 100% dostaniemy element node z html a nie tekstowa node
console.log(document.querySelector('#current').parentNode.parentNode); // .parentNode.parentNode - pozwoli od elementa pojsc w gore i dostac rodzica na 2 poziomie

// DATA-ATRYBUTY w kodzie html
// syntaksys: data-+nazwa ktora wymeslamy, np. co bedzie robil albo co zawiera
// np. data-current jest wlozony w tegu html
// data-current="3" - moze zawierac jakies znaczenie
// data-current - jesli bez znaczenia, bedzie prosto boolengowe znaczenia true

//zeby dostac atrybut html, musimy podac w [w kwadratowych nawiasach]
console.log(document.querySelector('[data-current="3"').nextSibling); // .nextSibling - dostac nastepna node, dostaniemy tekstowa node
console.log(document.querySelector('[data-current="3"').previousSibling); // .previousSibling - dostac poprzednia node, tez bedzie tekstowa noda
console.log(document.querySelector('[data-current="3"').nextElementSibling); // .nextElementSibling - dostac nastepny element noda, ten metod juz nie zwroci tekstowej nody, bo zoriontowany na elementy 

// Wszystkie elemnty nody ze strony bez tekstowych node
// konstrukcja for of pomoze przejsc po drzewu DOM i zebrac tylko elementy nody, be text node
for (let node of document.body.childNodes){
    if (node.nodeName == '#text'){  //#text - jest to nazwa tekstowej nody, nie wymyslona, tylko podana w wlasciwosciac: nodeName: "#text" - mozna zobaczyc otwierajac tekstowa node w konsoli przegliadarki
        continue;
    }
    console.log(node);
}