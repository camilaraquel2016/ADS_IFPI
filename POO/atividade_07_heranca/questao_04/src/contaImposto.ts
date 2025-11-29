import { Conta } from "./conta.js";

export class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, taxaDesconto: number) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }

    override sacar(valor: number): void {
        let desconto: number = valor * this._taxaDesconto / 100;
        super.sacar(valor + desconto); 
    }
}

