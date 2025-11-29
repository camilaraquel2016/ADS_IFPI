import { Funcionario } from "./funcionario.js";

class Professor extends Funcionario {
    private _titulacao: string;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }

    get titulacao(): string {
        return this._titulacao;
    }

    override calcularSalarioPrimeiraParcela(): number {
        return this.salario;
    }

    override calcularSalarioSegundaParcela(): number {
        return 0;
    }
}

