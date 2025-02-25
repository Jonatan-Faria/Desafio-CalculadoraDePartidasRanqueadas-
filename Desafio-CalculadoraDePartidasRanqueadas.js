let CalculoDeVitorias = calculosVitorias(55,3)
let Rank = ""
 function calculosVitorias(vitorias, derrotas){
 
 let Resultado =  Vitoria - derrotas
 return Resultado

 }
 switch(true){

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
 console.log ("O Herói tem de saldo de " CalculoDeVitorias " e está no Rank " Rank "!")
