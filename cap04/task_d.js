//referencias
const frm = document.querySelector("form")
const resp1 = document.querySelector("h4")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const A = Number(frm.ladoA.value)
    const B = Number(frm.ladoB.value)
    const C = Number(frm.ladoC.value)

    resp1.innerText = ""
    resp1.style.color = ""
    resp2.innerText = ""

    if (A==0 || B==0 || C==0) {
        resp1.innerText = `Os lados não podem formar um triangulo...`
        resp1.style.color = "red"
    } else if (A==B && B==C && C==A) {
        resp1.innerText = `Os lados podem formar um triangulo...`
        resp2.innerText = "tipo: EQUILÁTERO"
    } else if(A!=B && B!=C && C!=A) {
        resp1.innerText = `Os lados podem formar um triangulo`
        resp2.innerText = "tipo: ESCALENO" 
    } else if (B!=C || C!=A || A!=B) {
        resp1.innerText = `Os lados podem formar um triangulo...`
        resp2.innerText = "tipo: ISÓCCELES"
    }
})