"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorteio {
    nomes = [];
    adicionar = (nome) => { this.nomes.push(nome); };
    sortear = () => {
        if (this.nomes.length == 0) {
            throw new Error("Lista de nomes vazia!");
        }
        ;
        const indiceSorteado = Math.floor(Math.random() * this.nomes.length);
        return this.nomes[indiceSorteado];
    };
}
function sortearNome(sorteio) {
    try {
        const nomeSorteado = sorteio.sortear();
        return nomeSorteado;
    }
    catch (error) {
        console.log("Não foi possível sortear um nome!\nErro:", error.message);
        return null;
    }
}
function main() {
    let sorteio = new Sorteio();
    sorteio.adicionar("Camila");
    sorteio.adicionar("Maria");
    sorteio.adicionar("João");
    console.log("Nome sorteado:", sortearNome(sorteio));
}
main();
//# sourceMappingURL=q_11.js.map