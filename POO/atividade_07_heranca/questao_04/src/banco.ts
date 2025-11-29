import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";
import { Poupanca } from "./poupanca.js";

export class Banco {
    private _contas: Conta[];
    private _clientes: Cliente[];
    private _idClienteAtual: number;
    private _idContaAtual: number;

    constructor() {
        this._contas = [];
        this._clientes = [];
        this._idClienteAtual =  1;
        this._idContaAtual = 1;
    }

    inserirConta(conta: Conta) {
        conta.id = this._idContaAtual++;

        if (!this.consultarConta(conta.numero)) {
            this._contas.push(conta);
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

    private consultarContaPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i]!.numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    excluir(numero: string): void {
        let indiceProcurado: number =
            this.consultarContaPorIndice(numero);

        if (indiceProcurado != -1) {
            if (this.consultarConta('numero').cliente) {
                return;
            }

            for (let i = indiceProcurado; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1]!;
            }
            this._contas.pop();
        }
    }

    alterar(conta: Conta): void {
        let contaProcurada: Conta = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
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

    excluirCliente(cpf: string) {
        let indice = this._clientes.findIndex( c => c.cpf == cpf);

        if (indice >= 0 && this._clientes[indice]!.contas.length == 0){
                this._clientes.splice(indice,1);
        }

    }

    sacar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.sacar(valor);
        }
    }

    depositar(numero: string, valor: number): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    renderJuros(numero: string): void {
        let contaProcurada: Conta = this.consultarConta(numero);

        if (contaProcurada && contaProcurada instanceof Poupanca) {
            // (<Poupanca> contaProcurada).renderJuros(); // cast é desnecessário após o if (TS)
            contaProcurada.renderJuros(); 
        }
    }

    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroOrigem);
        let contaDestino: Conta = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
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

        /*
        let conta2 = this.pesquisarContaPorCPF(clienteProcurado.cpf)
        if (conta2) {
            if (conta2.numero = contaProcurada.numero) {
                return true;
            }
        }*/

        return false;
    }

    pesquisarContaPorCPF(cpf: string): Conta {
        let contaProcurada!: Conta;

        for (let conta of this._contas) {
            if (conta.cliente && conta.cliente.cpf == cpf) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    listarContasSemCliente(): Conta[] {
        let contas: Conta[] = [];

        for (let conta of this._contas) {
            if (!conta.cliente) {
                contas.push(conta);
            }
        }

        return contas;
    }

    listarContasCliente(cpf: string): Conta[] {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let contas: Conta[] = [];

        if (clienteProcurado) {
            contas = clienteProcurado.contas;
        }
        return contas;
    }

    totalizarSaldoCliente(cpf: string): number {
        let clienteProcurado: Cliente = this.consultarCliente(cpf);
        let total: number = 0;
        if (clienteProcurado) {
            for (let conta of clienteProcurado.contas) {
                total += conta.saldo
            }
        }

        return total;
    }


    obterQuantidadeDeContas(): number {
        return this._contas.length;
    }


    obterTotalDinheiroDepositado(): number {
        let total: number = 0;

        for (let conta of this._contas) {
            total = total + conta.saldo;
        }
        return total;
    }


    calcularMediaSaldoContas(): number {
        return this.obterTotalDinheiroDepositado() / this.obterQuantidadeDeContas();
    }

    realizarOrdemBancaria(numeroContaOrigem: string, numerosContasDestino: string[], valor: number): void {
        let contaOrigem: Conta = this.consultarConta(numeroContaOrigem);
        //TODO: validar se o saldo suporta as n transferências

        if (!contaOrigem) {
            return;
        }

        for (let numeroDestino of numerosContasDestino) {
            let contaDestino = this.consultarConta(numeroDestino);

            if (contaDestino) {
                contaOrigem.sacar(valor);
                contaDestino.depositar(valor);
            }
        }
    }

    transferirTitularidade(numeroConta: string, cpf: string): void {
        let contaProcurada: Conta = this.consultarConta(numeroConta);
        let clienteProcurado: Cliente = this.consultarCliente(cpf);

        if (!contaProcurada && !clienteProcurado) {
            return;
        }

        if (this.jaExisteContaParaCliente(clienteProcurado.cpf, contaProcurada.numero)) {
            return;
        }

        this.associarContaCliente(contaProcurada.numero, clienteProcurado.cpf);
    }


    carregarDados() {
        let conta1: Conta = new Conta("111-1", 300);
        let conta2: Conta = new Conta("222-2", 0);
        let conta3: Conta = new Conta("333-3", 0);
        let conta4: Conta = new Conta("444-4", 0);
        let conta5: Poupanca = new Poupanca("555-5", 100, 10);
        let conta6: Poupanca = new Poupanca("666-6", 30, 5);

        this.inserirConta(conta1);
        this.inserirConta(conta2);
        this.inserirConta(conta3);
        this.inserirConta(conta4);
        this.inserirConta(conta5);
        this.inserirConta(conta6);

        let cliente1: Cliente = new Cliente("Ely", '825', new Date(1979, 6, 29));
        let cliente2: Cliente = new Cliente("Nicolas", '999', new Date(2004, 4, 24));

        this.inserirCliente(cliente1);
        this.inserirCliente(cliente2);


        this.associarContaCliente('111-1', '825');
        this.associarContaCliente('222-2', '999');
        this.associarContaCliente('333-3', '825');

    }
}
