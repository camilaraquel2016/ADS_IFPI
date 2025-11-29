import { Empregado } from "./empregado.js";

export class Diarista extends Empregado {
    override calcularSalario(): number {
        return super.calcularSalario() / 30;
    }
}

