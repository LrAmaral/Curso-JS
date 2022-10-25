function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let pas = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    res.innerHTML = "Impossível contar!";
    window.alert("[ERRO] Faltam dados!");
  } else {
    res.innerHTML = `Contando: <br>`;
    let i = Number(ini.value); //convertendo para um número
    let f = Number(fim.value); //convertendo para um número
    let p = Number(pas.value); //convertendo para um número

    if (p <= 0) {
        alert('Passo inválido, considerando PASSO 1');
        p = 1;
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) { //incrementando += soma
        res.innerHTML += ` ${c} 👉 `; //+= concatenação
      }
    } else {
      for (let c = i; c >= f; c -= p) { //decrementando -= subtração
        res.innerHTML += ` ${c} 👉 `;
      }
    }
    res.innerHTML += `\u{1f3c1}`; //código da bandeira
  }
}
