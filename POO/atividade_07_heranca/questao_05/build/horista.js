import { Diarista } from "./diarista.js";
export class Horista extends Diarista {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
//# sourceMappingURL=horista.js.map