/* 
20. Configure seu projeto para que seja possível realizar depuração alterando o
atributo sourceMap.
https://www.youtube.com/watch?v=4oQutHz96is

Execute pequenas depurações em trechos de código

Resposta:

Ao configurar "sourceMap": true; o TypeScript gera arquivos .js.map permitindo 
que seja feita a depuração do código.

Logo é possível executar pequenas depurações em trechos de código, colocar breakpoints
e analisar variáveis para entender melhor o fluxo e encontrar possíveis erros lógicos
ou semânticos.


EXEMPLO DE UMA PEQUENA DEPURAÇÃO:
*/

function soma(a: number, b: number): number {
    return a - b; 
}

/*
A função apresenta um erro semântico em vez de somar ela subtrai.
Poderíamos aplicar um breakpoint na linha do return a - b.
Quando for executada a depuração, o código para nesse breakpoint e podemos observar
que ao passar números como a = 5 e b = 3, ele vai retornar 2 e não 8 que é o esperado da soma.
Logo, podemos corrigir esse erro semântico através da depuração.
