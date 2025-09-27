"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function retornarSaida(numeros) {
    let saida = "";
    numeros.forEach(numero => saida += `${numero} - `);
    return saida.slice(0, -3);
}
function main() {
    let numeros = [1, 5, 7, 10, 15, 19, 21, 24];
    console.log(retornarSaida(numeros));
}
main();
// ForEach: método usado em arrays para percorrer todos os elementos.
//# sourceMappingURL=q_03.js.map