              var randomLoc = Math.floor(Math.random() * 5);
              var location1 = randomLoc;
              var location2 = location1 + 1 ;
              var location3 = location2 + 1 ;
              var guessAdivinhar;
              var hitsExitos = 0;
              var guessesPalpites = 0;
              var isSunk = false;

              while(isSunk == false){    // o prompt mostra um alerta e retorna com que o usuário digitar.
              guessAdivinhar = prompt( "Preparar, Apontar, Fogo! ( entre com um número de 0 - 6 ): ");
              if (guessAdivinhar < 0 || guessAdivinhar > 6){
                      alert("Por favor, entre com um Número Válido!");
              }else{
              guessesPalpites = guessesPalpites + 1;

              if(guessAdivinhar == location1 || guessAdivinhar == location2 || guessAdivinhar == location3){
               alert("Acertou!");
               hitsExitos = hitsExitos + 1;
              
               if (hitsExitos == 3){
                isSunk = true; //Caso definimos isSunk como true.
                alert("Você afundou o meu Navio de Guerra!");              
               }  
              }else {
                alert(" Errou!");
          }
         } 
        }
           // dizer ao usuário as estatísticas dele
            var stats = " Você deu " + guessesPalpites  + " Palpites para afundar o Navio de Guerra, " +
            " O que significa que sua precisão de tiro foi " + (3/ guessesPalpites) ;
            alert(stats);                                 
                    
              // O usuário deu um palpite na localização do navio, aqui determinamos se o palpite atingiu
              //o navio. Se coincidir, incrementamos a variável hitsExito.

              // if(guessAdivinhar == location1){
              // hitsExitos = hitsExitos + 1
              // }else if(guessAdivinhar == location2){
              // hitsExitos = hitsExitos +1
              // }else if(guessAdivinhar == location3){
              // hitsExitos = hitsExitos +1
              // }
              //******* OU POSSO ESCREVER ASSIM:*********** 
              //Combinando as 3 condicionais em uma instrução if usando || (OR)   
           
console.log("legal")



