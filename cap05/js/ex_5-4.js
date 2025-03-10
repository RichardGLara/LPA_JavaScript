alert("Digite 0 para SAIR")

do {
    const num = Number(prompt("Número: "))          //lê o numero
    if (num == 0 || isNaN(num)) {                   //se num=0 ou invalido
        const sair = confirm("confirma saída?")     //solicita confirmação
        if (sair) {
            break                                   //sai da repetição
        } else {
            continue
        }
    }
    if (num % 2 == 0) {                             //se par
        alert(`O dobro de ${num} é: ${num * 2}`)    //mostra o dobro
    } else {                                        //se impar
        alert(`O triplo de ${num} é: ${num * 3}`)   //mostra o triplo
    }
} while (true)                                      //enquanto verdade (só sai do laço pelo BRAEK)
alert("Bye, bye...!!!")