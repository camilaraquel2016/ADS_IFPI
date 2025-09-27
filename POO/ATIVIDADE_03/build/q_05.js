"use strict";
/* rest parameter permite que uma função receba uma quantidade
variável de argumentos e os trate como um array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function exibir(...letras) {
    letras.forEach(letra => console.log(letra));
}
function main() {
    exibir("a");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}
main();
//# sourceMappingURL=q_05.js.map