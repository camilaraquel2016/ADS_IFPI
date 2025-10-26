import { Conta } from "./conta.js";

export class Cliente {
    private id: number;
    private nome: string;
    private cpf: string;
    private dataNascimento: Date;
    private contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getDataNascimento(): Date {
        return this.dataNascimento;
    }

    getContas(): Conta[] {
        return this.contas;
    }

    adicionarConta(conta: Conta): boolean {
        const jaExiste = this.getContas().some(c => c.getId() == conta.getId());

        if (!jaExiste) {
            this.contas.push(conta);
            return true;
        }

        return false;
    }

    removerConta(conta: Conta): void {
        const indexConta = this.getContas().findIndex(c => c.getId() == conta.getId());

        if (indexConta != -1) {
            this.contas.splice(indexConta, 1);
        }  
    }
}