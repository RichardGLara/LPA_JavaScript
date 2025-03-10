const prompt = require("prompt-sync")()                 //add pacote PROMPT-SYNC
const pesoKg = Number(prompt("Peso da ração (Kg): "))   //lê os dados
const consumo = Number(prompt("Consumo diário (gr): "))

const pesoGr = pesoKg * 1000                            //cria variavel auxiliar 'pesoGr'
const duracao = Math.floor(pesoGr / consumo)            //calculo da resposta
const sobra = pesoGr % consumo  
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)