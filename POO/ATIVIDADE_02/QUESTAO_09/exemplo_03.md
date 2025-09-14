```TypeScript
console.log(0 == false);
``` 

saída: This comparison appears to be unintentional because the types 'number' 
and 'boolean' have no overlap.

```TypeScript

console.log("" == false);
```

saída: This comparison appears to be unintentional because the types 'string'
and 'boolean' have no overlap.

Nos 2 exemplos acima, ele alerta ao usuário que ele está tentando comparar 
duas coisas diferentes que nunca se igualam.
Ele alerta isso graças a sua forte tipagem.

Ainda sim é possível executar o código, mas ele será na verdade um JS, seguindo suas regras
e deixando de lado os alertas que o TS informou.

O TypeScript só gera alerta quando a comparação parece uma possível má prática,
ou seja, quando os tipos não têm sobreposição (como number == boolean ou string == boolean).

Comparações que seguem regras conhecidas do JavaScript, como null == undefined, são consideradas
intencionais e não geram alerta, mesmo que envolvam tipos diferentes, como é o caso do código abaixo.


```TypeScript
console.log(null == undefined);
```





