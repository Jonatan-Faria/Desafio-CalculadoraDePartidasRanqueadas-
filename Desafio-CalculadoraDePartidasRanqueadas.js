//EXPLICAÇAO

// Vamos começar definindo uma variavel chamada CalculoDeVitorias | let CalculoDeVitorias |
// para atribuir valores a variaveir nos usamos | = |
// Agora para atribuir 2 valores a uma variavel, é só repetir o nome da abrir parenteses e separar a quantidade de valores com | , | 
// Desse jeito | calculosVitorias(55,3) |
// Para atribuir só um valor não é necessario repetir o nome da variavel 
// Ex:| let CalculoDeVitorias = (53) |

let CalculoDeVitorias = calculosVitorias(55,3)

// Agora vamos criar uma variavel chamada Rank  e vamos deixar ela sem valor, para depois outro comando atribuir um desse jeito | let Rank = "" |
let Rank = ""

// Agora temos que fazer uma função
// | function calculosVitorias | = Função quero que você pegue os valores da variavel calculosVitorias
// | (vitorias, derrotas) | = primeiro valor vai se chamar vitoias e o segundo derrotas.
//  Abre a chaves. | {} | 
//  Enquanto os parenteses da um "Apelido" aos valoes, as chaves vão falar o que você vai fazer com esses valores.
// | let Resultado =  Vitoria - derrotas |  = Crie uma variavel chamada resultado e essa variavel tem o valor de vitorias subtraido pelo valor de derrotas.
// | return Resultado | = Agora eu quero que o valor da variavel | Resultado | vire o valor da variavel | calculosVitorias |
// Basicamente a função pegou os valores modificou e devolvel.
function calculosVitorias(vitorias, derrotas){
 
 let Resultado =  Vitoria - derrotas
 return Resultado
}

// Switch é como uma estante com varias divisorias, que você pode pegar o que tem nela contanto que você tenha a "chave" que seria um valor de variavel
// Crie um switch | switch() {} |
// | switch(true) | = O Switch e só vai funcionar se alguma case estiver sendo usada
// | switch(false) | = O Switch e só vai funcionar se alguma case não estiver sendo usada

 switch(true){


// Case são as divisórias do switch, escrever case é igual você estar falando: Abre uma divisoria desse switch

// <= menor ou igual
// >= maior ou igual
// && E se / támbem / mas
   
// | case CalculoDeVitorias <= 10 | = Crie uma divisoria e quero que ela só seja usada se a variavel | CalculoDeVitorias | for menor ou...
//igual a 10.
// | : | = Se a informação esta certa então...
// |  Rank = "Ferro" | =  defina o valor da variavel Rank para Ferro.
// | break | = Fechar essa divisoria
    case CalculoDeVitorias <= 10:
        Rank = "Ferro"
        break;
    case CalculoDeVitorias >= 11 && CalculoDeVitorias <= 20:
        Rank = "Bronze"
        break;
    case CalculoDeVitorias >= 21 && CalculoDeVitorias <= 50:
        Rank = "Prata"
        break;
    case CalculoDeVitorias >= 51 && CalculoDeVitorias <= 80:
        Rank = "Ouro"
        break;
    case CalculoDeVitorias >= 81 && CalculoDeVitorias <= 90:
        Rank = "Diamante"
        break;
    case CalculoDeVitorias >= 91 && CalculoDeVitorias <= 100:
        Rank = "Lendário"
        break;
    case CalculoDeVitorias >= 101:
        Rank = "Imortal"
        break;
}

// | Console.log () | = Me mostre no console o que eu colocar dentro do parenteses

 console.log ("O Herói tem de saldo de " CalculoDeVitorias " e está no Rank " Rank "!")
