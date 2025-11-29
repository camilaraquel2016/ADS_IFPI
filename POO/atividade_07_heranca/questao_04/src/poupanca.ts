import { Conta } from "./conta.js";

export class Poupanca extends Conta {
    private _taxaJuros: number;

    constructor(numero: string, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    renderJuros(): void {
        let juros = this._taxaJuros * this.saldo / 100;
        this.depositar(juros);
    }
}

