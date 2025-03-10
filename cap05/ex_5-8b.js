const prompt = require("prompt-sync")()
const saida = "Saindo do programa..."
console.log("ºººººººººº Programa de Impressão de Etiquetas ºººººººººº")
console.log("--------------------------------------------------------")

do {
    console.log("                     Digite 0 para sair")
    const produto = prompt("digite o nome do PRODUTO: ")

    if (produto == 0) {     //se digitar "0" no produto, o programa fecha
        console.log(saida)
        break               //sai do programa
    }

    const numero = Number(prompt("digite o numero de etiquetas: "))
    if (numero == 0) {      //se digitar "0" no numero de etiquetas, o programa fecha
        console.log(saida)
        break               //sai do programa
    }

    console.log(`Imprimindo ${numero} etiquetas para ${produto}...`) //aviso de impressão

    for (let i = 1 ; i <= numero / 2 ; i++) {
        //PARA  (cria a variavel "i" com o valor inicial 1, será usado como contador) 
        //      (condição de loop: o loop continuará enquanto i for menor ou igual a metade de "numero")
        //      (incrementa 1 à variavel i, a cada interação do loop)

        console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
        //printa o "produto" duas vezes em um espaço reservado de no minimo 30 caracteres.
    }

    if (numero % 2 == 1) {
        //se o "numero" for impar, imprime mais uma linha com apenas um "produto"
        console.log(produto)
    }

    console.log(`\n\n`) // espaço de duas linhas, antes de reiniciar o loop
} while (true)
