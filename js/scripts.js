// scripts.js

var a = prompt('Podaj a');
var	b = prompt('Podaj b');
var	wynik = (a * a) - (2 * a * b) - (b * b);

alert("Wynik (a * a) - (2 * a * b) - (b * b) wynosi " + wynik);

if (wynik > 0) {
	alert("Wynik jest dodatni");
} else if (wynik < 0) {
	alert("Wynik jest ujemny");
} else{
	alert("Wynik jest zerowy");
}
