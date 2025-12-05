export class Recurso {
    nome;
    qtdInstancias;
    qtdDisponivel;
    constructor(nome, qtdInstancias) {
        this.nome = nome;
        this.qtdInstancias = qtdInstancias;
        this.qtdDisponivel = qtdInstancias;
    }
    emprestar(qtd) {
        if (qtd > this.qtdDisponivel) {
            console.log(`Existem apenas ${this.qtdDisponivel} "${this.nome}" disponíveis e você está tentando pegar ${qtd}`);
            return false;
        }
        this.qtdDisponivel -= qtd;
        return true;
    }
    devolver(qtd) {
        this.qtdDisponivel += qtd;
    }
    getNome() {
        return this.nome;
    }
    getQtdInstancias() {
        return this.qtdInstancias;
    }
    getQtdDisponivel() {
        return this.qtdDisponivel;
    }
}
//# sourceMappingURL=recurso.js.map