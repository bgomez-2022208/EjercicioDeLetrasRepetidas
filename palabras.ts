let a: string = "mama";
let e: string = "papa";

let A: string[] = a.split("");
let E: string[] = e.split("");

let UnicasDeMama: string[] = A.filter(letra => E.indexOf(letra) === -1);
let UnicasDePapa: string[] = E.filter(letra => A.indexOf(letra) === -1);

//letras que tiene papa que no tiene mama
console.log(UnicasDePapa);
//alrevez
console.log(UnicasDeMama);
