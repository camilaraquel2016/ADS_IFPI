import { Carro } from "./carro.js";
export class CarroEletrico extends Carro {
    _autonomiaBateria;
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
    }
    get autonomiaBateria() {
        return this._autonomiaBateria;
    }
}
//# sourceMappingURL=carroEletrico.js.map