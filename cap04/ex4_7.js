const prompt = require("prompt-sync")()
const pessoas = Number(prompt("Nº de Pessoas: "))
const peixes = Number(prompt("Nº de peixes: "))

if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$ ${pagar.toFixed(2)}`)