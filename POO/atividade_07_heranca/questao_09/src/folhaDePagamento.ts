import { Funcionario } from "./funcionario.js";
import { Pessoa } from "./pessoa.js";
import { Professor } from "./professor.js";

class FolhaDePagamento {
    private _pessoas: Pessoa[];

    constructor(pessoas: Pessoa[]) {
        this._pessoas = pessoas;
    }

    calcularPagamentos(): number {
        let total = 0;

        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Funcionario) {
                total+=pessoa.salario;
            }
        }

        return total;
    }
}


