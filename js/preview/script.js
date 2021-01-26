//  Lesson - 31 
// События - это сигнал от браузера что чтото у нас призешлоб это:
// клик, двойной клик, прокрутка колесека миши, нажатие клавиши и тд.
// Шаблон такой:
// Собития по стороне пользьвотеля (кли на что-то) -> запускается функция котороя обрабатывает собитие, например отправляет даные в базу
// Собития в джаваскрипте выполняютьсяв порядке очереди

const btn = document.querySelector('button'), 
      btns = document.querySelectorAll('button'),      
      overlay = document.querySelector('.overlay');

// В джаваскрипте всего 3 способа назначить обработчика событий
// 
// 1.(Почти никогда не используеться)
// Использовать html атрибут кторый записуеться в верстке html 
// <button onclick="alert('Click')" id="btn" >Нажми меня</button>
//
// 2. (Почти никогда не используеться)
// Использовать свойство DOM дерева для использование события

 //birzemy selector button z html
// btn.onclick = function() {  //dodajemy zdarzenie onclick i funkcje która wykona się dokładnie po kliku elemntu
//     alert('Click');
// };
// malo bezpieczny bo po wykonaniu zawsze istnieje, 
// jesli dublowac kod i wyswietlic Second klik, to zadziala tylko ostatni zdubluwoany kod, co moze uszkodzic funkcjonalnosc projektu

// 3. Metoda (Najbardzie wykorzystywana)

// .addEventListener('nazwa zdarzenia wybrac z istaniajacych', callback funkcja ktora bedzie obrabiac zdarzenie); - sledzi za elmentami
// btn.addEventListener('click', () =>{
//     alert('Click');
// });
// bedzie dzialac i pierszy Click i Second Clik
// btn.addEventListener('click', () =>{
//     alert('Second Click');
// });

// dodajemy zdarzenie mouseenter - nakierowanie stralki na przycisk
// event lub skrocona e - argument dla callback funkcji jako pierwszy argument(nazwa moze byc dowolna)
// jesli potrzebujemy jeszcze jakis argument do funkcji który naprzyklad bedzie pobieral tekxst od uzytkownika, to zapisujemy na drugim miejscu, a pierwszym zawsze bedzie objekt zdazenia
// btn.addEventListener('mouseenter', (e) =>{
//     console.log(e.target); //wyswietli w konsoli element w calosci z ktorym mozna dalej pracowac
//     e.target.remove(); //np usunac ze strony
// });
// jesli skopjowac i wstawic takie same zdarzenie jak wyzej to beda to dwa roznych zdazenia
// dlatego zeby USUNAC potrzebne nam zdarzenie, musimy jego najpierw zapisac do zmiennej 
// const deleteElement = (e) => {
//     e.target.remove();
// };


// USUWANIE ZDAZEN
// .removeEventListener('nazwa zdarzenia z istniajacych', nazwa zmiennej gdzie jest funkcja ktora usuwa element);
// btn.removeEventListener('mouseenter', deleteElement); //deleteElement bez () na koncu, bo tedy my tylko linkujemy do niej a nie wylolamy.

// Usuwamy zdazenie z przycisku po tym jak zostanie raz wylowane zdazenie
// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('mouseenter');
//     }};


// СПЛЫТИЕ СОБЫТИЙ, не путать со сплитием переменных
// это когда срабатывает событие сначала на вложеном елементе, потм на родителе если он у него есть, а потом выше по иерархии в дереве DOM 
// <div class="overlay">  - здесь присутвуствует событие 
//        <button id="btn" >Нажми меня</button> - и здесь
//  </div>
// сначала сработает событие то что в середине(кнопка) а дальше вверх по иерархии DOM сработает следуещее тоесть клас оверлай.
const deleteElement = (e) => {
    //посмотрим в консоли работу события
    console.log(e.target); //выводит события, часто используюется
    //console.log(e.currentTarget); //выводит события всплывающие попорядку, редко используеться
    console.log(e.type); //выводит назву сработающего событияб тоесть mouseenter - наведения мыши
};
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// САМЫЙ ПРАВИЛЬНЫЙ СПОСОБ назначать обработчик событий когда нужно поставить его сразу на несколько елементов в коде
btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true}); //{once: true} на конце - это алтернатива методе removeEventListener(); 
    // чтобы не писать конструкции как выше, а только передать как опции и отменить сразу действие по его использовании
    // иногда в коде можна встетить как третий аргуммент - false (в вверхнем методе), что значит что мы не передаем опции 
});
// Отмена стандартных событий в браузере
// например: клик на сылку, выдиление текста и так далее
// .preventDefault(); - metoda do odmiany zdazen w przegliadarce
const link = document.querySelector('a'); //pobieramy link z ktorym bedziemy dalej dzialac
// usuwamy standardowe zdazenie w przegliadarce co do linku, czyli nie bedziemy po nim przechodzic jak w niego klikniemy
// czesto wykorzystywane kiedy programisci buduja aplikacje i nie chca za kazdym razem gdzies przechodzic dalej, atylko sprawdzaja funkcjonalnosc produktu
link.addEventListener('click', function(event){
    event.preventDefault(); //zawsze na poczatku w kodzie

    console.log(event.target); //zobaczy w kosoli co sie wydazy
});
