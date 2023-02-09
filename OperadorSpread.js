"use strict"

let n1 = [10, 30, 50]
let n2 = [11, 31, 51]
let n3 = [22, 55, 60]
let n4 = [...n1,...n2,...n3]

console.log(n4)

//Em objetos copiará os iguais e irá acrescentar os diferentes de cada objeto
const jogador1 = {nome:"João", velocidade: 100, vidas: 5, magia: 50}
const jogador2 = {nome: "Cleber", velocidade: 100, vidas: 3, energia: 150}

const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)

//Em funções
const soma = (v1, v2, v3) =>{
    return v1 + v2 + v3
}

let valores = [1, 3, 5]

console.log(soma(...valores))


//Em coleções de elementos HTML
const objs = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]


//console.log(objs)
console.log(objs2)

for(let i = 0; i < objs2.length; i++){
    console.log(objs2[i])
}
