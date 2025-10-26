import { Cliente } from "./cliente.js";

export class Conta {
    private id: number;
    private numero: string;
    private saldo: number;
    private cliente: Cliente;
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

    getCliente(): Cliente {
        return this.cliente;
    }

    setCliente(cliente: Cliente): void {
        this.cliente = cliente;
    }

    getDataAbertura(): Date {
        return this.dataAbertura;
    }

    sacar(valor: number): boolean {
        if (this.getSaldo() >= valor) {
            this.setSaldo(this.getSaldo() - valor);
            return true;
        }

        return false; 
    }

    depositar(valor: number): void {
        this.setSaldo(this.getSaldo() + valor);
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }

        return false;
    }


}