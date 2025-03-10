const prompt = require("prompt-sync")()
const produto = prompt("produto: ")                     //Lê o nome do produto e...
const num = Number(prompt("Numero de Etiquetas: "))     //Quantidade de etiquetas

//Cria um laço de repetição ate NUM/2 (pois imprime 2 etiquetas por linha)
for (let i=1; i<= num/2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`) 
}

if (num%2 == 1) {                                       //se quantidade solicitada de etiquetas for impar...
    console.log(produto)                                //imprime mais uma etiquetas)
}