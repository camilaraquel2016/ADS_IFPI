export class Processo {
    static contador = 1;
    id;
    alocacao;
    necessidade;
    constructor(alocacao, necessidade) {
        this.id = Processo.contador++;
        this.alocacao = alocacao;
        this.necessidade = necessidade;
    }
    getId() {
        return this.id;
    }
}
//# sourceMappingURL=processo.js.map