```TypeScript
let x = true;
let y = 2;

console.log(x + y);
```

erro: Operator '+' cannot be applied to types 'boolean' and 'number'.

O TypeScript é fortemente tipado, ele não permite somar tipos que não tem
relação matemática clara.
Booleanos não são considerados números automaticamente no TS, logo ele reclama
quando o programador tenta executar essa soma.

OBS: 

Caso o programador ignore os avisos de erros, ele ainda pode ser executado
e ter como resultado a saída: 3, mas isso não é mais o TS em si e sim um JS que foi gerado
a partir do código escrito em TS.


