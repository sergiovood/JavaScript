<?php

// Dodajemy backend rzeby sprawdzicz dzialanie naszej metody POST
echo var_dump($_POST); // wyswietlimy zrzyt,zawartosc(tluczmaczenia slowa: dump) super globalnej tablicy danych $_POST
// Po prostemu: $_POST bierze dane ktore dostala od klienta (czuli z frontendu) przeksztawca ich string i z spowrotem zwraca do klienta, zeby mozna bylo sprawdzic zawartosc w formie tekstu przejmowanych danych
// jest to wlasnie response(odpowiedz - lesson-52) ktory przychodzi od serwera.
// Zeby dziala wszystko projekt trzeba uruchomiac na lokalnych serwerach ktore obsuguja metod POST, czyli na OPEN SERVER, a nie na liveServer w w visualStudio (on tylko metod GET obsluguje)
