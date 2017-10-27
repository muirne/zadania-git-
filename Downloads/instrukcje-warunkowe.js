var min = 1;
var max = 100;
var number = Math.random() * (max - min) + min;
if (number >= 50) {
    console.log("Hurra");
} else {
    console.log("Liczba mniejsza niż 50");
}

//zadania same

//1)
var a = 10;
var b = 20;
if (a > b) {
    console.log("A jest większa");
} else if (b > a) {
    console.log("B jest większa");
} else {
    console.log("A jest równe B");
}



//3)
var menAge  = 35;
var pet = "pies"; //kot
var petAge = 2;

if (pet == "pies") {
    petAge = 2 * 7;
}