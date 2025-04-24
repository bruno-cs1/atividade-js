function verificarParImpar (){
    let addNumber = document.getElementById("numero").value;
    const intNumber = parseInt(addNumber, 10);
    const result = document.getElementById("resultado");
    if(intNumber % 2 == 0 ){ result.innerHTML = `<p> ${intNumber} é par </p>`
        
    }else{result.innerHTML = `<p>${intNumber} é impar</p>`
    }

}    
