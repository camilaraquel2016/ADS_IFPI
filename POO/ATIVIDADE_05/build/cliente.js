import { Conta } from "./conta.js";
export class Cliente {
    constructor(id, nome, cpf, dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getDataNascimento() {
        return this.dataNascimento;
    }
    getContas() {
        return this.contas;
    }
    adicionarConta(conta) {
        const jaExiste = this.getContas().some(c => c.getId() == conta.getId());
        if (!jaExiste) {
            this.contas.push(conta);
            return true;
        }
        return false;
    }
    removerConta(conta) {
        const indexConta = this.getContas().findIndex(c => c.getId() == conta.getId());
        if (indexConta != -1) {
            this.contas.splice(indexConta, 1);
        }
    }
}
//# sourceMappingURL=cliente.js.map