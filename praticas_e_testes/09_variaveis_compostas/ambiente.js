let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posicoes.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

if(num.indexOf(8) >= 0){
    console.log('Valor 8 encontrado!')
} else {
    console.log('Valor 8 nao encontrado!')
}
