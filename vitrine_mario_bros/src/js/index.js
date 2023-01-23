const botao_trailer = document.querySelector('.botao-trailer')
const modal = document.querySelector('.modal')
const fechar_modal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const link_video = video.src

botao_trailer.addEventListener('click', () => {
    video.setAttribute('src', link_video)
    switch_modal()
}) 

fechar_modal.addEventListener('click', () => {
    video.setAttribute('src','')
    switch_modal()
})

function switch_modal() {
    modal.classList.toggle('aberto')
}