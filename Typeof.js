"use strict"

//Tipos possíveis para retornar em um typeof

let v1 = 10 //Qualquer valor do tipo numérico terá como retorno 'number' - mesmo que for de ponto flutuante, inteiro, etc.
let v2 = "10" //parece o mesmo dado anterior, mas é do tipo diferente
let v3 = v1 === v2
let v4 = {nome:"Rodrigo"}

console.log(typeof(v1))
console.log(typeof(v2))
console.log(typeof(v3))
console.log(typeof(v4))