import { Empregado } from "./empregado.js";
export class Diarista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
//# sourceMappingURL=diarista.js.map