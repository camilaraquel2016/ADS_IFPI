export class Exemplar {
    static contador = 0;
    _id;
    _disponivel;
    _livro;
    constructor(livro) {
        this._id = ++Exemplar.contador;
        this._disponivel = true;
        this._livro = livro;
    }
    get disponivel() {
        return this._disponivel;
    }
    emprestar() {
        if (this.disponivel) {
            this._disponivel = false;
            return true;
        }
        return false;
    }
    devolver() {
        if (!this._disponivel) {
            this._disponivel = true;
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=exemplar.js.map