function soma(){
    let receberDado = document.getElementById("entradaDeDados").value
    let converterDado = parseInt(receberDado, 10)
    let iniciar = 0
    for (let i = 1; i <= converterDado; i++){
        iniciar +=  i
        const resultado = document.getElementById ("resultado")
    resultado.innerHTML = `${iniciar}`
    }
    
}