type Escolha = "Par" | "Ímpar";
type Vencedor = "Jogador" | "Máquina";


class jogoParImpar {
    numeroJogador: number;
    numeroMaquina: number = 0;
    escolha: Escolha; // jogador escolhe Par ou Ímpar

    constructor(numeroJogador: number, escolha: Escolha){
        this.numeroJogador = numeroJogador;
        this.escolha = escolha;
    }

    sortearMaquina = (): void => {this.numeroMaquina = Math.floor(Math.random() * 10) + 1;}

    resultado = (): Escolha => {
        this.sortearMaquina(); // atualiza número da máquina

        let soma = this.numeroMaquina + this.numeroJogador;

        if (soma % 2 == 0) return "Par";
        return "Ímpar";
    }

    vencedor = (): Vencedor => {
        const resultado: Escolha = this.resultado();

        if (this.escolha == resultado) return "Jogador";
        return "Máquina";
    }
}


function main(): void {

    let jogo1 = new jogoParImpar(3, "Par");

    const vencedor = jogo1.vencedor();

    const soma = jogo1.numeroJogador + jogo1.numeroMaquina;

    console.log(
    `---------RESUMO--------------
    Número jogador: ${jogo1.numeroJogador}
    Número máquina: ${jogo1.numeroMaquina}
            
    Soma: ${soma}\n-----------------------------\n`
    )

    if (vencedor == "Jogador") {
        console.log("Parabéns você ganhou!");
    }
    else {
        console.log(`Não foi dessa vez!\nVocê escolheu ${jogo1.escolha}`);
    }
}


main();