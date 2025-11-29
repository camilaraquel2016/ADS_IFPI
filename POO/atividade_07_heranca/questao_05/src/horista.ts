import { Diarista } from "./diarista.js";

export class Horista extends Diarista {
    calcularSalario(): number {
        return super.calcularSalario() / 24;
    }
}

