function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 10){
                img.setAttribute('src', 'bebem.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemm.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade < 10){
                img.setAttribute('src', 'bebef.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemf.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'adultof.jpg')
            } else {
                img.setAttribute('src', 'idosof.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}