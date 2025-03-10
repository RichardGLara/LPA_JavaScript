//Referencias
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Calculo
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = frm.inPreco.value
    const promo = preco * 2.5

    //Resposta
    resp1.innerText = `${produto} - Promoção: Leve 3 por ${promo}`
    resp2.innerText = `O 3nd custa apenas ${preco * 0.5}`

//prevenir envio pelo SUBMIT
e.preventDefault()
})