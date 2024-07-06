const form = document.querySelector("form")
const aviso1 = document.querySelector("#aviso1")
const aviso2 = document.querySelector("#aviso2")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let ladoA = Number(form.ladoA.value)
    let ladoB = Number(form.ladoB.value)
    let ladoC = Number(form.ladoC.value)

    if (ladoA == ladoB && ladoA == ladoC) {
        aviso1.innerText = "Lados podem fazer um triângulo!"
        aviso2.innerText = "Tipo: EQUILÁTERO"
    } else if (ladoA >= (ladoB + ladoC) || ladoB >= (ladoC + ladoA) || ladoC >= ladoA + ladoB) {
        aviso1.innerText = "Lados NÃO podem fazer um triângulo!"
        aviso1.style.color = "#FF0066"
    } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
        aviso1.innerText = "Lados podem fazer um triângulo!"
        aviso2.innerText = "Tipo: ISÓSCElES"
    } else {
        aviso1.innerText = "Lados podem fazer um triângulo!"
        aviso2.innerText = "Tipo: ESCALENO"
    }
})