import { Veiculo } from "./veiculo.js";
export class Carro extends Veiculo {
    _modelo;
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this._modelo = modelo;
    }
    get modelo() {
        return this.modelo;
    }
}
//# sourceMappingURL=carro.js.map