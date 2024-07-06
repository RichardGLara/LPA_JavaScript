const prompt = require("prompt-sync")()                         //Add pacote prompt-sync
const ladoA = Number(prompt("Diigte a medida do lado A: "))
const ladoB = Number(prompt("Digite a medida do lado B: "))
const ladoC = Number(prompt("Digite a medida do lado C: "))

if (ladoA == ladoB && ladoB == ladoC) {
    console.log("Os lados formam um triângulo EQUILÁTERO.")
} else if (ladoA >= (ladoB + ladoC) || ladoB >= (ladoC + ladoA) || ladoC >= (ladoA + ladoB)){
    console.log("Os lados não podem fornmar um triângulo...")
} else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA){
    console.log("Os lados formam um triângulo ISÓSCELES.")
} else {
    console.log("Os lados formam um triângulo ESCALENO.")
}