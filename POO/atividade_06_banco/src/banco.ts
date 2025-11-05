import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";

export class Banco {
    private contas: Conta[];
    private clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    getContas(): Conta[] {
        return this.contas;
    }

    getClientes(): Cliente[] {
        return this.clientes;
    }

    // método find retorna o objeto

    consultarClientePorId(id: number): Cliente | undefined {
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


    // cpf e id de cliente são únicos, logo não podemos inserir um cliente, onde seu cpf ou id já estão cadastrados
    
    inserirCliente(cliente: Cliente): void {
        const cpfExiste = this.consultarClientePeloCpf(cliente.getCpf());
        const idExiste = this.consultarClientePorId(cliente.getId());

        if (cpfExiste && idExiste) {
            throw new Error("\nErro: Esse CPF e ID já estão vinculados a cliente!\n");
        }
        if (cpfExiste) {
            throw new Error("\nErro: Esse CPF já está vinculado a um cliente!\n");
        }
        if (idExiste) {
            throw new Error("\nErro: Esse ID já está vinculado a um cliente!\n");
        }

        this.clientes.push(cliente); // nenhum cliente com esse id ou cpf, logo podemos inserir
    }


    excluirCliente(cliente: Cliente): void {
        const indexCliente = this.getClientes().findIndex(c => c.getCpf() == cliente.getCpf());

        this.clientes.splice(indexCliente, 1); // remover cliente do array de clientes do banco

        this.contas.forEach(conta => { // mudar titularidade para null das contas que pertenciam ao cliente a ser removido
            if (conta.getCliente()?.getCpf() == cliente.getCpf()) {
                conta.setCliente(null);
            }
        });
    }

    inserirConta(conta: Conta): void { // toda conta passada como parâmetro, já possui um cliente, cliente esse já cadastrado no banco (garantia feita pela função de criar conta para cliente no app.ts)
        const idExiste = this.consultarContaPeloId(conta.getId());
        const numeroExiste = this.consultarContaPeloNumero(conta.getNumero());

        if (idExiste && numeroExiste) {
            throw new Error("\nErro: Esse ID e número já estão vinculado a contas!\n");
        }
        if (idExiste) {
            throw new Error("\nErro: Esse ID já está vinculado a uma conta!\n");
        }
        if (numeroExiste) {
            throw new Error("\nErro: Esse número já está vinculado a uma conta!\n");
        }

        this.contas.push(conta);
        // além de inserir no array de contas no banco
        // vamos inserir no array de conta do cliente 
        conta.getCliente()!.adicionarConta(conta);
    }

    transferir(numContaOrigem: string, numContaDestino: string, valor: number): void {
        const contaOrigem = this.consultarContaPeloNumero(numContaOrigem);
        const contaDestino = this.consultarContaPeloNumero(numContaDestino);

        if (contaOrigem && contaDestino) {
            if (contaOrigem.transferir(valor, contaDestino)) return;
            throw new Error("\nErro: Saldo insuficiente!\n");
        }

        if (!contaOrigem && !contaDestino) {
            throw new Error("\nErro: Os números de conta fornecidos não estão cadastrados no banco!\n");
        }

        if (!contaOrigem) {
            throw new Error("\nErro: O número da conta de origem não está associado a nenhuma conta!\n");
        }

        if (!contaDestino) {
            throw new Error("\nErro: O número da conta de destino não está associado a nenhuma conta!\n");
        }
    }

    sacar(numConta: string, valor: number): void {
        const contaExiste = this.consultarContaPeloNumero(numConta);

        if (contaExiste) {
            if (contaExiste.sacar(valor)) return;

            throw new Error("\nErro: Saldo insuficiente!\n");
        }

        throw new Error("\nErro: Esse número não está associado a nenhuma conta!\n");        
    }

    depositar(numConta: string, valor: number): boolean {
        const contaExiste = this.consultarContaPeloNumero(numConta);

        if (contaExiste) {
            contaExiste.depositar(valor);
            return true;
        }

        return false;
    }

    totalizarSaldoCliente(cpf: string): number {
        const clienteExiste = this.consultarClientePeloCpf(cpf);

        if (clienteExiste) {
            const saldoTotal = clienteExiste.getContas().reduce((total, conta) => total + conta.getSaldo(), 0);
            return saldoTotal;
        }

        throw new Error("\nErro: Esse CPF não está associado a nenhum cliente");
    }

    consultarContasDeUmCliente(cpf: string): Conta[] | undefined {

        const clienteExiste = this.consultarClientePeloCpf(cpf);

        if (clienteExiste) {
            return clienteExiste.getContas();
        }

        return undefined;
    }

    associarClienteAConta(cpf: string, numConta: string): void {
        let clienteExiste: Cliente | undefined = this.consultarClientePeloCpf(cpf);
        let contaExiste: Conta | undefined = this.consultarContaPeloNumero(numConta);

        if (clienteExiste && contaExiste) {
            if (contaExiste.getCliente()?.getId() == clienteExiste.getId()) {
                throw new Error("\nErro: Essse cliente já está associado a essa conta!\n");
            }
            else {
                contaExiste.getCliente()?.removerConta(contaExiste);
                contaExiste.setCliente(clienteExiste);
                clienteExiste.adicionarConta(contaExiste);
            }
        }
        else if (!contaExiste && !clienteExiste) {
            throw new Error("\nErro: Esse número de conta e CPF não estão cadastrados no banco!");
        }
        else if (!contaExiste) {
            throw new Error("\nErro: Esse número de conta não está cadastrado no banco!");
        }
        else if (!clienteExiste) {
            throw new Error("\nErro: Esse CPF não está cadastrado no banco!");
        }        
    }

    excluirConta(conta: Conta): void { // remover do array de contas do banco e remover do array de contas do cliente associado
        let indexContaArrayBanco: number = this.getContas().findIndex(c => c.getId() == conta.getId());

        this.contas.splice(indexContaArrayBanco, 1);
        conta.getCliente()?.removerConta(conta);
    }

    transferenciaMultipla(contaOrigem: Conta, numerosContasDestino: string[], valorInvidual: number): void {
        numerosContasDestino.forEach(numContaDestino => {this.transferir(contaOrigem.getNumero(), numContaDestino, valorInvidual)});
    }

    obterQtdContas(): number {
        return this.getContas().length;
    }

    obterSaldoTotalDasConta(): number {
        return this.getContas().reduce((total, conta) => total + conta.getSaldo(), 0);
    }
    
    obterMediaDosSaldos(): number {
        let qtdContas = this.obterQtdContas();

        if (qtdContas == 0) return 0;
        return this.obterSaldoTotalDasConta() / qtdContas;
    }

    obterContasSemClientes(): Conta[] {
        return this.contas.filter(c => c.getCliente() == null);
    }

    carregarDados(): void {
        this.inserirCliente(new Cliente(1, "123", "Camila", new Date(2004-10-22)));
        this.inserirCliente(new Cliente(2, "456", "João", new Date(2005-10-22)));
        this.inserirCliente(new Cliente(3, "789", "José", new Date(2006-5-15)));
        this.inserirCliente(new Cliente(4, "987", "Maria", new Date(2007-10-22)));
        this.inserirCliente(new Cliente(5, "321", "Cecília", new Date(2008-10-22)));
        
        this.inserirConta(new Conta(1, "111", 150, this.consultarClientePeloCpf("123")!, new Date()));
        this.inserirConta(new Conta(2, "222", 0, this.consultarClientePeloCpf("123")!, new Date()));
        this.inserirConta(new Conta(3, "333", 100, this.consultarClientePeloCpf("456")!, new Date()));
        this.inserirConta(new Conta(4, "444", 100, this.consultarClientePeloCpf("789")!, new Date()));
        this.inserirConta(new Conta(5, "555", 5, this.consultarClientePeloCpf("789")!, new Date()));
    } 


}
          










