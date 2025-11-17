import { Conta } from "./conta.js";
export class Operacao {
    _id;
    _conta;
    _tipo;
    _valor;
    _descricao;
    _dataHora;
    constructor(id, conta, tipo, valor, descricao, dataHora) {
        this._id = id;
        this._conta = conta;
        this._tipo = tipo;
        this._valor = valor;
        this._descricao = descricao;
        this._dataHora = dataHora;
    }
    get id() {
        return this._id;
    }
    get conta() {
        return this._conta;
    }
    get tipo() {
        return this._tipo;
    }
    get valor() {
        return this._valor;
    }
    get descricao() {
        return this._descricao;
    }
    get dataHora() {
        return this._dataHora;
    }
    set descricao(descricao) {
        this._descricao = descricao;
    }
}
//# sourceMappingURL=operacao.js.map