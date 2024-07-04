const form = document.querySelector("form")
const resposta = document.querySelector("h2")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(form.inNumero.value)
    const raiz = Math.sqrt(numero)
    if (Number.isInteger(raiz)) {
        resposta.innerText = `Raiz: ${raiz}`
    } else {
        resposta.innerText = `Não há raiz exata para ${numero}`
    }
})