import { Calculadora } from "./calculadora.js";

class CalculadoraCientifica extends Calculadora {
    exponenciar(): number {
        return this.operando1 ** this.operando2;
    }
}

let calculadora: CalculadoraCientifica = new CalculadoraCientifica(3, 4);
console.log(calculadora.somar());
console.log(calculadora.exponenciar());