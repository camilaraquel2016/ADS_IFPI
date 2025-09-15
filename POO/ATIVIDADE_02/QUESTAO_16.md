16. Alterne a opção allowUnreachableCode com os valores true/false, teste o código
abaixo e descreva o que acontece:

```TypeScript
function main(){
    let x: number = 10;
    console.log("Início do programa");

    if (x > 5) {
    console.log("x é maior que 5");
// Tudo abaixo desse return nunca será executado
    return;

    console.log("Essa linha é inatingível!");   
    }
    console.log("Fim do programa");
}

main()
```

Quando x for maior que 5 a linha 11 é executada e logo depois o programa
encerra na linha 13 devido a return, mas quando ele é menor ou igual a 5 ele não entra no bloco
de código do if e imprime o que vier depois, no caso a linha 17. Nesse sentido, a linha 15 nunca será executada,
devido ao return antes dela.

Quando isso acontece pode ter 2 cenários, dependendo de como a opção allowUnreachableCode
está configurada.

Se estiver como false --> Aparece mensagem de erro dizendo que o programa possui linhas
de código que nunca serão executadas devido as condições usadas, como é o caso da linha 15.

Se estiver como true --> Não vai dar erro, nem nada, apenas será ignorada essa observação.

Ainda tem um terceiro cenário que é quando a configuração dessa opção está como padrão(undefined):
O editor apenas deixa a linha inatingível com uma cor cinza, ou seja, o aviso é no próprio editor.
