class Jogador {
    private forca: number;
    private nivel: number;
    private pontosAtuais: number;

    constructor(forca: number, nivel: number, pontosAtuais: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    getForca(): number {
        return this.forca;
    }

    setForca(forca: number): void {
        this.forca = forca;
    }

    getNivel(): number {
        return this.nivel;
    }

    aumentarNivel(): void {
        this.nivel++;
    }

    diminuirNivel(): void {
        this.nivel --;
    }

    getPontos(): number {
        return this.pontosAtuais;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    estaVivo(): boolean {
        return this.getPontos() > 0;
    }

    atacar(atacado: Jogador) {
        if (atacado.estaVivo()) {
            const dano = this.calcularAtaque();
            atacado.pontosAtuais -= dano;
        }
    }
}

function main(): void {

    let camila: Jogador = new Jogador(30, 2, 90);
    let maria: Jogador = new Jogador(50, 4, 70);

    camila.atacar(maria);

    console.log(maria.getPontos());

    console.log(maria.estaVivo());

    camila.atacar(maria);

    console.log(maria.estaVivo());


}

main();