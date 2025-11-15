import { Exemplar } from "./exemplar.js";
import { Monitor } from "./monitor.js";
export class Livro {
    static contador = 0;
    _id;
    titulo;
    qtdDisponivel;
    _exemplares = [];
    monitor = new Monitor();
    constructor(titulo, qtdExemplares) {
        this._id = ++Livro.contador;
        this.titulo = titulo;
        this.qtdDisponivel = qtdExemplares;
        for (let i = 0; i < qtdExemplares; i++) {
            this._exemplares.push(new Exemplar(this));
        }
    }
    async emprestrarSeguro() {
        await this.monitor.lock();
        try {
            await new Promise(r => setTimeout(r, Math.random() * 200));
            if (this.qtdDisponivel > 0) {
                await new Promise(r => setTimeout(r, Math.random() * 200));
                let exemplarEncontrado = this._exemplares.find(ex => ex.disponivel);
                exemplarEncontrado?.emprestar();
                console.log("Exemplar emprestado com sucesso.");
                this.qtdDisponivel--;
            }
            else {
                console.log("Nenhum exemplar disponível.");
            }
        }
        finally {
            this.monitor.unlock();
        }
    }
    async emprestarNaoSeguro() {
        await new Promise(r => setTimeout(r, Math.random() * 200));
        if (this.qtdDisponivel > 0) {
            await new Promise(r => setTimeout(r, Math.random() * 200));
            let exemplarEncontrado = this._exemplares.find(ex => ex.disponivel);
            exemplarEncontrado?.emprestar();
            console.log("Exemplar emprestado com sucesso.");
            this.qtdDisponivel--;
        }
        else {
            console.log("Nenhum exemplar disponível.");
        }
    }
}
//# sourceMappingURL=livro.js.map