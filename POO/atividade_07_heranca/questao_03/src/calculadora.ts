export class Calculadora {
    private _operando1: number;
    private _operando2: number;

    constructor(operando1: number, operando2: number) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    get operando1(): number {
        return this._operando1;
    }

    get operando2(): number {
        return this._operando2;
    }

    somar(): number {
        return this._operando1 + this._operando2;
    }
}