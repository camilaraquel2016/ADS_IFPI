"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Equipamento {
    ligado;
    constructor() {
        this.ligado = false; // O objeto será criado inicialmente desligado
    }
    estaLigado() {
        return this.ligado;
    }
    ligar() {
        if (!this.estaLigado())
            this.ligado = true;
    }
    desligar() {
        if (this.estaLigado())
            this.ligado = false;
    }
    inverter() {
        if (this.estaLigado())
            this.desligar();
        this.ligar();
    }
}
function main() {
    let lampada = new Equipamento();
    console.log(`A lâmpada está ${lampada.estaLigado() ? "ligada" : "desligada"}`);
    lampada.inverter();
    console.log(`A lâmpada está ${lampada.estaLigado() ? "ligada" : "desligada"}`);
    lampada.ligar();
    console.log(`A lâmpada está ${lampada.estaLigado() ? "ligada" : "desligada"}`);
    lampada.desligar();
    console.log(`A lâmpada está ${lampada.estaLigado() ? "ligada" : "desligada"}`);
}
main();
//# sourceMappingURL=q_07_equipamento.js.map