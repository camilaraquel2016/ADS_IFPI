import { Pessoa } from "./pessoa.js";
import { PERCENTUAL_PRIMEIRA_PARCELA, PERCENTUAL_SEGUNDA_PARCELA } from "./dados.js";


class Funcionario extends Pessoa {
    private _matricula: string;
    private _salario: number = 0;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this.salario = salario;
    }

    get matricula(): string {
        return this._matricula;
    }

    get salario(): number {
        return this._salario;
    }

    set salario(salario: number) {
        if (salario > 0) {
            this._salario = salario;
        }
    }

    calcularSalarioPrimeiraParcela(): number {
        return PERCENTUAL_PRIMEIRA_PARCELA * this.salario;
    }

    calcularSalarioSegundaParcela(): number {
        return PERCENTUAL_SEGUNDA_PARCELA * this.salario;
    }
}


