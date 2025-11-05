import { Cliente } from "./cliente.js";

// Ao criar uma conta precisamos informar um cliente, logo uma conta não pode ser criada sem um cliente
// ao remover um cliente do banco, as contas que pertenciam a ele, ficaram sem um cliente, logo o atributo cliente da classe conta será null
// apenas nesse caso a conta não terá um cliente
// além disso, uma vez que ela esteja com esse atributo como null, podemos atribuir um novo cliente a ela 


export class Conta {
    private id: number;
    private numero: string;
    private saldo: number;
    private cliente: Cliente | null;
    private dataAbertura: Date;

    constructor(id: number, numero: string, saldo: number, cliente: Cliente, dataAbertura: Date) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
        this.dataAbertura = dataAbertura;
    }

    getId(): number {
        return this.id;
    }

    getNumero(): string {
        return this.numero;
    }

    getSaldo(): number {
        return this.saldo;
    }

    setSaldo(valor: number): void {
        this.saldo = valor;
    }

    getCliente(): Cliente | null {
        return this.cliente;
    }

    setCliente(cliente: Cliente | null): void {
        this.cliente = cliente;
    }

    getDataAbertura(): Date {
        return this.dataAbertura;
    }

    sacar(valor: number): boolean {
        if (valor <= this.getSaldo()) {
            this.setSaldo(this.getSaldo() - valor);
            return true;
        }
        return false;
    }

    depositar(valor: number): void {
        this.setSaldo(this.getSaldo() + valor);
    }

    transferir(valor: number, contaDestino: Conta): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }

}


