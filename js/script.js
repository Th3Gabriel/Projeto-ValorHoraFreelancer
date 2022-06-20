var Valorhora

function CalcularHora(){
    var ValorProjetoinput=document.querySelector(".ValorProjeto").value
    var HoraDiariainput=document.querySelector(".horaDiaria").value
    var diasEfetivosinput =document.querySelector(".diasEfetivos").value
    var diaDeFeriasinput= document.querySelector(".diaDeFerias").value

    valorHora = (ValorProjetoinput / (diasEfetivosinput * 4 * HoraDiariainput) ) + ( ( diaDeFeriasinput * diasEfetivosinput * HoraDiariainput ) )
    var RES = Math.round(valorHora)

    document.querySelector('#result').innerHTML = RES
}

function Limpar(){
    document.querySelector(".ValorProjeto").value = ""
    document.querySelector(".horaDiaria").value = ""
    document.querySelector(".diasEfetivos").value = ""
    document.querySelector(".diaDeFerias").value = ""    
    document.querySelector('#result').innerHTML = "R$ 0,00"

}