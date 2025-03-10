//refererencias
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")


//"escuta evento"
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const saque = frm.inSaque.value                 //obtem o valor do saque

//reseta as respostas
    outResp1.innerText = ""
    outResp2.innerText = ""
    outResp3.innerText = ""

//processando...
    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (10, 50, 100)")
        frm.inSaque.focus()
        return
    }

//calculando as notas
    const notasCem = Math.floor(saque / 100)        //calcula notas de 100
    let resto = saque % 100

    const notasCinquenta = Math.floor(resto / 50)    //calcula notas de 50
    resto = resto % 50

   const notasDez = Math.floor(resto / 10)          //calcula notas de 10

//resposta
    if (notasCem > 0) {
        outResp1.innerText = `Notas de 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de 50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de 10: ${notasDez}`
    }
})