import { Cliente } from "./cliente.js"
import { Conta } from "./conta.js";

export class Banco {
    private clientes: Cliente[];
    private contas: Conta[];

    constructor() {
        this.clientes = [];
        this.contas = [];
    }

    getClientes(): Cliente[] {
        return this.clientes;
    }

    getContas(): Conta[] {
        return this.contas;
    }

    consultarClientePeloId(id: number): Cliente | undefined {
        return this.getClientes().find(c => c.getId() == id);
    }

    consultarClientePeloCpf(cpf: string): Cliente | undefined {
        return this.getClientes().find(c => c.getCpf() == cpf);
    }

    consultarContaPeloId(id: number): Conta | undefined {
        return this.getContas().find(c => c.getId() == id);
    }

    consultarContaPeloNumero(numero: string): Conta | undefined {
        return this.getContas().find(c => c.getNumero() == numero);
    }

    inserirCliente(cliente: Cliente): void {
        const cpfExiste = this.consultarClientePeloCpf(cliente.getCpf());
        const idExiste = this.consultarClientePeloId(cliente.getId());

        if (cpfExiste && idExiste) {
            throw new Error("Erro: Esse CPF e Id já estão vinculados a clientes!");
        }

        if (cpfExiste) {
            throw new Error("Erro: Esse CPF já está vinculado a um cliente!");
        }

        if (idExiste) {
            throw new Error("Erro: Esse ID já está vinculado a um cliente!");
        }

        this.clientes.push(cliente);
    }

    inserirConta(conta: Conta): void {
        const idExiste = this.consultarContaPeloId(conta.getId());
        const numeroExiste = this.consultarContaPeloNumero(conta.getNumero());
        
        if (idExiste && numeroExiste) {
            throw new Error("Erro: Esse Id e número já estão vinculados a contas!");
        }

        if (idExiste) {
            throw new Error("Erro: Esse Id já está vinculado a uma conta!");
        }
    
        if (numeroExiste) {
            throw new Error("Erro: Esse número já está vinculado a uma conta!");
        }

        this.contas.push(conta);
    }


    removerContaPeloNumero(numero: string): boolean {
        const indexConta = this.getContas().findIndex(c => c.getNumero() == numero);

        if (indexConta != -1) {

            const conta = this.getContas()[indexConta];
            const cliente = conta.getCliente();
            cliente.removerConta(conta);

            this.contas.splice(indexConta, 1);
            return true;
        }
        return false;
    }


    consultarContasDeUmCliente(cpf: string): Conta[] | undefined {

        const cliente = this.consultarClientePeloCpf(cpf);

        if (cliente) {
            return cliente.getContas();
        }

        return undefined;
    }

    totalizarSaldoCliente(cpf: string): number {

        const cliente = this.consultarClientePeloCpf(cpf);

        if (cliente) {
            const saldoTotal = cliente.getContas().reduce((total, conta) => total + conta.getSaldo(), 0);
            return saldoTotal;
        }

        throw new Error("Erro: Esse CPF não está associado a nenhum cliente!");
    }

    depositar(numeroConta: string, valor: number): boolean {
        const contaExiste = this.consultarContaPeloNumero(numeroConta);

        if (contaExiste) {
            contaExiste.depositar(valor);
            return true;
        }

        return false;
    }

    sacar(numeroConta: string, valor: number): void {
        const contaExiste = this.consultarContaPeloNumero(numeroConta);

        if (contaExiste) {
            if (contaExiste.sacar(valor)) {
                return;
            }
            throw new Error("Erro: Saldo insuficiente!");
        }
        else {
            throw new Error("Erro: Esse número não está associado a nenhuma conta!");
        }
    }

    transferir(numContaOrigem: string, numContaDestino: string, valor: number): void {
        const contaOrigem = this.consultarContaPeloNumero(numContaOrigem);
        const contaDestino = this.consultarContaPeloNumero(numContaDestino);

        if (contaOrigem && contaDestino) {
            if (contaOrigem.sacar(valor)) {
                contaDestino.depositar(valor);
            }
            else {
                throw new Error("Saldo insuficiente para transferir!");
            }
        }

        else if (!contaOrigem && !contaDestino) {
            throw new Error("Erro: Os números de conta fornecidos não estão cadastrados no banco!");
        }

        else if (!contaOrigem) {
            throw new Error("Erro: O número da conta de origem não está associado a nenhuma conta");
        }

        else if (!contaDestino) {
            throw new Error("Erro: O número da conta de destino não está associado a nenhuma conta");
        }
    } 

    associarUmClienteAUmaConta(numConta: string, cpfCliente: string): void {
        const contaExiste = this.consultarContaPeloNumero(numConta);
        const clienteExiste = this.consultarClientePeloCpf(cpfCliente);

        if (contaExiste && clienteExiste) {
            if (contaExiste.getCliente().getId() == clienteExiste.getId()) {
                throw new Error("Erro: Essa conta já está associada a esse cliente!");
            }
            else {
                const antigoDono: Cliente = contaExiste.getCliente();
                antigoDono.removerConta(contaExiste);

                const novoDono: Cliente = clienteExiste;

                contaExiste.setCliente(novoDono);

                novoDono.adicionarConta(contaExiste);
            }
        }
        else if (!contaExiste && !clienteExiste) {
            throw new Error("Erro: Esse número de conta e CPF não estão cadastrados no banco!");
        }
        else if (!contaExiste) {
            throw new Error("Erro: Esse número de conta não está cadastrado no banco!");
        }
        else if (!clienteExiste) {
            throw new Error("Erro: Esse CPF não está cadastrado no banco!");
        }
    }
}

