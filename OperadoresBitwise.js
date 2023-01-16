"use strict"

//Operadores que operam no bit a bit dos elementos, deslocando ou operando esses valores
// & - quando há equivalência de 1 ele retorna um
// | - independente se há equivalência de 1 - ele retorna 1 quando existir em um dos elementos
// ^ - operador exclusivo
// >> - desloca os bits do elemento para a direita - o lado direito completa com 0 - Divide o valor 
// << - desloca os bits do elemento para a esquerda - o lado esquerdo completa com 0 - Dobra o valor

let n1 = 10

//O valor 1 é a quantidade de bits que se quer deslocar - pode ser inserido 1, 2, 3...
let resultado = n1 >> 1 //divide
let resultado2 = n1 << 3 //dobra

console.log(resultado)
console.log(resultado2)

 

