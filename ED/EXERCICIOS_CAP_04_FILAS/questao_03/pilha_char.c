#include <stdlib.h>
#include <stdio.h>
#include "pilha_char.h"

Pilha pilha(int max) {
	Pilha p = malloc(sizeof(struct pilha));
	
	p->max = max;
	p->topo = -1;
	p->itens = malloc(max * sizeof(char));
	
	return p;
}


int vaziap(Pilha p) {
	return p->topo == -1;
}


int cheiap(Pilha p) {
	return p->topo == p->max - 1;
}


void empilha(char item, Pilha p) {
	if (cheiap(p)) {
		printf("N�o � poss�vel inserir elemento, pois a pilha est� cheia!\n");
		abort();
	}
	
	p->topo++;
	p->itens[p->topo] = item;
}


char desempilha(Pilha p) {
	if (vaziap(p)) {
		printf("N�o � poss�vel remover elemento, pois a pilha est� vazia!\n");
		abort();
	}
	
	char item = p->itens[p->topo];
	p->topo--;
	return item;
}


void destroip(Pilha *p) {
	free((*p)->itens);
	free(*p);
	*p = NULL;
}

