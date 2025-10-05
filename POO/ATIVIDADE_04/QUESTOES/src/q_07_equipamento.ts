class Equipamento {
    private ligado: boolean;

    constructor() {
        this.ligado = false; // O objeto será criado inicialmente desligado
    }

    estaLigado(): boolean {
        return this.ligado;
    }

    ligar(): void {
        if (!this.estaLigado()) this.ligado = true;
    }

    desligar(): void {
        if (this.estaLigado()) this.ligado = false;
    }

    inverter(): void {
        if (this.estaLigado()) this.desligar();
        this.ligar();
    }
}


function main(): void {
    let lampada: Equipamento = new Equipamento();

    console.log(`A lâmpada está ${lampada.estaLigado()? "ligada" : "desligada"}`);

    lampada.inverter();

    console.log(`A lâmpada está ${lampada.estaLigado()? "ligada" : "desligada"}`);

    lampada.ligar();

    console.log(`A lâmpada está ${lampada.estaLigado()? "ligada" : "desligada"}`);

    lampada.desligar();

    console.log(`A lâmpada está ${lampada.estaLigado()? "ligada" : "desligada"}`);
}

main();

