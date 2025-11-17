import { Cliente } from "./cliente.js";
export class Banco {
    _contas;
    _clientes;
    _operacoes;
    _idClienteAtual;
    _idContaAtual;
    constructor() {
        this._contas = [];
        this._clientes = [];
        this._operacoes = [];
        this._idClienteAtual = 1;
        this._idContaAtual = 1;
    }
    inserirConta(conta) {
        conta.id = this._idContaAtual++;
        if (!this.consultarConta(conta.numero)) {
            this._contas.unshift(conta);
        }
    }
    consultarConta(numero) {
        let contaProcurada;
        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }
    inserirCliente(cliente) {
        cliente.id = this._idClienteAtual++;
        if (!this.consultarCliente(cliente.cpf)) {
            this._clientes.push(cliente);
        }
    }
    consultarCliente(cpf) {
        let clienteProcurado;
        for (let cliente of this._clientes) {
            if (cliente.cpf == cpf) {
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }
    associarContaCliente(numeroConta, cpfCliente) {
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);
        if (contaProcurada && clienteProcurado &&
            !this.jaExisteContaParaCliente(clienteProcurado.cpf, contaProcurada.numero)) {
            contaProcurada.cliente = clienteProcurado;
            clienteProcurado.contas.push(contaProcurada);
        }
    }
    jaExisteContaParaCliente(cpf, numero) {
        let contaProcurada = this.consultarConta(numero);
        let clienteProcurado = this.consultarCliente(cpf);
        if (!contaProcurada && !clienteProcurado) {
            return false;
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
    sacar(numero, valor) {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            const operacao = contaProcurada.sacar(valor);
            this._operacoes.unshift(operacao);
        }
    }
    depositar(numero, valor) {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            const operacao = contaProcurada.depositar(valor);
            this._operacoes.unshift(operacao);
        }
    }
    transferir(numeroOrigem, numeroDestino, valor) {
        let contaOrigem = this.consultarConta(numeroOrigem);
        let contaDestino = this.consultarConta(numeroDestino);
        if (contaOrigem && contaDestino) {
            const operacao = contaOrigem.transferir(contaDestino, valor);
            if (operacao.length == 1) {
                this._operacoes.unshift(operacao[0]);
            }
            else {
                this._operacoes.unshift(operacao[0]);
                this._operacoes.unshift(operacao[1]);
            }
        }
    }
    consultarExtratoConta(numero) {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            return contaProcurada.operacoes;
        }
        return [];
    }
    consultarExtratoGeral() {
        return this._operacoes;
    }
}
//# sourceMappingURL=banco.js.map