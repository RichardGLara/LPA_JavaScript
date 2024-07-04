//Variaveis
let form = document.querySelector("form")
let resposta = document.querySelector("h2")

//Porcessamento
form.addEventListener("submit", (e) => {
    let valor_uso = form.inValor.value
    let tempo_uso = form.inTempo.value

    if (tempo_uso % 15 == 0){
        let total = (tempo_uso / 15) * valor_uso
        resposta.innerText = `Valor a pagar: R$ ${total}`
    }
    else {
        let total = (Math.floor(tempo_uso / 15) + 1) * valor_uso    // (oO,)
        resposta.innerText = `Valor a pagar: R$ ${total}`
    }
    e.preventDefault()
})