var a = "mama";
var e = "papa";
var A = a.split("");
var E = e.split("");
var UnicasDeMama = A.filter(function (letra) { return E.indexOf(letra) === -1; });
var UnicasDePapa = E.filter(function (letra) { return A.indexOf(letra) === -1; });
//letras que tiene papa que no tiene mama
console.log(UnicasDePapa);
//alrevez
console.log(UnicasDeMama);
