<?php

// Dodajemy backend rzeby sprawdzicz dzialanie naszej metody POST

// Standardowo php nie umie dzialac z formatem JSON
// dlatego bedziemy dekodowac format
// WAZNE: jesli chcemy przetestowac wyswanie danych przez FormDate(), a nie w JSON to musimy zakomentowac 8 linijke. 
$_POST = json_decode(file_get_contents("php://input"), true); // wszystko vco przychodzi od KLienta my bedziemy dekodowac za pomoca json_decode(w srodku konstrukcja)
echo var_dump($_POST); // wyswietlimy zrzyt,zawartosc(tluczmaczenia slowa: dump) super globalnej tablicy danych $_POST
// Po prostemu: $_POST bierze dane ktore dostala od klienta (czuli z frontendu) przeksztawca ich string i z spowrotem zwraca do klienta, zeby mozna bylo sprawdzic zawartosc w formie tekstu przejmowanych danych
// jest to wlasnie response(odpowiedz - lesson-52) ktory przychodzi od serwera.
