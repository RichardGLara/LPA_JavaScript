const prompt = require("prompt-sync")()                 //adiciona pacote PROMPT-SYNC
const numero = Number(prompt("Numero (centena): "))     //lê o numero
if (numero < 100 || numero >= 1000) {
    console.log("ERRO... Deve ser uma centena")
    return
}

const num1 = Math.floor(numero / 100)                   //obtem o 1º numero
const sobra = numero % 100                              //o que sobra (dezena)
const num2 = Math.floor(sobra / 10)                     //obtem o 2º numero
const num3 = sobra % 10                                 //obtem o 3° numero (unidade)

console.log(`Invertido: ${num3}${num2}${num1}`)