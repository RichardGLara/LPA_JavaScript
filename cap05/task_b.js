function crescimentoChinchilas(inicial, anos) {
    if (inicial < 2) {
        console.log("O número inicial de chinchilas deve ser pelo menos 2.");
        return;
    }
    
    let populacao = inicial;
    console.log(`Ano 1: ${populacao} chinchilas`);
    
    for (let ano = 2; ano <= anos ; ano++) {
        populacao *= 3; // A população triplica a cada ano
        console.log(`Ano ${ano}: ${populacao} chinchilas`);
    }
}

// Entrada do usuário
const prompt = require("prompt-sync")()
const inicial = Number(prompt("Digite o número inicial de chinchilas:"));
const anos = Number(prompt("Digite a quantidade de anos:"));

// Chamada da função
crescimentoChinchilas(inicial, anos);
