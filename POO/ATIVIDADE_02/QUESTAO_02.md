2. Qual o principal problema do uso de tipagem dinâmica?

Resposta:

O Principal problema é que os erros de tipo só aparecem em tempo de execução
e não em tempo de compilação.

Isso ocasiona diversas desvantagens, como: Maior probabilidade do usuário 
encontrar bugs, visto que esses problemas só aparecem em tempo de execução.

O programador pode escrever um código que parece está correto, mas que só vai
falhar quando o programa estiver rodando.

Exemplo: usando python, uma linguagem que faz uso da tipagem dinâmica.

def soma(a, b):
  return a + b

x = 10
y = "5"

print(soma(x, y)) 

Só vai da erro quando o programa rodar.

Se estivéssemos usando uma tipagem estática e restritiva com TS, poderíamos especificar que a função soma deve receber dois parâmetros do tipo number, visto que estamos querendo somar dois números e assim ao passar y como parâmetro da função, a linguagem que faz uso da tipagem estática já alertaria, em tempo de compilação, que estamos passando um tipo diferente do esperado como parâmetro.




