import { Cliente } from "./cliente.js";
import { Operacao } from "./operacao.js";
export class Conta {
    _id;
    _numero;
    _cliente;
    _saldo;
    _limite;
    _dataAbertura;
    _idOperacaoAtual = 1;
    _operacoes;
    constructor(numero, saldo, limite) {
        this._id = 0;
        this._numero = numero;
        this._saldo = saldo;
        this._limite = limite;
        this._dataAbertura = new Date();
        this._operacoes = [];
    }
    get numero() {
        return this._numero;
    }
    get id() {
        return this._id;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(umCliente) {
        if (umCliente) {
            this._cliente = umCliente;
        }
    }
    get saldo() {
        return this._saldo;
    }
    set id(umId) {
        this._id = umId;
    }
    get operacoes() {
        return this._operacoes;
    }
    sacar(valor) {
        const saldoApos = this._saldo - valor;
        if (saldoApos >= -this._limite) {
            this._saldo -= valor;
            const operacao = new Operacao(this._idOperacaoAtual, this, "DÉBITO", valor, `Saque na conta ${this._numero}`, new Date());
            this._idOperacaoAtual++;
            this._operacoes.unshift(operacao);
            return operacao;
        }
        const operacao = new Operacao(this._idOperacaoAtual, this, "FALHA", valor, "Saque não autorizado: limite de saldo excedido", new Date());
        this._idOperacaoAtual;
        this._operacoes.unshift(operacao);
        return operacao;
    }
    depositar(valor) {
        this._saldo += valor;
        const operacao = new Operacao(this._idOperacaoAtual, this, "CRÉDITO", valor, `Depósito na conta ${this._numero}`, new Date());
        this._idOperacaoAtual++;
        this._operacoes.unshift(operacao);
        return operacao;
    }
    transferir(contaDestino, valor) {
        const operacoes = [];
        const operacao1 = this.sacar(valor);
        operacoes.push(operacao1);
        if (operacao1.tipo == "FALHA")
            return operacoes;
        const operacao2 = contaDestino.depositar(valor);
        operacoes.push(operacao2);
        return operacoes;
    }
}
//# sourceMappingURL=conta.js.map