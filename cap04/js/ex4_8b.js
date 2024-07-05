//Referencias
const form = document.querySelector("form")
const aviso = document.querySelector("h2")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let velPermitida = Number(form.velPerm.value)
    let velRegistrada = Number(form.velReg.value)

    if (velRegistrada <= velPermitida) {
        aviso.innerText = `Sem Multa!`
        aviso.style.color = "green"
    } else if (velRegistrada <= velPermitida * 1.2) {
        aviso.innerText = `Multa Leve!`
        aviso.style.color = "#FF6600"
    } else {
        aviso.innerText = `Multa Grave!!!`
        aviso.style.color = "red"
    }
})