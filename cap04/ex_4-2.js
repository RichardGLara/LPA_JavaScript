//referencias
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvintes
frm.addEventListener("submit", (e) => {
    e.preventDefault()                      //evita envio do form

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    //processamento
    let peso                                //declara a variavel peso (vazia)
    if (masculino) {                        //se masculino (ou IF MASCULINO == TRUE)
        peso = 22 * Math.pow(altura, 2)     //Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    //apresenta a resposta (altera o conteudo do elemento H3)
    resp.innerText = `${nome}, seu peso ideal é ${peso.toFixed(3)}Kg`
})
frm.addEventListener("reset", () => {
    resp.innerText = ""                     //reseta o conteúdo H3
})