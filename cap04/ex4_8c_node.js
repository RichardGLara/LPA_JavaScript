const prompt = require("prompt-sync")()                         //Add pacote prompt-sync
const valor = Number(prompt("Digite o valor depositado: "))


if (valor < 1 ){
    console.log("valor Insuficiente...")
} else if (valor < 1.75){
    let troco = valor - 1
    console.log("Tempo: 30 minutos")
    console.log(`troco: R$ ${troco.toFixed(2)}`)
} else if (valor < 3){
    let troco = valor - 1.75
    console.log("Tempo: 60 minutos")
    console.log(`troco: R$ ${troco.toFixed(2)}`)
} else {
    let troco = valor - 3
    console.log("Tempo: 120 minutos")
    console.log(`troco: R$ ${troco.toFixed(2)}`)
}