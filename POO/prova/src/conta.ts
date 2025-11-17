import { Cliente } from "./cliente.js";
import { Operacao } from "./operacao.js";


export class Conta {
    private _id: number;
    private _numero: string;
    private _cliente!: Cliente;
    private _saldo: number;
    private _limite: number;
    private _dataAbertura: Date;
    private _idOperacaoAtual: number = 1;
    private _operacoes: Operacao[];

    constructor(numero: string, saldo: number, limite: number) {
        this._id = 0;
        this._numero = numero;
        this._saldo = saldo;
        this._limite = limite;
        this._dataAbertura = new Date();
        this._operacoes = [];
    }
    get numero(): string {
        return this._numero;
    }
    get id(): number {
        return this._id;
    }


    get cliente(): Cliente {
        return this._cliente;
    }

    set cliente(umCliente: Cliente) {
        if (umCliente) {
            this._cliente = umCliente;
        }
    }

    get saldo(): number {
        return this._saldo;
    }

    set id(umId: number) {
        this._id = umId;
    }


    get operacoes(): Operacao[] {
        return this._operacoes;
    }

    sacar(valor: number): Operacao {
        const saldoApos = this._saldo - valor;

        if (saldoApos >= -this._limite) {
            this._saldo -= valor;

            const operacao: Operacao = new Operacao(this._idOperacaoAtual, this, "DÉBITO", valor, `Saque na conta ${this._numero}`, new Date());
            this._idOperacaoAtual++;
            this._operacoes.unshift(operacao);
            return operacao;
        }

        const operacao: Operacao = new Operacao(this._idOperacaoAtual, this, "FALHA", valor, "Saque não autorizado: limite de saldo excedido", new Date());
        this._idOperacaoAtual;
        this._operacoes.unshift(operacao);
        return operacao;
    }

    depositar(valor: number): Operacao {
        this._saldo += valor;

        const operacao: Operacao = new Operacao(this._idOperacaoAtual, this, "CRÉDITO", valor, `Depósito na conta ${this._numero}`, new Date());
        this._idOperacaoAtual++;
        this._operacoes.unshift(operacao);
        return operacao;
    }
    transferir(contaDestino: Conta, valor: number): Operacao[] {
        const operacoes: Operacao[] = [];

        const operacao1: Operacao = this.sacar(valor);
        operacoes.push(operacao1);
        

        if (operacao1.tipo == "FALHA") return operacoes;

        const operacao2: Operacao = contaDestino.depositar(valor);
        operacoes.push(operacao2);
        return operacoes;
    }
}
  
