const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor da compra R$: "))
const aux = Math.floor(valor / 20)
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux                           //*** Operador ternário ***
const valorParcela = valor / parcelas
console.log(`Pode pagar em ${parcelas}X de R$ ${valorParcela.toFixed(2)}`)

/*  A equivalencia do OPERADOR TERNÁRIO, para codigo comum:

let parcelas
if (aux = 0) {
    parcelas = 1
} else if (aux > 6) {
    parcelas = 6
} else {
    parcelas = aux
}

*/