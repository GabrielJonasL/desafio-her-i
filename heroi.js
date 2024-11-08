const readline = require('readline');

//config entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//captura nome do heroi
rl.question("Digite o nome do herói: ", (nomeHeroi) => {
    rl.question("Digite a quantidade de XP do herói: ", (xp) => {
        let xpHeroi = parseInt(xp);
        let nivelHeroi;

        //verifica o nivel do xp
        if(xpHeroi < 1000){
            nivelHeroi = "Ferro";
        }else if (xpHeroi >= 1001 && xpHeroi <= 2000){
            nivelHeroi = "Bronze";
        }else if (xpHeroi >= 2001 && xpHeroi <= 5000){
            nivelHeroi = "Prata";
        }else if (xpHeroi >= 5001 && xpHeroi <= 7000){
            nivelHeroi = "Ouro";
        }else if (xpHeroi >= 7001 && xpHeroi <= 8000){
            nivelHeroi = "Platina";
        }else if (xpHeroi >= 8001 && xpHeroi <= 9000){
            nivelHeroi = "Ascendente";
        }else if (xpHeroi >= 9001 && xpHeroi <= 10000){
            nivelHeroi = "Imortal";
        }else if (xpHeroi >= 10001){
            nivelHeroi = "Radiante";
        }

        //mensagem final
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

        rl.close();
    });
});