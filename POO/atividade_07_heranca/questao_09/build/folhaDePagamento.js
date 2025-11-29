import { Funcionario } from "./funcionario.js";
import { Pessoa } from "./pessoa.js";
import { Professor } from "./professor.js";
class FolhaDePagamento {
    _pessoas;
    constructor(pessoas) {
        this._pessoas = pessoas;
    }
    calcularPagamentos() {
        let total = 0;
        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Funcionario) {
                total += pessoa.salario;
            }
        }
        return total;
    }
}
//# sourceMappingURL=folhaDePagamento.js.map