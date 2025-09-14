18. Alterne a opção strictNullChecks para true/false e descreva o que acontece com o
exemplo abaixo:

```TypeScript
let nome: string;
nome = "Ely";
console.log("Nome:", nome);
```
A configuração strictNullChecks quando ativada não permite que valores como 
null ou undefined sejam atribuídos à variáveis normais (string, number, boolean).

Ativar essa configuração ajuda a evitar bugs, garantindo que variáveis contenham sempre
valores válidos do tipo esperado.

Quando desativada, aumenta os riscos de erros em tempo de execução, porque null ou 
undefined podem aparecer a qualquer momento.

Há casos em que null ou undefined precisarão ser atribuídos à variáveis, por algum motivo.
Nesse sentido, podemos usar tipos union, ou seja, mesmo que a configuração strictNullChecks
esteja ativada, podemos declarar explicitamente que tal variável aceita além do seu tipo
original, valores como null e undefined.

Exemplo:
```TypeScript
let nome: string | null | undefined;
```

Assim TypeScript sabe que null e undefined são permitidos nessa variável e a segurança
ainda é mantida para os demais casos.
