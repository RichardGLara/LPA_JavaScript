const prompt = require("prompt-sync")()         //Add pacote de entrada de dados
const num1 = Number(prompt("1º número: "))      //Lê os números
const num2 = Number(prompt("2º número: "))
const soma = num1 + num2                        //Calcula a soma
console.log(`A soma é: ${soma}`)