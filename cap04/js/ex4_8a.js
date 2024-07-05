const form = document.querySelector("form")
const resp = document.querySelector("h2")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let numero = Number(form.inNumero.value)
    if (numero % 2 == 0) {
        resp.innerText = `O nº ${numero} é PAR!`
    }
})