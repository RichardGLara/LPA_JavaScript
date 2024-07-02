//Cria referencia ao form e aos elementos H3 e H4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value           //obtem conteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60)      //arredonda para baixo o resultado
    const minutos = duracao % 60                //obtem o resto da divisão
    

    resp1.innerText = titulo                    //Exibe a resposta
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault()
})