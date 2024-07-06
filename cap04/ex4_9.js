const prompt = require("prompt-sync")()                         //Add pacote prompt-sync
const numero = Number(prompt("Digite um numero (centena): "))   //Lê o numero digitado

if (numero < 100 || numero >= 1000){                             //Verifica erro
    console.log("ERRO... Você deve digitar uma centena")        //Exibe mensagem de erro
    return
}

const numero1 = Math.floor(numero / 100)                           //Obtem 1º numero
const sobra = numero % 100                                      //Guarda o q sobra

const numero2 = Math.floor(sobra / 10)                             //Obtem o 2º numero a partir da sobra

const numero3 = sobra % 10                                         //Obtem o 3º numero a partir da sobra

console.log(`Invertido: ${numero3}${numero2}${numero1}`)        //Exibe o numero invertido