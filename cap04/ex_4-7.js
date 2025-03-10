const prompt = require("prompt-sync")()                 //adiciona o pacote PROMPT-SYNC
const pessoas = Number(prompt("N° de Pessoas: "))       //lê dados de entrada
const peixes = Number(prompt("N° de Peixes: "))           //lê dados de entrada

let pagar                                               //declara variavel pagar
if (peixes <= pessoas) {                                //condição
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$ ${pagar.toFixed(2)}`)             //exibe o valor a ser pago