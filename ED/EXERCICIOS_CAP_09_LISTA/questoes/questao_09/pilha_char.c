#include "pilha_char.h"
#include <stdlib.h>
#include <stdio.h>


void empilha(char item, Pilha *p) {
	Pilha novo = malloc(sizeof(struct no));
	
	novo->item = item;
	novo->prox = *p;
	*p = novo;
}


char desempilha(Pilha *p) {
	if (*p == NULL) {
		printf("Não é possível remover elemento, pois a pilha está vazia!\n");
		abort();
	}
	
	char x = (*p)->item;
	Pilha temp = *p;
	*p = (*p)->prox;
	free(temp);
	
	return x;
}
