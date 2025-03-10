//Referencias
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Calculos
frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)
    if (tempo % 15 == 0){
        resp.innerText = `Valor a pagar R$: ${(tempo / 15) * valor}`
    } else {
        resp.innerText = `Valor a pagar R$: ${(parseInt(tempo / 15) + 1) * valor}`
    }

//prevenir envio pelo SUBMIT
e.preventDefault()
})