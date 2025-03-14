//Cria referencia e ao elemento H3 (onde será exibido a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria um "ouvinte" de evento, acionado quando o botão SUBMIT for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)                     //obtem conteudo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo /1000) * consumo                       //calcula valor a ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`    //exibe resposta

    e.preventDefault()                                          //evita envio do form
})