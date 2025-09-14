3. Pesquise um exemplo na internet em que a tipagem dinâmica pode ser problemática.

Para demonstrar uma problemática do uso da tipagem dinâmica é necessário
fazer uso de linguagens dinamicamnete tipadas, como: Python e JavaScript.
Os erros de tipos em ambas as linguagens só aparecerão em tempo de execução, 
mas dependendo do código criado, cada uma terá um reação diferente quanto ao erro.

Cenário: fazer soma de dois números

Python:

def somar(a, b):
  return a + b

x = 10
y = "5"

print(somar(x, y))

Ao executar o programa o usuário receberá um erro do tipo

TypeError: unsupported operand type(s) for +: 'int' and 'str'

ou seja, estamos tentando somar um int com uma str e em python isso não é permitido,
logo ele gera um erro, mas em tempo de execução.


JavaScript:

function somar(a, b) {
   return a + b; 
}

let x = 10;
let y = "5";

console.log(somar(x, y));

Ao executar o programa não dará um erro em si, ele irá fazer a concatenação
de string.
De certa forma acaba sendo um problemática, pois a usar função soma, o usuário
espera que a mesma some numericamente os parâmetros que lhe foi passado e não que 
faça uma concatenação.
Isso acaba sendo um comportamenteo inesperado ao usuário e pode causar bugs, as vezes
difíceis de detectar.

Cada linguagem (python e js) reagiu diferente ao serem executas, mas ambas apresentaram
problemáticas devido sua tipagem ser dinâmica.

Em TypeScript isso dificilmente aconteceria. 
Ainda em tempo de compilação, o programador seria
alertado desses possíveis erros.


