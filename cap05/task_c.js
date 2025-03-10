function verificarNumeroPerfeito(numero) {
    let somaDivisores = 0;
    let divisores = [];
    
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
            somaDivisores += i;
        }
    }
    
    console.log(`Divisores de ${numero}: ${divisores.join(", ")}`);
    console.log(`Soma dos divisores: ${somaDivisores}`);
    
    if (somaDivisores === numero) {
        console.log(`${numero} é um número perfeito!`);
    } else {
        console.log(`${numero} não é um número perfeito.`);
    }
}

// Entrada do usuário
const prompt = require("prompt-sync")()
const numero = parseInt(prompt("Digite um número para verificar se é perfeito:"));
verificarNumeroPerfeito(numero);