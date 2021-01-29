// Lesson - 33
/* 
Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту
 */

'use strict';

// DOMContentLoaded + callback funkcja -  свойство отвечает за запуск всех скриптов 
// после того как построилась ДОМ структура
// остальные картинки, скрипты, стили будут подгружатся потом в фоновом режиме, но для нашого скрипта главное чтоб ДОМ 
// елементы уже были загружены перед тем как он начнет выполнятся браузером
// Помещаем наш весь джаваскрипт в ето событие 
document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const ads = document.querySelectorAll('.promo__adv img'),
          promoBg = document.querySelector('.promo__bg'),
          genres = document.querySelector('.promo__genre'),
          filmList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addingInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    
        //   console.log(filmList, addForm, addingInput);
    // submit - sledzi czy przycisk zostal wcisnienty
    addForm.addEventListener('submit', (event) => {
        // usuwa domyslne zachowanie dla przeglidarki, 
        // czyli po wcisnienciu przycisku strona nie bedzie sie ponownie ladowac
        event.preventDefault(); 

        let newFilm = addingInput.value;
        // sprawdamy czy czekbox zostal zaznaczony przez uzytkownika 
        // za pomoca metody .checked
        const favorite = checkbox.checked;

        // Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"
        // wykonasie tylko jesli zmienna favorite ma cos tam zapisane znaczy ze ma true
        if (favorite){
            console.log("Добавляем любимый фильм");
        }

        //sprawdzamy czy newFilm zawiera jakis film true or false
        if (newFilm) {

             // jesli nazwa dluzsza niz 21 sy,bol to usuwamy ogon i dodajemy ...
            if (newFilm.length > 21) {
               
                //Sposob 1
                //newFilm = newFilm.slice(0, 21) + '...';
                
                //Sposob bardziej perspektywny z wykorzystaniem interpolacji `${}`
                newFilm = `${newFilm.slice(0, 21)}...`;
            }

            // dodajemy film do tablicy po wprowadzeniu przez uzytkownika
            movieDB.movies.push(newFilm);
            //sortujemy filmy wyzywajac funkcje
            sortArr(movieDB.movies);
            // tworzymy nowa tablice z filmami wyzywajc funkcje
            createMovieList(movieDB.movies, filmList);
        }

        event.target.reset();
    });
          
    
    //1 Usuniecie banerow reklamowych ze strony
    // zeby funcka byla bardziej niezalezna
    // bedziemy przyjmowac argument arr
    // dzialac w srodku z argumentem,
    // nizeli przyjmowac odrazu jakis element ze strony bezposrednio
    // dlatego wyzywamy funkcje na koncu i przekazujemy ergument ktory chcemy 
    const deleteAds = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
    
        //2  zmiana napisu komedia na drama
        genres.textContent = 'Drama';
        
        //3 zamiana baneru na inny
        //ver 1
        //promoBg[0].style.cssText = 'background-image:url(../project/img/bg.jpg)';
        
        //ver 2
        promoBg.style.backgroundImage = 'url("../project/img/bg.jpg")';
        
    };

    const sortArr = (arr) => {
        arr.sort();
    };
  
    //dodajemy filmy dynamicznie z powyzszej tablicy oraz dodajemy numeracje 
    // ta funkcje bedziemy wykorzystywac w addForm na pocztku kodu
    function createMovieList(films, parent) {
        //wyciscimy blok przed dodaniem filmow
        parent.innerHTML = "";
        //sortujemy filmy ktore dostalismy
        sortArr(films);
        // dodaje filmy po kolei
        films.forEach((film, i) => {
            // dodajemy filmy po kolei
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        // usuwamy film z listy po kliknieciu przycisku delete
        // zbieramy wszystkie przyciski do tablicy i liczymy pod jakim numerem        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            // sledzimy moment wciskania na przycisk
            btn.addEventListener('click', () => {
                // usuwamy rodzica przycisku, czyli element <li> z html
                btn.parentElement.remove();
                // usuwamy z tablicy 1 konkretny element pod liczba przycisku ktora wyliczywa powyzsza funkcja
                movieDB.movies.splice(i, 1);
                // korzystamy z powyzszej funkcji zeby ponownie sortowac po kolei filmy po usunieciu
                createMovieList(movieDB.movies, filmList);  // РЕКУРСИЯ - когда функция вызывает сама себя в середине           
            });
            
        });
    }


    // deleteFilms(movieDB.movies, filmList);
    deleteAds(ads);
    makeChanges();
    // передаем актульный список фильмов с таблицы и второй аргумент это помещаем список на страницу
    createMovieList(movieDB.movies, filmList);
    
});