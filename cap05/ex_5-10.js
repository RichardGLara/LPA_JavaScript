const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor a vista: "))                 //Lê o valor do pagamento a vista...
const numParc = Number(prompt("Numero de parcelas: "))          //e numero de parcelas
const valParc = Math.floor(valor / numParc)                       //calcula valor sem decimais
const parcFinal = valParc + (valor % numParc)                   //calcula parcela final

for (let i=1; i<numParc; i++){
    console.log(`${numParc}ª parcela: R$ ${valParc.toFixed(2)}`)
}
console.log(`${numParc}ª parcela: R$ ${parcFinal.toFixed(2)}`)    //valor da ultima parcela