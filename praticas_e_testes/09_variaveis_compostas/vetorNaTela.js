let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

// for(var i = 0; i<valores.length; i++){
//     console.log(`Valor: ${valores[i]} na posicao ${i}`)
// }

for(var i in valores){
    console.log(`Valor: ${valores[i]} na posicao ${i}`)
}