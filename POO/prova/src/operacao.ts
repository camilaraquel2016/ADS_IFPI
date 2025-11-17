import { Conta } from "./conta.js";

export class Operacao{
    private _id: number;
    private _conta: Conta;
    private _tipo: string;
    private _valor: number;
    private _descricao: string;
    private _dataHora: Date;

    constructor(id: number, conta: Conta, tipo: string, valor: number, descricao: string, dataHora: Date){

        this._id = id;
        this._conta= conta;
        this._tipo = tipo;
        this._valor= valor;
        this._descricao = descricao;
        this._dataHora = dataHora;
    }

    get id(): number{
        return this._id;
    }

    get conta():Conta{
        return this._conta;
    }
    get tipo(): string{
        return this._tipo;
    }
    get valor(): number{
        return this._valor;
    }
    get descricao(): string{
        return this._descricao;
    }
    get dataHora(): Date{
        return this._dataHora;
    }

    set descricao(descricao: string){
        this._descricao = descricao;
    }
}