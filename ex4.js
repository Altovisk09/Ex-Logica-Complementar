// Dentro do sistema da DigitalMovies você consegue comprar ingressos para ver um filme no cinema. 
// Nesse sistema você pode também já escolher o lugar onde irá se sentar, mas para que isso aconteça,
//  o sistema precisa informar se o lugar escolhido está realmente disponível. 

// Sendo assim, escreva a função de lugaresDisponiveis, que deve receber dois parâmetros:

// um conjunto de lugares disponíveis;
// o lugar que o usuário deseja ocupar. 

// Essa função deve verificar se o assento solicitado está disponível e retornar uma resposta completa 
// ao usuário, como nos exemplos a seguir:

// Exemplo se o assento solicitado estiver disponível:

// lugaresDisponiveis([15, 28, 44, 45, 70], 15)  

// O resultado deve ser:

// "Parabéns, o assento número 15 está disponível.""
// Exemplo se o assento solicitado não estiver disponível:

// lugaresDisponiveis([15, 28, 44, 45, 70], 50)   

// // O resultado deve ser:

// "Desculpe, o assento número 50 está ocupado, mas ainda há 5 assentos disponíveis."

function lugaresDisponiveis(assentos, solicitado){
    let disponibilidade = assentos.indexOf(solicitado)
    if(disponibilidade != -1){
       return("Parabéns, o assento número "+solicitado+" está disponível.")
    }else{
       return("Desculpe, o assento número "+solicitado+" está ocupado, mas ainda há "+assentos.length+" assentos disponíveis.")
    }
   }