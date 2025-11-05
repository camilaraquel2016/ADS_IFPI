import { Conta } from "./conta.js";

export class Cliente {
    private id: number;
    private cpf: string;
    private nome: string;
    private dataNascimento: Date;
    private contas: Conta[];

    constructor(id: number, cpf: string, nome: string, dataNascimento: Date) {
        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }

    getId(): number {
        return this.id;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNome(): string {
        return this.nome;
    }

    getDataNascimento(): Date {
        return this.dataNascimento;
    }

    getContas(): Conta[] {
        return this.contas;
    }

    adicionarConta(conta: Conta): boolean {
        const jaExiste = this.getContas().some(c => c.getId() == conta.getId());

        if (jaExiste) {
            return false;
        }

        this.getContas().push(conta);
        return true;
    }

    removerConta(conta: Conta): boolean {
        const indexConta = this.getContas().findIndex(c => c.getId() == conta.getId());

        if (indexConta != -1) {
            this.contas.splice(indexConta, 1);
            return true;
        }
        return false;
    }
}

