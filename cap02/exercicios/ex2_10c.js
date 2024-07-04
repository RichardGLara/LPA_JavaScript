//Variaveis
let form = document.querySelector("form")
let resposta1 = document.querySelector("h2")
let resposta2 = document.querySelector("h3")

//Processamento
form.addEventListener("submit", (e) => {
    let inProduto = form.inProduto.value
    let inPreco = form.inPreco.value
    let promocao = inPreco * 2.5
    let terc_item = inPreco * 0.5

    resposta1.innerText = `${inProduto} - Leve 3 por R$ ${promocao.toFixed(2)}`
    resposta2.innerText = `O 3º produto custa apenas R$ ${terc_item.toFixed(2)}`

    e.preventDefault()
})