const prompt = require(`prompt-sync`)()
const frutas = prompt(`digite uma fruta: `)
const numero = prompt(`digite o numero de repetições: `)

//processando as informações

for (let i = 1 ; i < numero ; i++){
    console.log(`${frutas} * `)
}


if (numero % 2 == 1) {
    console.log(frutas)
} else {
    console.log(frutas)
}           
