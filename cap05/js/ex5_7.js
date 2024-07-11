const form = document.querySelector("form")         //obtem os elementos da pagina
const resposta = document.querySelector("h3")

form.addEventListener("submit", (e) => {            //Escuta o evento SUBMIT do FORM
    e.preventDefault()                              //Evita o envio do form
    const number = Number(form.inNumero.value)         //Obtem o numero informado

    let estrelas = ""                               //Variavel ESTRELA vazia, que irá concatenar as estrelas e traços
    for (let i = 1; i <= number; i++) {             //Cria laço de repetição de 1 até NUMBER
        if (i % 2 == 1) {
            estrelas = estrelas + "*"               //na posição impar do I: *
        } else {
            estrelas = estrelas + "-"               //na posição par do I: -
        }
    }
    resposta.innerText = estrelas                   //Exibe as estrelas
})