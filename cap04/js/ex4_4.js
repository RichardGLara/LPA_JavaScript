//Referencias
const form = document.querySelector("form")
const resp = document.querySelector("h2")

//Evento
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const horaBrasil = Number(form.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }
    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
})