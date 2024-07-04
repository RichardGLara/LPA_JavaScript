//Cria referencia ao FORM e ao H3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria um ouvinte de eento, acionado quando o botão de submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)                     //obtem o conteudo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000 ) * consumo                     //Calcula o valor a ser pago
    resp.innerText = `Valor a ser pago: ${valor.toFixed(2)}`    //Exibe resposta
    e.preventDefault()
});