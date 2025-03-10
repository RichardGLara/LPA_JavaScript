//referencias
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
//calculos
    const produto = frm.inMedicamento.value
    const valor = Number(frm.inPreco.value)
    const promo = (parseInt(valor)) * 2

//resposta

    resp1.innerHTML = `Promoção de ${produto}`
    resp2.innerText = `Leve 2 por R$ ${promo.toFixed(2)}`

//prevenir envio pelo SUBMIT
    e.preventDefault()
})