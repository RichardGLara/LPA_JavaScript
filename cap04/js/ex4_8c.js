//Referencias
const form = document.querySelector("form")
const aviso1 = document.querySelector("#aviso1")
const aviso2 = document.querySelector("#aviso2")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let valor = Number(form.inValor.value)
    if (valor < 1) {
        aviso1.innerText = "Valor insuficiente"
        aviso1.style.color = "red"
    } else if (valor >= 1 && valor < 1.75) {
        let troco = valor - 1
        aviso1.innerText = `Tempo: 30 Minutos`
        aviso2.innerText = `Troco: R$ ${troco.toFixed(2)}`
    } else if (valor >= 1.75 && valor < 3) {
        let troco = valor - 1.75
        aviso1.innerText = `Tempo: 60 Minutos`
        aviso2.innerText = `Troco: R$ ${troco.toFixed(2)}`
    } else if (valor >= 3) {
        let troco = valor - 3
        aviso1.innerText = `Tempo: 120 Minutos`
        aviso2.innerText = `Troco: R$ ${troco.toFixed(2)}`
    }
})