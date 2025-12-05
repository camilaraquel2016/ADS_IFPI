export class Recurso {
    private nome: string;
    private qtdInstancias: number;
    private qtdDisponivel: number;

    constructor(nome: string, qtdInstancias: number) {
        this.nome = nome;
        this.qtdInstancias = qtdInstancias;
        this.qtdDisponivel = qtdInstancias;
    }

    emprestar(qtd: number): boolean {
        if (qtd > this.qtdDisponivel) {
            console.log(`Existem apenas ${this.qtdDisponivel} "${this.nome}" disponíveis e você está tentando pegar ${qtd}`);
            return false;
        }

        this.qtdDisponivel-=qtd;
        return true;
    }

    devolver(qtd: number): void {
        this.qtdDisponivel+=qtd;
    }

    getNome(): string {
        return this.nome;
    }
    
    getQtdInstancias(): number {
        return this.qtdInstancias;
    }

    getQtdDisponivel(): number {
        return this.qtdDisponivel;
    }
}