"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Jogador {
    forca;
    nivel;
    pontosAtuais;
    constructor(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    getForca() {
        return this.forca;
    }
    setForca(forca) {
        this.forca = forca;
    }
    getNivel() {
        return this.nivel;
    }
    aumentarNivel() {
        this.nivel++;
    }
    diminuirNivel() {
        this.nivel--;
    }
    getPontos() {
        return this.pontosAtuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    estaVivo() {
        return this.getPontos() > 0;
    }
    atacar(atacado) {
        if (atacado.estaVivo()) {
            const dano = this.calcularAtaque();
            atacado.pontosAtuais -= dano;
        }
    }
}
function main() {
    let camila = new Jogador(30, 2, 90);
    let maria = new Jogador(50, 4, 70);
    camila.atacar(maria);
    console.log(maria.getPontos());
    console.log(maria.estaVivo());
    camila.atacar(maria);
    console.log(maria.estaVivo());
}
main();
//# sourceMappingURL=q_10_jogador.js.map