
function calculateArea(r){// 3º) o argumento é enviado para o parâmetro r e a função calculateArea começa a executar
                          //    com r contendo o valor 5.2
var area // 4º) O corpo da função executa começando com a execução de uma variável área
if(r <= 0){ // então testamos para ver se o parâmetro r tem um valor <=0. 
    return 0 //5º) se r for <= 0, então retornamos 0 da função e ela para de executar. Mas nós passamos 5.2, então
             // essa linha não executa.
}else { // 6º) Executamos a cláusula else em seu lugar 
    area =  Math.PI * r * r // 7º) Computamos a área do círculo usando o valor 5.2 no parâmetro r.
    return area // 8º) Retornamos o valor da área da função. Isso para a execução da função e retorna o valor.
}

}

var radius = 5.2 // 1º) Primeiro declaramos uma variável radius e a inicializamos em 5.2
var theArea = calculateArea(radius)// 2º) Em seguida, chamamos a função calculateArea e lhe passamos a variável radius como argumento.
// 9º) O valor retornado da função é armazenado na variável theArea.
console.log("The area is: " + theArea)// A execução continua na próxima linha.