function tabuada() {
    let receberDado = document.getElementById("entradaDado");
    let dadoParaInt = parseInt(receberDado.value, 10);
    let resultado = document.getElementById("resultado");

    

    for (let i = 1; i <= 10; i++) {
        let linha = `${dadoParaInt} x ${i} = ${dadoParaInt * i}<br>`;
        resultado.innerHTML += linha; // Adiciona a nova linha ao resultado
    }
}