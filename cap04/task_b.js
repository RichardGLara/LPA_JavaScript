//referencias
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const velPerm = Number(frm.inVelPer.value)
    const velCond = Number(frm.inVelCon.value)

    if (velCond <= velPerm) {
        resp.innerText = `Situação: Sem Multa`
        resp.style.color = "green"
    } else if (velCond <= (velPerm * 1.2)) {
        resp.innerText = `Situação: Multa Leve`
        resp.style.color = "#FF6600"
    } else {
        resp.innerText = `Situação: Multa Grave`
        resp.style.color = "red"
    }
})