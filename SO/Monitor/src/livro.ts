import { Exemplar } from "./exemplar.js";
import { Monitor } from "./monitor.js";

export class Livro {
    private static contador = 0;
    private _id: number;
    public titulo: string;
    public qtdDisponivel: number;
    private _exemplares: Exemplar[] = [];

    private monitor = new Monitor();
    
    constructor(titulo: string, qtdExemplares: number) {
        this._id = ++Livro.contador;
        this.titulo = titulo;
        this.qtdDisponivel = qtdExemplares;

        for (let i = 0; i < qtdExemplares; i++) {
            this._exemplares.push(new Exemplar(this));
        }
    }

    async emprestrarSeguro(): Promise<void> {
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

    async emprestarNaoSeguro(): Promise<void> {

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