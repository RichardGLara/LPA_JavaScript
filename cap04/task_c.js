//referencias
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    resp1.innerText = ""
    resp2.innerText = ""

    if (valor < 1) {
        resp1.innerText = `VALOR INSUFICIENTE!`
        resp1.style.color = "red"
    } else if (valor <  1.75) {
        resp1.innerText = `Tempo: 30 minutos`
        resp1.style.color = "green"
        resp2.innerText = `Troco: R$ ${(valor - 1).toFixed(2)}`
    } else if (valor < 3) {
        resp1.innerText = `Tempo: 60 minutos`
        resp1.style.color = "green"
        resp2.innerText = `Troco: R$ ${(valor - 1.75).toFixed(2)}`
    } else {
        resp1.innerText = `Tempo: 120 minutos`
        resp1.style.color = "green"
        resp2.innerText = `Troco: R$ ${(valor - 3).toFixed(2)}`
    }
})