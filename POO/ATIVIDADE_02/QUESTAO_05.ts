/*
5. Agora crie a variável nome sem declarar o tipo (apenas let nome = "Ely";). Qual o
tipo inferido pelo TypeScript?
*/

let nome = "Ely";

console.log(typeof nome);

/*
O TypeScript inferiu que o tipo da variável é string, mesmo sem termos
declarado explicitamente. Isso acontece graças ao recurso chamado type 
inference (inferência de tipo). Ou seja, ao inicializar uma variável sem informar
seu tipo, o TypeScript analisa o valor atribuído e determina automaticamente o tipo
adequado para a variável baseado no valor que foi lhe passado.



