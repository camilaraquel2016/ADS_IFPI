#include "fila_int.h"
#include <stdlib.h>
#include <stdio.h>


/*

Enfileirar significa inserir um elemento no fim, logo criamos um novo n� e como ele ser� o �ltimo
ele precisa apontar para o in�cio da lista, pois � uma lista circular, ap�s isso atualizamos o valor do fim
para o novo n� criado.
 
Al�m disso, o ponteiro que antes estava sendo o �ltimo precisa apontar para o novo n�, para assim
n�o perder as liga��es entre os elementos.
 
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

desenfileirar � fazer com que o �ltimo aponte para o pr�ximo do in�cio, pois a remo��o � feita no in�cio,
ent�o basta dizer que o �ltimo agr aponta para quem est� depois do in�cio na fila.

quando a fila tem apenas um elemento, n�o basta dizer que o �ltimo aponta para o pr�ximo do in�cio, pois ele
� o pr�prio �ltimo, ent�o simplemente dizemos que o �ltimo ser� NULL, logo a fila fica vazia.

Al�m de modificar os valores dos ponteiros, precisamos liberar a mem�ria daquele ponteiro que est� sendo removido,
pois quando retiramos um elemento do encadeamento ele apenas n�o faz mais parte da fila, mas ainda existe na mem�ria
e acaba ocupando espa�o sem necessidade.

*/
 

int desenfileira(Fila *f) {
	
	int valor;
	
	if (*f == NULL) {
		printf("N�o � poss�vel remover elementos, pois a fila est� vazia!\n");
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



