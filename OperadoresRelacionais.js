"use strict"

let numeroUm = 10
let numeroDois = 20

//Como no javascript o casting é feito automaticamente, é possível realizar a verificação de um Boolean somente utilizando os operadores relacionais
console.log(numeroUm <= numeroDois)
console.log(!(numeroUm > numeroDois))

//Operador relacional que também avalia o tipo de dado, se é exatamente igual (número, propriedades e valor) ao outro dado avaliado
console.log(numeroUm === numeroDois)

//Crio dois objetos para serem comparados utilizando o operador ===
let nomeUm = {nome: "Rodrigo"}
let nomeDois = {nome: "João"}

//O resultado retorno false pois embora os objetos sejam iguais, o endereço de memória (referência) é diferente
console.log(nomeUm === nomeDois)

//Neste caso retorna true pois os endereços de memória são iguais
nomeDois = nomeUm
console.log(nomeUm === nomeDois)