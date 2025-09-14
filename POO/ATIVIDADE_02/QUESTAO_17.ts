/*17. Alterne a opção noImplicitAny com valor true/false, teste o código abaixo teste o
código abaixo e descreva o que acontece:
*/

let valor; // Tipo implícito "any"
valor = 10;
valor = "teste";
console.log(valor);

/*
Nesse trecho de código é possível notar que a variável valor está recebendo tipos
diferentes. Isso acontece porque ao cria essa variável a mesma não teve seu tipo 
declarado e nem um valor inicializado, logo o TypeScript assumiu o tipo any (qualquer coisa),
por isso ela pode receber number, string ou boolean.
*/

let outroValor: number; // Tipo declarado
outroValor = 20;

console.log(outroValor);

/*
Já nesse outro trecho a variável outroValor teve seu tipo declarado, logo ao atribuir um valor
diferente do seu tipo suportado o compilador vai reclamar devido a tipagem ser estática.

A configuração noImplictAny quando ativada impede que o TypeScript assuma automaticamente
o tipo any para algo sem tipo declarado, ou seja, força o programador a declarar explicitamente
o tipo, em vez de deixar implícito any. Isso ajuda a aumentar a segurança dos tipos e 
evitar que variáveis possam receber qualquer valor de qualquer tipo.

Exemplo de como a configuração noImplictAny pode ser eficaz:

Soma de 2 números:

*/

function soma(a, b) { 
  return a + b;
}

/*
Com noImplictAny desativado, o programador pode criar a função sem 
a declaração dos parâmetros e o compilador irá deixar a e b como sendo do tipo any,
assim qualquer valor poderia ser passado na função, gerando resultados inesperados.
*/


function soma(a: number, b: number): number {
  return a + b;
}

/*
Com essa configuração ativada o programador é obrigado a especificar os tipos do
parâmetros que a função recebe, logo isso impede que a função soma receba outro valor
diferente do esperado.

Agora ela está segura e não vai retornar resultados inesperados.

OBSERVAÇÃO: 
A configuração noImplictAny não se aplica a todas as variáveis.
Variáveis soltas como 'let valor' no exemplo, não geram erro, mesmo com a configuração ativada,
porque o TypeScript permite que elas tenham tipo 'any' impliícito.

O noImplictAny age principalmente em:
- Parâmetros de função sem tipo declarado
- Tipos de retorno de funções que não podem ser inferidos
- Alguns contextos onde a inferência de tipo não é segura.

*/


