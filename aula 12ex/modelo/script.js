var hora = document.querySelector(`div#manha`);
var agora = new Date();
var atual = agora.getHours;
var hora = Number(manha.value);

function verificar () {

    if (atual> 6 && atual < 12){
        hora.innerHTML = 'Bom dia';
    }
}