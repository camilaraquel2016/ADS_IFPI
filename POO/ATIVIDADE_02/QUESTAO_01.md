1. Qual a diferença entre tipagem dinâmica e tipagem estática?

Resposta:

A tipagem estática como o próprio nome sugere, diz respeito ao fato de uma
vez declarado o tipo de uma variável, o mesmo não muda, permanece estático.

Na tipagem estática o tipo da variável é conhecido em tempo de programa, 
logo o compilador impede atribuições imcompatíveis e faz um alerta ao
programador antes do código ser executado.


Na tipagem dinâmica, o tipo de uma variável não é fixo, ele depende do valor
que a variável está guardando naquele momento, então uma mesma variável pode 
ter um número em um momento e uma string em outro. Como o tipo está ligado
ao valor e não à variável, quando você coloca um novo valor, o tipo antigo
é “esquecido” e a variável passa a ser do tipo do valor novo. O tipo só é 
decidido enquanto o programa está rodando, e é o interpretador que verifica
se as operações fazem sentido. Por isso, você só vai ter erro se tentar fazer 
algo que não combina com o tipo atual, como somar uma string com um número.

Logo, a diferença básica é que devido a tipagem estática conhecer o tipo da
variável em tempo de compilação ela acaba fazendo essas verificações e impedindo
que sejam feitas atribuições incompatíveis, enquanto que na dinâmica o interpretador
só sabe seu tipo em tempo de execução, logo dizer que x é number e depois atribuir a ele 
uma string, não dará problemas, visto que o tipo de x será "esquecido", pois a tipagem
dinâmica liga o tipo da variável ao valor atual e não a variável de fato.
