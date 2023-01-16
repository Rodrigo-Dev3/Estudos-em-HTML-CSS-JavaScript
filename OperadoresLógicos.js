"use strict"

// && -> and
// || -> or 
// ! -> not 

let n1, n2, n3, n4

n1 = 5
n2 = 2
n3 = 6
n4 = 10

//Retorna false pois não confirma a condição do operador '&&'
console.log((n1 > n2) && (n3 > n4))

//Retorna true pois confirma uma das condições do operador '||'
console.log((n1 > n2) || (n3 > n4))