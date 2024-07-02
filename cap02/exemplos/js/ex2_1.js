//Cria referencia ao form e ao elemento H3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value                       //Obtem o nome digitado
    resp.innerText = `Olá, ${nome}, seja bem-vindo!!!`  //Exibe a resposta do progama
    e.preventDefault()                                  //Evita envio do FORM
})