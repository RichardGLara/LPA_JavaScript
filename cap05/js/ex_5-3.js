const frm = document.querySelector("form")
const resp = document.querySelector("h3")

let num         //declara uma variavel num let, pois ela pode ser alterada
                //e será acessada fora do bloco DO... WHILE

do {            //cria laço de repetição (faça...)
    num = Number(prompt("Número: "))            //lê um numero
    if (num == 0 || isNaN(num)) {               //se num=0 ou invalido
        alert("Digite um número válido...")
    }
} while (num == 0 || isNaN(num))                 //...enquanto num=0 ou invalido
let pares = `Pares entre 1 e ${num}: `           //string da resposta
for (let i = 2; i<= num; i = i + 2) {
    pares = pares + i + ", "
}
alert(pares)                                    //exibe a lista de pares    