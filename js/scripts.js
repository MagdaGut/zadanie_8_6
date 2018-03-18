// scripts.js

var a = prompt('Podaj a');
var	b = prompt('Podaj b');
var	wynik = (a * a) - (2 * a * b) - (b * b);

alert("Wynik (a * a) - (2 * a * b) - (b * b) wynosi " + wynik);

var whatIsValue = wynik >= 0 ? "Wynik jest dodatni" : "Wynik jest ujemny";
alert(whatIsValue);