#include <stdio.h>
#include <stdlib.h>
#include "fila_int.h"

Fila fila(int max) {
	Fila f = malloc(sizeof(struct fila));
	
	f->max = max;
	f->total = 0;
	f->inicio = 0;
	f->fim = 0;
	f->itens = malloc(max * sizeof(int));
	
	return f;
}


void avanca(int *i, int max) {
	*i = (*i + 1) % max;
}


int vaziaf(Fila f) {
	return f->total == 0;
}


int cheiaf(Fila f) {
	return f->total == f->max;
}


void enfileira(int item, Fila f) {
	if (cheiaf(f)) {
		printf("Não é possível inserir elemento, pois a fila está cheia!\n");
		abort();
	}
	
	f->itens[f->fim] = item;
	avanca(&f->fim, f->max);
	f->total++;
}


int desenfileira(Fila f) {
	if (vaziaf(f)) {
		printf("Não é possível remover elemento, pois a fila está vazia!\n");
		abort();
	}
	
	int item = f->itens[f->inicio];
	avanca(&f->inicio, f->max);
	f->total--;
	
	return item;
}


void destroif(Fila *f) {
	free((*f)->itens);
	free(*f);
	*f = NULL;
}




