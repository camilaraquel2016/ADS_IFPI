export class Processo {
    private static contador: number = 1;
    private id: number;
    alocacao: number[];
    necessidade: number[];

    constructor(alocacao: number[], necessidade: number[]) {
        this.id = Processo.contador++;
        this.alocacao = alocacao;
        this.necessidade = necessidade;
    }

    getId(): number {
        return this.id;
    }
    
}