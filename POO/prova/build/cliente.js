import { Conta } from "./conta.js";
export class Cliente {
    _id;
    _nome;
    _cpf;
    _dataNascimento;
    _contas;
    constructor(nome, cpf, dataNascimento) {
        this._id = 0;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._contas = [];
    }
    set id(umId) {
        this.id = umId;
    }
    get cpf() {
        return this._cpf;
    }
    get nome() {
        return this._nome;
    }
    get contas() {
        return this._contas;
    }
}
//# sourceMappingURL=cliente.js.map