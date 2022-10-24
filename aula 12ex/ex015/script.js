function verificar () {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO], verifique os dados e digite novamente!');
    } else {
        var fsex = document.getElementsByName('radsex'); //existem dois com o mesmo nome e é preciso chamar os dois
        var idade = ano - Number(fano.value);
        //res.innerHTML = `Idade calculada: ${idade}`; calcular idade
        var genero = '';
        var img = document.createElement('img'); //criando tag img
        img.setAttribute('id','foto'); //criando id img pelo js
        if (fsex[0].checked) { //se a posição 0 que é o masculino estivar marcado, é masculino
            genero='Homem';
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criançahomem.jpg');
                img.style.cssText = 'width: 250px;' +  
                'height: 250px;' + 
                'border-radius: 50%;';
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'homemnovo.jpg');
                img.style.cssText = 'width: 250px;' +  
                'height: 250px;' + 
                'border-radius: 50%;';
            /*} else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homemvelho.jpg');*/
            } else {
                //Idoso
                img.setAttribute('src', 'homemvelho.jpg');
                img.style.cssText = 'width: 250px;' +  
                'height: 250px;' + 
                'border-radius: 50%;';
            }
        }else if(fsex[1].checked){
            genero='Mulher';
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criançamulher.jpg');
                img.style.cssText = 'width: 250px;' +  
                'height: 250px;' + 
                'border-radius: 50%;';
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'mulherjovem.jpg');
                img.style.cssText = 'width: 250px;' +  
                'height: 250px;' + 
                'border-radius: 50%;';
            /*} else if (idade < 50){
                //Adulto*/
            } else {
                //Idoso
                img.setAttribute('src', 'mulhervelha.jpg');
                img.style.cssText = 'width: 250px;' +  
                'height: 250px;' + 
                'border-radius: 50%;';
            }
        }
        res.style.textAlign = 'center'; // centralizando o texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img); //comando para adicionar elemento da id
    }
}

