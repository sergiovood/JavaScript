"use strict";

//Lesson 24 - refaktoring koda 
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Ile filmów już wiedziałeś?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Ile filmów już wiedziałeś?', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (10 < personalMovieDB.count <= 30){
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            alert("Вы киноман");
        } else{
            alert("Произошла ошибка");  
        }
    },
    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
     },
     toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
     //wyswietlamy w konsoli wynik dla sprawdzenia poprawnosci zapisanych danych
    //najpier sprawdzamy prywatnosc danych przed wyswietleniem
     writeYourGenres: function() {
        //Standardowy wariant zapisu:
            // for (let i = 1; i < 4; i++) {
            //      const userGenres = prompt(`Ваш любимый жанр под номером: ${i}`);
            //      personalMovieDB.genres[i - 1] = userGenres;
            //  }
            //Lepszy warian zapisu, bez tworzenia dodatkowych zmiennych, mniej kodu.
             for (let i = 1; i < 2; i++) {
                // let genre = prompt(`Ваш любимый жанр под номером: ${i}`); // [i-1] - trzeba podac zeby zapis w array zaczynala sie od 0
                
                // if(genre === '' || genre == null) {
                //     console.log('Wprowadziles niepoprawne dane lub nie podales zadnych danych');
                //     i--;
                // } else {
                //     personalMovieDB.genres[i - 1] = genre;
                // }

                let genres = prompt(`Wprowadz swoje ulubione gatunki filmow przez przecinek`).toLocaleUpperCase();
                if(genres === '' || genres == null) {
                    console.log('Wprowadziles niepoprawne dane lub nie podales zadnych danych');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
            }   
                
            personalMovieDB.genres.forEach((item, i) => {
                     console.log(`Любимый жанр ${i + 1} - ${item}`);
                 });
                //bo jesli nie podamy, zapis zaczynac sie bedzie od 1, bo w naszym cykle for startujemy od 1. 
            }
        

    }
};
