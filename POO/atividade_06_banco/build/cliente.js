import { Conta } from "./conta.js";
export class Cliente {
    constructor(id, cpf, nome, dataNascimento) {
        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
    getId() {
        return this.id;
    }
    getCpf() {
        return this.cpf;
    }
    getNome() {
        return this.nome;
    }
    getDataNascimento() {
        return this.dataNascimento;
    }
    getContas() {
        return this.contas;
    }
    adicionarConta(conta) {
        const jaExiste = this.getContas().some(c => c.getId() == conta.getId());
        if (jaExiste) {
            return false;
        }
        this.getContas().push(conta);
        return true;
    }
    removerConta(conta) {
        const indexConta = this.getContas().findIndex(c => c.getId() == conta.getId());
        if (indexConta != -1) {
            this.contas.splice(indexConta, 1);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=cliente.js.map