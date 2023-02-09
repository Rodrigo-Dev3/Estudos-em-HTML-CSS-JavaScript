let numeros = [10, 20, 30, 40]

// for(posicao in numeros){
//     console.log(numeros[posicao])
// }

// for(posicaoValores of numeros){
//     console.log(posicaoValores)
// }

//Utilizando com elementos da página HTML
const objetos = document.getElementsByTagName('div')

for(obj in objetos){
    console.log(objetos[obj].innerHTML)
}

for(obj of objetos){
    console.log(obj.innerHTML)
}