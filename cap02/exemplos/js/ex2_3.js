//Cria referencia ao form e aos elementos de resposta (pelo seu ID)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

//Cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value                         //obtem o conteudo dos campos
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50                                //Calcula valor da entrada
    const parcela = (preco * 0.50) / 12                         //Calcula o valor das parcelas

    resp1.innerText = `Promoção: ${veiculo}`                    //exibe as respostas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+ 12X de R$ ${parcela.toFixed(2)}`

    e.preventDefault()                                          //evita envio do FORM
})