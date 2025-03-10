//referencias
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//ouvinte
frm.addEventListener("submit", (e) => {
    e.preventDefault()                      //evita envio do form
    const nome = frm.inNome.value           //obtem nome
    const nota1 = Number(frm.inNota1.value)         //obtem 1ª nota
    const nota2 = Number(frm.inNota2.value)         //obtem 2º nota

    const media = (nota1 + nota2) / 2       //calculo da media
    resp1.innerText = `Média das notas: ${media} pontos`

    //condições
    if (media >= 7){                        //altera o texto e a cor do elemento H2              
        resp2.innerText = `Parabens, ${nome}!!! Você foi APROVADO(a)!!!`
        resp2.style.color = "#0066FF"
    } else {
        resp2.innerText = `Que pena, ${nome}... Você foi REPROVADO(a)!`
        resp2.style.color = "#FF0055"
    }
})