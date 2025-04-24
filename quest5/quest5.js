function maioridade (){
    let verificarIdade = document.getElementById("idade").value
    let stringParaNumero = parseInt(verificarIdade, 10)
    let resultado = document.getElementById("maioridade") 
    
    if (stringParaNumero >= 18){ resultado.innerHTML = `<p>${stringParaNumero} é maior de idade</p>`
    } else { resultado.innerHTML = `<p>${stringParaNumero} é menor de idade </p>`

    }
}