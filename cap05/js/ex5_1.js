const form = document.querySelector("form")
const resp = document.querySelector("pre")

form.addEventListener("submit", (e) => {
    e.preventDefault()                                                              //Evita envio do form
    const numero = Number(form.inNumero.value)                                      //Obtem o numero informado
    let resposta = ""

    //-------------------------------------------------------------------------------Aqui começa o loop FOR
    for (let i = 1; i <= 10; i = i + 1) {                                          //ou i = i ++ ao invés de i = i + 1
        //A variavel RESPOSTA vai acumulando os novos conteudos (nos dois formatos)
        resposta = resposta + numero + " X " + i + " = " + (numero * i) + "\n"
        //resposta = `${resposta}${numero} X ${i} = ${numero *i}\n`
    }
    resp.innerText = resposta
})
