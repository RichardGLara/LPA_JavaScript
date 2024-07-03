const prompt = require("prompt-sync")()             //Add o pacote ao programa
const veiculo = prompt("Veículo: ")                 //Lê os dados de entrada
const preco = Number(prompt("Preço: "))
const entrada = preco * 0.5                         //Calcula valor da entrada
const parcela = (preco * 0.5) / 12                  //Calcula valor das parcelas
console.log(`Promoção: ${veiculo}`)                 //Exibe as respostas
console.log(`Entrada de R$ ${entrada.toFixed(2)}`)
console.log(`+12X dde R$ ${parcela.toFixed(2)}`)
