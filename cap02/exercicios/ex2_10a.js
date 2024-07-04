//Declarando as variáveis
const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Processamentos
form.addEventListener("submit", (e) => {
    const inMedicamento = form.inMedicamento.value
    const inPreco = Number(form.inPreco.value)

    const promocao = Math.floor(inPreco * 2)
    //Math.floor - exclui os numeros após a virgula, deixando o valor como um numero inteiro
    //Pode-se usar tb Math.ceil(numero) , Math.trunc(numero) , parseInt(numero)

    resp1.innerText = `Promoção de ${inMedicamento}:`
    resp2.innerText = `Leve 2 por apenas R$ ${promocao}`

    e.preventDefault()
});