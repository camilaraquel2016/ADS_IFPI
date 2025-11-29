import { Conta } from "./conta.js";
export class ContaImposto extends Conta {
    _taxaDesconto;
    constructor(numero, saldo, taxaDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    sacar(valor) {
        let desconto = valor * this._taxaDesconto / 100;
        super.sacar(valor + desconto);
    }
}
//# sourceMappingURL=contaImposto.js.map