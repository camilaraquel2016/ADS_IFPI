import type { Livro } from "./livro.js";

export class Exemplar {
    private static contador: number = 0;
    private _id: number;
    private _disponivel: boolean;
    private _livro: Livro;

    constructor(livro: Livro) {
        this._id = ++Exemplar.contador;
        this._disponivel = true;
        this._livro = livro;
    }

    get disponivel(): boolean {
        return this._disponivel;
    }

    emprestar(): boolean {
        if (this.disponivel) {
            this._disponivel = false;
            return true;
        }

        return false;
    }

    devolver(): boolean {
        if (!this._disponivel) {
            this._disponivel = true;
            return true;
        }

        return false;
    }
}