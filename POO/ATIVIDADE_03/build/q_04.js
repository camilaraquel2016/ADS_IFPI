"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(x, y) {
    return x + y;
}
function main() {
    console.log(soma(1, 2));
    console.log(soma(1, "2"));
    console.log(soma(1));
}
main();
/*

Primeira saída: 3

Ele faz a soma normalmente, visto que ambos os parâmetros são do tipo number


Segunda saída: 12

Aqui ele faz uma concatenação, pois parte de um dos princípios do JavaScript, ao usar operador
+, se um dos operandos for string, ele converte o outro para string também e faz a concatenação entre eles.

Embora a função seja uma soma e seu retorno do tipo number, ela pode retornar string ou NaN.
Isso foi possível, pois o segundo parâmetro foi declarado como any, ou seja, qualquer tipo pode ser passado.


Terceira saída: NaN

O segundo parâmetro é opcional, logo se o seu valor não for passado na função, ele recebi como padrão undefined, que foi
o que aconteceu nesse exemplo, x recebeu 1 e y recebeu undefined, pois nada foi passado a ele.
Portanto, ao somar 1 e undefined, ele retorna NaN, que significa que o valor passado não é número, logo
não é possível somar.

*/
//# sourceMappingURL=q_04.js.map