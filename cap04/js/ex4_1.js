//Referencias
const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Evento
form.addEventListener("submit", (e) => {
    e.preventDefault()                          //evita envio do form
    const nome = form.inNome.value              //obtem valores
    const nota1 = Number(form.inNota1.value)
    const nota2 = Number(form.inNota2.value)
    const media = ( nota1 + nota2 ) / 2         //Calcula a média
    resp1.innerText = `Média das notas: ${media.toFixed(2)}`

    //Condições
    if (media >= 7) {
        //altera o texto e estilo da cor do elemento RESP2
        resp2.innerText = `Parabéns, ${nome}! Você foi APROVADO(A)!`
        resp2.style.color = "green"
    } else {
        resp2.innerText = `Ops, ${nome}... Você foi reprovado(A)`
        resp2.style.color = "red"
    }
})