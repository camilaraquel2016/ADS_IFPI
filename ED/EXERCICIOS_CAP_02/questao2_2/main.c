#include <stdio.h>
#include <stdlib.h>
#include "pilha_float.h"


int main(void) {
	
	Pilha p = criar_pilha(100);
	
	empilha(8, p);
	
	while (topo(p) > 0){
		empilha(topo(p) / 2, p);
	}
	
	while (!vazia(p)){
		printf("%f\n", desempilha(p));
	}
	
	return 0;
}

/*

Linha 8 acontece a alocação da pilha

Linha 10 o elemento 8 é adicionado na pilha, tornando-se o topo

Linha 12 é executado uma estrutura de repetição que tem como propósito inserir
números na pilha a partir de sucessivas divisões por 2.

Então, se o topo é 8, o próximo a ser inserido será 4 depoois 2...1...0,5...
Entretanto como estamos trabalhando com números reais e a condição de parada é 
o topo ser maior do que 0 acontecerá um loop infinito, pois essa condição não será
alcançada.

Chegará um momento onde acontecerá tanta inserção na pilha que ela alcançará seu limite de 
100 elementos e depois disso lançará o erro de "Pilha cheia".

O while da linha 16 não será executado, pois o programa encerrará.

*/

