"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortearNome(nomes) {
    if (nomes.length == 0) {
        throw new Error("Array vazio!");
    }
    const indice = Math.floor(Math.random() * nomes.length);
    return nomes[indice];
}
function main() {
    const nomes = ["Ana", "Bruno", "Carlos"];
    try {
        const escolhido = sortearNome(nomes);
        console.log(`Nome sorteado: ${escolhido}`);
    }
    catch (error) {
        console.log("Não foi possível sortear um nome.\nErro:", error.message);
    }
}
main();
//# sourceMappingURL=q_09.js.map