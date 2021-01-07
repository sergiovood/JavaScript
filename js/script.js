"use strict";

// Lesson 15 - Zadanie czesc 2
/*1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Ile filmów już wiedziałeś?', '');

let num = 0,
    a = '',
    b = '';

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};  


while (num < 2){
    a = prompt('Jaki film ostatnio widziałeś?', '');
    b = prompt('Jaką ocenę zasługuje film?', '');
    if (a != '' && b != '' && a != null && b != null && a.length < 50){
        personalMovieDB.movies[a] = b;
        num++;  
    }
}

if (personalMovieDB.count <= 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (10 < personalMovieDB.count <= 30){
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30){
    alert("Вы киноман");
} else{
    alert("Произошла ошибка");  
}

//wyswietlamy w konsoli wynik dla sprawdzenia poprawnosci zapisanych danych
console.log(personalMovieDB);