const prompt = require("prompt-sync")()             //Adiciona pacote para entrada de dados
const num1 = Number(prompt("Primeiro número: "))    //Lê o numero digitado
const num2 = Number(prompt("Segundo numero: "))     //
const soma = num1 + num2                            //Calcula a soma
console.log(`A soma é: ${soma}`)