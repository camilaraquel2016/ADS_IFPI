let a = 10;
let b = "5";

console.log(a + b);


/*

saída: 105

O operador + possui duas funções básicas: somar números e concatenar string.
Ao usar esse operador com uma string e com um number, ele tenta fazer um concatenação,
logo a variável (a) foi convertida em uma string e concatenada com a variável (b).

Ao operar string e number o operador + dará prioridade a concatenação, assim ele transforma
number em string, mas se o operador for -, *, ou /, a string que será convertida para number
para assim fazer a operação matemática desejada.

*/

