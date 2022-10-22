function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#ffdc67'
    } else if(hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#a9571f'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#021a38'

    }
}

