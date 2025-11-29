export class Calculadora {
    _operando1;
    _operando2;
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
}
//# sourceMappingURL=calculadora.js.map