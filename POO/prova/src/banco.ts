import type { SrvRecord } from "dns";
import { Cliente } from "./cliente.js";
import type { Conta } from "./conta.js";
import type { Operacao } from "./operacao.js";

export class Banco {
    private _contas: Conta[];
    private _clientes: Cliente[];
    private _operacoes: Operacao[];
    private _idClienteAtual: number;
    private _idContaAtual: number;

    constructor() {
        this._contas = [];
        this._clientes = [];
        this._operacoes = [];
        this._idClienteAtual = 1;
        this._idContaAtual = 1;
    }

   inserirConta(conta: Conta) {
        conta.id = this._idContaAtual++;

        if (!this.consultarConta(conta.numero)) {
            this._contas.unshift(conta);
        }
    }



    consultarConta(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }



    inserirCliente(cliente: Cliente): void {
        cliente.id = this._idClienteAtual++

        if (!this.consultarCliente(cliente.cpf)) {
            this._clientes.push(cliente);
        }
    }

    consultarCliente(cpf: string): Cliente {
        let clienteProcurado!: Cliente;

        for (let cliente of this._clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }
    
    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarCliente(cpfCliente);

        if (contaProcurada && clienteProcurado &&
            !this.jaExisteContaParaCliente(clienteProcurado.cpf, contaProcurada.numero)) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
        }
    }
        jaExisteContaParaCliente(cpf: string, numero: string): boolean {
        let contaProcurada = this.consultarConta(numero);
        let clienteProcurado = this.consultarCliente(cpf);

        if (!contaProcurada && !clienteProcurado) {
            return false
        }

        if (contaProcurada.cliente == null) {
            return false;
        }

        if (contaProcurada.cliente.cpf == clienteProcurado.cpf) {
            return true;
        }

        for (let contaAssociada of clienteProcurado.contas) {
            if (contaAssociada.numero == contaProcurada.numero) {
                return true;
                break;
            }
        }

        return false;
    }

    sacar(numero: string, valor: number): void {
        let contaProcurada = this.consultarConta(numero);

        if (contaProcurada){
            const operacao = contaProcurada.sacar(valor);
            this._operacoes.unshift(operacao);
        }
    }

    depositar(numero: string, valor: number): void {
        let contaProcurada = this.consultarConta(numero);

        if (contaProcurada){
            const operacao = contaProcurada.depositar(valor);
            this._operacoes.unshift(operacao);
        }
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem = this.consultarConta(numeroOrigem);
        let contaDestino = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            const operacao = contaOrigem.transferir(contaDestino, valor);
            
            if (operacao.length == 1) {
                this._operacoes.unshift(operacao[0]!);
            }
            else {
                this._operacoes.unshift(operacao[0]!);
                this._operacoes.unshift(operacao[1]!);
            }
        }
    }

    consultarExtratoConta(numero: string): Operacao[] {
        let contaProcurada = this.consultarConta(numero);
        

        if (contaProcurada) {
            return contaProcurada.operacoes;
        }

        return [];
    }

    consultarExtratoGeral(): Operacao[] {
        return this._operacoes;
    }


}
