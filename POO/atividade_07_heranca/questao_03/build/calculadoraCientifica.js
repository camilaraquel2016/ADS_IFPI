import { Calculadora } from "./calculadora.js";
class CalculadoraCientifica extends Calculadora {
    exponenciar() {
        return this.operando1 ** this.operando2;
    }
}
let calculadora = new CalculadoraCientifica(3, 4);
console.log(calculadora.somar());
console.log(calculadora.exponenciar());
//# sourceMappingURL=calculadoraCientifica.js.map