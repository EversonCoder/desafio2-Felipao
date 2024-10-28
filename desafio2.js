// 2️⃣ Calculadora de partidas Rankeadas

const dadosPlayer = [["Jurandir",91,15]];

let lostMathes = dadosPlayer[0][2];

let winMathes = dadosPlayer[0][1];

let balanceOfVictories = winMathes - lostMathes;

function resultRankPlayer(){

    if(balanceOfVictories<=10){
        return "Ferro"
    }
    else if(balanceOfVictories >=11 && balanceOfVictories <=20){
        return "Bronze"}
    else if (balanceOfVictories >=21 && balanceOfVictories <=50){
        return "Prata"
    }
    else if (balanceOfVictories >=51 && balanceOfVictories <=80){
        return "Ouro"
    }
    else if (balanceOfVictories >=81 && balanceOfVictories <=90){
        return "Diamante"
    }
    else if (balanceOfVictories >=91 && balanceOfVictories <=100){
        return "Lendário"
    }
    else if(balanceOfVictories >=101){
        return "Imortal"
    }
    else{
        return "Radiante"
    }
};

let rankPlayer= resultRankPlayer()

console.log(`O Herói tem de saldo de ${balanceOfVictories} está no nível de ${rankPlayer}`)