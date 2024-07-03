const prompt = require("prompt-sync")()                     //Add o pacote ao programa
const pesoKg = Number(prompt("Peso da Ração (Kg): "))       //Lê dados de enmtrada
const consumo = Number(prompt("Consumo Diário (gr)"))
const pesoGr = pesoKg * 1000                                //Cria variável auxiliar pesoGr
const duracao = Math.floor(pesoGr / consumo)                //Calculo das respostas
const sobra = pesoGr % consumo
console.log(`Duração: ${duracao} dias`)                     //Dados de saída
console.log(`Sobra: ${sobra}gr`)