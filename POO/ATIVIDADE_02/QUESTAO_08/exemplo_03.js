console.log(0 == false); 
console.log("" == false); 
console.log(null == undefined); 

/*
saída:

true
true
true

No operador (==) o JavaScript faz coerção de tipo automática

false --> 0
" " --> 0

null == undefined

JS trata como null e undefined sendo iguais quando usando o operador ==


OBS:

O operador == não compara tipo e sim os valores em si.

Para comparar tipos e valores ao mesmo tempo devemos usar === (igualdade estrita)
Nesse caso de usar === todas as saídas seriam false, pois todas as comparações
são com tipos diferentes, embora os valores quando convertidos sejam iguais.

*/

