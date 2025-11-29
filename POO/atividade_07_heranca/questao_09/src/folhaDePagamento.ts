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


let p1 = new Pessoa('a', 'a');
let p2 = new Funcionario('b', 'b', '123', 100);
let p3 = new Professor('c', 'c', '123', 150, 'qq');

let p4 = new Pessoa('d', 'd');
let p5 = new Funcionario('e', 'e', '123', 15);
let p6 = new Professor('f', 'f', '123', 130, 'qq');

let pessoas: Array<Pessoa> = [];

pessoas.push(p1, p2, p3, p4, p5, p6);

let f1 = new FolhaDePagamento(pessoas);

console.log(f1.calcularPagamentos());