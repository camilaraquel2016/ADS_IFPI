"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class jogoParImpar {
    numeroJogador;
    numeroMaquina = 0;
    escolha; // jogador escolhe Par ou Ímpar
    constructor(numeroJogador, escolha) {
        this.numeroJogador = numeroJogador;
        this.escolha = escolha;
    }
    sortearMaquina = () => { this.numeroMaquina = Math.floor(Math.random() * 10) + 1; };
    resultado = () => {
        this.sortearMaquina(); // atualiza número da máquina
        let soma = this.numeroMaquina + this.numeroJogador;
        if (soma % 2 == 0)
            return "Par";
        return "Ímpar";
    };
    vencedor = () => {
        const resultado = this.resultado();
        if (this.escolha == resultado)
            return "Jogador";
        return "Máquina";
    };
}
function main() {
    let jogo1 = new jogoParImpar(3, "Par");
    const vencedor = jogo1.vencedor();
    const soma = jogo1.numeroJogador + jogo1.numeroMaquina;
    console.log(`---------RESUMO--------------
    Número jogador: ${jogo1.numeroJogador}
    Número máquina: ${jogo1.numeroMaquina}
            
    Soma: ${soma}\n-----------------------------\n`);
    if (vencedor == "Jogador") {
        console.log("Parabéns você ganhou!");
    }
    else {
        console.log(`Não foi dessa vez!\nVocê escolheu ${jogo1.escolha}`);
    }
}
main();
//# sourceMappingURL=q_12.js.map