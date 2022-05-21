var palavra = "garrafas"
var contagem = 99
while (contagem > 0){
    console.log(contagem + " " + palavra + " de cerveja na parede, pegar uma e voltar.")
    
    contagem = contagem-1

    if(contagem>0){
    // console.log(contagem + " " + palavra + " de cerveja na parede.")
    }else{
        console.log("Não tem mais " + palavra + " de cerveja na parede.")
    }
}