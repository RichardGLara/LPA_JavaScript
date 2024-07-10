const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const imagem = document.querySelector("img")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let text = form.inTexto.value
    h2.innerText = `${text}!!!`
    imagem.src = "img/tux01.jpg"
    return
})
