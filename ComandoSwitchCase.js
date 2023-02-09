"use strict"

let pessoa = 2

switch(pessoa){
    case 1:
        console.log("O seu nome é João")
        break;
    case 2: case 3: case 4:
        console.log("O seu nome é muito grande")
        break;
    default:
        console.log("Não sei o seu nome")
        break;
}