#include <stdio.h>
#include "pilha_int.h"  //pilha de inteiros


int main(void) {
	
	Pilha p = criar_pilha(3);
	
	empilha(1, p);
	empilha(2, p);
	
	printf("%d\n", desempilha(p));
	printf("%d\n", desempilha(p));
	printf("%d\n", desempilha(p));
	
	return 0;
}


/*

Linha 7 acontece a alocação de memória para uma struct pilha de 3 elementos, retornando para o ponteiro p o endereço dessa struct.

Linha 9 acontece a inserção do elemento 1 na pilha.

Linha 10 outra inserção na pilha agora com o número 2, fazendo assim com que ele seja o atual topo.

Linha 12 acontece a remoção do topo, logo a remoção do último elemento que foi inserido no caso o 2.

Após a remoção desse elemento, a função desempilha além de remover também o retorna e o mesmo é exibido na tela através do comando de saída.

Com a remoção do 2, o elemento 1 fica sendo o atual topo.

Linha 13 acontece outra remoção, dessa vez a remoção do elemento 1 que estava sendo o topo, o mesmo é exibido e removido, deixando agora a pilha vazia.

Linha 14 acontece outra chamada a desempilha. Como a pilha está vazia, a função detecta a condição de erro e exibe a mensagem: "Pilha vazia!".


As remoções são sempre feitas no topo, pois é uma estrutura que segue o princípio LIFO (Last In, First Out).

*/

  
