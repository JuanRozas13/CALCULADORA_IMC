var pesoinput = document.getElementById("peso")
var alturainput = document.getElementById("altura")
var resultado = document.getElementById("resultado")

pesoinput.addEventListener("input", Calcular_imc)
alturainput.addEventListener("input", Calcular_imc)
function Calcular_imc(){
    if(!isNaN(parseFloat(pesoinput.value)) && !isNaN(parseFloat(alturainput.value))){
        var imc= parseFloat (pesoinput.value ) / (parseFloat(alturainput.value) * parseFloat(alturainput.value)) 

        resultado.textContent = imc.toFixed(2)
    }

    else{
        resultado.textContent = "Digite um valor valido"
    }
}
