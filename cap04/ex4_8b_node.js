const prompt = require("prompt-sync")()                         //Add pacote prompt-sync
const velPermitida = Number(prompt("digite a velocidade permitida: "))
const velCondutor = Number(prompt("digite a velocidade do condutor: "))

if (velCondutor <= velPermitida) {
    console.log("SEM MULTA...")
} else if (velCondutor <= (velPermitida * 1.2)) {
    console.log("MULTA LEVE!")
} else {
    console.log("MULTA GRAVE!!!")
}