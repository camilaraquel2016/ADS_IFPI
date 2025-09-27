class Sorteio {
    nomes: string[] = [];

    adicionar = (nome: string): void => {this.nomes.push(nome);}

    sortear = (): string => {
        if (this.nomes.length == 0) {throw new Error("Lista de nomes vazia!")};

        const indiceSorteado = Math.floor(Math.random() * this.nomes.length);
        return this.nomes[indiceSorteado]!;
    }
}


function sortearNome(sorteio: Sorteio): string | null {
    try {
        const nomeSorteado = sorteio.sortear();
        return nomeSorteado;
    }
    catch (error) {
        console.log("Não foi possível sortear um nome!\nErro:", (error as Error).message);
        return null;
    }
}

function main(): void {

    let sorteio = new Sorteio();

    sorteio.adicionar("Camila");
    sorteio.adicionar("Maria");
    sorteio.adicionar("João");

    console.log("Nome sorteado:", sortearNome(sorteio));
}

main();