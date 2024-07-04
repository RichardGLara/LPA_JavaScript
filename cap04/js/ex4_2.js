//Referencias
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//Evento
form.addEventListener("submit", (e) => {
    e.preventDefault()                                                      //Evita o envio do form

    const nome = form.inName.value                                          //Obtem valores do form
    const masculino = form.inMasculino.checked
    const altura = Number(form.inAltura.value)

    /*let peso                                                                //Declava a variavel peso
    if (masculino) {                                                        //Se MASCULINO == TRUE
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }*/

    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)
    //OPERADOR TERNÁRIO
    /* Variavel PESO sera se MASCULINO:
    TRUE = 22 X ALTURA²
    FALSE = 21 X ALTURA² */

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} Kg`
    resp.style.color = "#ff9900"
})

form.addEventListener("reset", () => {
    resp.innerText = ""                                                     //limpa o conteudo do elemento H3, que exibe a resposta.
})