#include "fila_int.h"
#include <stdlib.h>
#include <stdio.h>


/*

Enfileirar significa inserir um elemento no fim, logo criamos um novo nó e como ele será o último
ele precisa apontar para o início da lista, pois é uma lista circular, após isso atualizamos o valor do fim
para o novo nó criado.
 
Além disso, o ponteiro que antes estava sendo o último precisa apontar para o novo nó, para assim
não perder as ligações entre os elementos.
 
*/
 

void enfileira(int x, Fila *f) { 

	Fila novo = malloc(sizeof(struct no));
	
	novo->item = x;
	
	if (*f == NULL) {
		novo->prox = novo;
		*f = novo;
	}
	else {
		novo->prox = (*f)->prox;
		(*f)->prox = novo;
		*f = novo;
	}
}




/*

desenfileirar é fazer com que o último aponte para o próximo do início, pois a remoção é feita no início,
então basta dizer que o último agr aponta para quem está depois do início na fila.

quando a fila tem apenas um elemento, não basta dizer que o último aponta para o próximo do início, pois ele
é o próprio último, então simplemente dizemos que o último será NULL, logo a fila fica vazia.

Além de modificar os valores dos ponteiros, precisamos liberar a memória daquele ponteiro que está sendo removido,
pois quando retiramos um elemento do encadeamento ele apenas não faz mais parte da fila, mas ainda existe na memória
e acaba ocupando espaço sem necessidade.

*/
 

int desenfileira(Fila *f) {
	
	int valor;
	
	if (*f == NULL) {
		printf("Não é possível remover elementos, pois a fila está vazia!\n");
		abort();
	}
	else if (*f == (*f)->prox) {
		valor = (*f)->item;
		free(*f);
		*f = NULL;
	}
	else {
		valor = (*f)->prox->item;
		Fila temp = (*f)->prox;
		(*f)->prox = temp->prox;
		free(temp);
	}
	
	return valor;
}


void exibe(Fila f) {
	if (f == NULL) {
		printf("Fila vazia!\n");
		return;
	}
	
	Fila inicio = f->prox;
	Fila p = inicio;
	
	do {
		printf("%d ", p->item);
		p = p->prox;
	} while (p != inicio);
	
	printf("\n");
}



