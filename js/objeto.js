console.log("teste")

//Criando um objeto com suas Proprieades e valor.
var fiat = {
    marca:"Fiat",
    modelo:"500",
    ano:1957,
    cor:"Medium Blue",
    passageiros:2,
    conversivel:false,
    quilometros:20350
}
//console.log(fiat)
// para acessar a uma propriedade num objeto: comece com seu nome
//seguido de ponto + o nome da propriedade
 fiat.quilometros
//podemos usar uma propriedade em qualquer expressão

function prequalifica(fiat){
    if (fiat.quilometros > 25250){
        return false      
    }else if (fiat.ano > 1960){
        return false
    }
    return true
}