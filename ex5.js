// Num jogo de escape room, ou sala de fuga, um grupo de pessoas tem como desafio decifrar uma mensagem 
// oculta que servirá de chave para poderem sair. Um dos integrantes do grupo, que não é programador, 
// conseguiu decifrar a lógica da mensagem e a transmite para você, que é programador, escrever o código.

// Crie a função aChaveSecreta(), que recebe um array de caracteres como parâmetro e retornar a mensagem de 
// maneira ordenada.

// Exemplo 1: 

// Executamos a função com o seguinte parâmetro:
// aChaveSecreta( ["a", "r", "*", "i", "e", "f","*", "-", "*", "a", "d", "n", "*", "u", "g", "e", "s", " ", "*", "é", " ", "e", "*", "j", "o", "*", "H", "*"] )  

// O retorno esperado é: 
//  "Hoje é segunda-feira";  
// Exemplo 2:

// Executamos a função com o seguinte parâmetro:
// aChaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "e", "d", " ", "e", "*", "v", "a", "h", "C"] ) 

// O retorno esperado é: 
// "Chave decifrada";  

function aChaveSecreta(encriptado){
    let desencriptado = ""

    for(let i = encriptado.length - 1; i >= 0; i--){
        if(encriptado[i] != "*"){
            desencriptado += encriptado[i]
        }
    }
    return console.log(desencriptado)
}

aChaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "e", "d", " ", "e", "*", "v", "a", "h", "C"]);
aChaveSecreta( ["a", "r", "*", "i", "e", "f","*", "-", "*", "a", "d", "n", "*", "u", "g", "e", "s", " ", "*", "é", " ", "e", "*", "j", "o", "*", "H", "*"] )