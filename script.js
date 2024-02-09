function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var minutoFormatado = min < 10 ? '0' + min:min
    msg.innerHTML = `Agora são ${hora} : ${minutoFormatado}`

    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/fotomanha.jpg'
        document.body.style.background = 'rgb(209, 231, 243)'
    } else if (hora >= 12 && hora <= 18){
        imagem.src = 'imagens/fototarde.jpg'
        document.body.style.background = 'rgb(255, 148, 0)'
    } else {
        imagem.src = 'imagens/fotonoite.jpg'
        document.body.style.background = 'rgb(0, 30, 40)'
    }
}

