var contadorWhile = 1
var contadorDo = 1

//Repetição com teste lógico no início
while ( contadorWhile < 6 ){
    console.log(`Passo While${contadorWhile}`)
    contadorWhile++
}

//Repetição com teste lógico no fim
do {
    console.log(`Passo Do While${contadorDo}`)
    contadorDo++
} while (contadorDo < 6)