import { Cliente } from "./cliente.js";
export class Conta {
    _id;
    _numero;
    _saldo;
    _cliente;
    _dataDeAbertura;
    constructor(numero, saldo) {
        this._id = 0;
        this._numero = numero;
        this._saldo = saldo;
        this._dataDeAbertura = new Date();
    }
    sacar(valor) {
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    get saldo() {
        return this._saldo;
    }
    transferir(contaDestino, valor) {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    get numero() {
        return this._numero;
    }
    get id() {
        return this._id;
    }
    set id(umId) {
        this._id = umId;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(umCliente) {
        if (umCliente) {
            this._cliente = umCliente;
        }
    }
}
//# sourceMappingURL=conta.js.map