"use strict"

//Modificando o valor da variável se precisar realizar o casting
let algumacoisa = 10

console.log(algumacoisa)

algumacoisa = "Rodrigo"

console.log(algumacoisa)




//Testando a diferença de acesso entre var e let
function teste(){
    let nome = "Rodrigo"
    if(true){
        console.log("Dentro do IF do teste: " + nome)
    }
    console.log("Dentro do teste: " + nome)
}

teste()

console.log("Fora do teste: " + nome)
