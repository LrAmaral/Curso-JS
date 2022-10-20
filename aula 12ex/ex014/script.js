function carregar (){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date ();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12){
        msg.innerHTML = 'Bom dia!';
        img.src= 'manha.jpg'
        document.body.style.background = '#e2bd57' //inspeciona elemento direto do html
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML = 'Boa tarde!';
        img.src= 'tarde.jpg'
    document.body.style.background = '#e07f4d' //inspeciona elemento direto do html
    } else {
        msg.innerText = 'Boa noite!';
        img.src= 'noite.jpg'
        document.body.style.background = '#0a1258' //inspeciona elemento direto do html
    }
}
