export class Veiculo {
    private _placa: string;
    private _ano: number;

    constructor(placa: string, ano: number) {
        this._placa = placa;
        this._ano = ano;
    }

    get placa(): string {
        return this._placa;
    }

    get ano(): number {
        return this._ano;
    }
}

