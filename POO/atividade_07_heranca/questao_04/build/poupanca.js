import { Conta } from "./conta.js";
export class Poupanca extends Conta {
    _taxaJuros;
    constructor(numero, saldo, taxaJuros) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }
    renderJuros() {
        let juros = this._taxaJuros * this.saldo / 100;
        this.depositar(juros);
    }
}
//# sourceMappingURL=poupanca.js.map