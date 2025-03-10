const frm = document.querySelector("form")          //referencia elementos
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {             //escuta evento submit
    e.preventDefault()                              //evita envio
    const num= Number(frm.inNumero.value)           //obtem numeo infomado
 //   let numDivisores = 0                          //declara e inicializa contador
 //   for (let i = 1 ; i <= num ; i++) {            //percorre todos os possiveis divisores de "NUM"
 //       if (num % i == 0) {                       //verifica se "i"(1, 2, 3,...) é divisor do "NUM"
 //           numDivisores++                        //se é, incrementa contador
 //       }
 //   }
 //   if (numDivisores == 2){                       //se possui apenas 2 divisores, é primo    
 //       resp.innerText = `${num} É PRIMO.`
 //   } else {
 //       resp.innerText = `${num} NÃO É PRIMO`
 //   }
//})
    let temDivisor = 0
    for (let i = 2 ; i <= num / 2 ; i++) {          //percorre os possiveis divisores
        if (num % i == 0 ){                         //se te mum divisor
            temDivisor = 1                          //muda o flag
            break                                   //sai da repetição
        }
    }

    if (num > 1 && !temDivisor) {                   //se "num" > 1 e não possui divisor
        resp.innerText = `${num} É PRIMO.`
    } else {
        resp.innerText = `${num} NÃO É PRIMO.`
    }
})