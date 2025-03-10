//Informe se o ano digitado é ou não de copa do mundo
//obs: 1942 e 1946 não tiveram copa por causa da 2ª Gerra Mundial

const prompt = require("prompt-sync")()
console.log(`PROGRAMA ANOS DA COPA DO MUNDO. \nDigite 0 para sair... \n___.*.___.*.___.*.___.*.___.*.___.*.___`)

do {
    const ano = Number(prompt("ANO:  "))
    if (ano == 0) {
        break
    } else if (ano == 1942 || ano == 1946) {
        console.log(`Não houve copa no ${ano} (Segunda Guerra Mundial)`)
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim! ${ano} é um ano de Copa do Mundo!`)
    } else {
        console.log(`Não... ${ano} não é um ano de Copa do Mundo`)
    }
} while(true)