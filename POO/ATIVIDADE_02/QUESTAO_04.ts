/*
4. Crie uma variável chamada idade do tipo number e tente atribuir a ela um valor string.
O que acontece?
*/

let idade: number;

idade = "Camila";

console.log(idade)

/* 
Usando TypeScript, ao atribuir uma string a uma variável do tipo number o compilador 
alerta antes de rodar o programa.

Além de avisar sobre o erro enquanto você digita ou compila, O compilador TS exibirá
a mensagem:

Type 'string' is not assignable to type 'number'.

Mesmo assim, o programador pode ignorar o erro e transpilar para JavaScript.
Ao rodar o arquivo JS gerado, ele irá imprimir normalmente "Camila".


Isso mostra que TypeScript cumpriu seu paapel de linguagem estátca: avisar e proteger
em tempo de compilação. Mas, ao ser "transpilado" para JS, o código ainda roda normalmente,
pois ele é na verdade um JavaScript, logo não possui checagem de tipos.
*/










