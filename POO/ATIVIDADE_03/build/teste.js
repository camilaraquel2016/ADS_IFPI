"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somar(...numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma;
}
console.log(somar(1, 15, 56));
//# sourceMappingURL=teste.js.map