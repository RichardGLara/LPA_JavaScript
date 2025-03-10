//referencias
const frm = document.querySelector("form")
const resp = document.querySelector("h3")


//ouvinte
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //obtem e convert o conteudo de inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5                     //Calcula o horário na França
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }

    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})