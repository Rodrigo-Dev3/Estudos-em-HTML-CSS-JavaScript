let numero = 0
let pares = 0

for(let i = numero; i < 10; i++){

    
    if(i % 2 == 0){
        console.log("Numero pulado: " + i)
        continue
    }

    console.log("Numero: " + i)

    pares++
}

console.log(pares);
