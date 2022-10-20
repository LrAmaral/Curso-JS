var idade = 77; //67 o voto é opcional
console.log(`Você tem ${idade} anos.`);

if (idade < 16) {
    console.log('Não vota');
} else if (idade < 18 || idade > 65) { //  || ou  && e
        console.log('Voto opcional');
} else {
        console.log('Voto obrigatório');
}   
