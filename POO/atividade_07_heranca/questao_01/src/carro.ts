import { Veiculo } from "./veiculo.js";

export class Carro extends Veiculo{
    private _modelo: string;

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano);
        this._modelo = modelo;
    }

    get modelo(): string {
        return this.modelo;
    }
}

