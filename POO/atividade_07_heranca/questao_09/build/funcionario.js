import { Pessoa } from "./pessoa.js";
import { PERCENTUAL_PRIMEIRA_PARCELA, PERCENTUAL_SEGUNDA_PARCELA } from "./dados.js";
export class Funcionario extends Pessoa {
    _matricula;
    _salario = 0;
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this.salario = salario;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        if (salario > 0) {
            this._salario = salario;
        }
    }
    calcularSalarioPrimeiraParcela() {
        return PERCENTUAL_PRIMEIRA_PARCELA * this.salario;
    }
    calcularSalarioSegundaParcela() {
        return PERCENTUAL_SEGUNDA_PARCELA * this.salario;
    }
}
//# sourceMappingURL=funcionario.js.map