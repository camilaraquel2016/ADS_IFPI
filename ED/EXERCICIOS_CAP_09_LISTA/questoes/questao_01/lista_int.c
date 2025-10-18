#include <stdlib.h>
#include <stdio.h>
#include "lista_int.h"

// operações básicas

Lista no(int item, Lista p) {
	Lista novo = malloc(sizeof(struct no));
	
	novo->item = item;
	novo->prox = p;
	
	return novo;
}


void exibe(Lista l) {
	if (l == NULL) {
		printf("Lista vazia!\n");
		return;
	}
	
	while (l != NULL) {
		printf("%d\n", l->item);
		l = l->prox;
	}	
}


void anexa(Lista *A, Lista B) {
	if (B == NULL) return;
	
	while (*A != NULL) {
		A = &(*A)->prox;
	} 
	
	*A = B;
}


void destroi(Lista *l) {
	while (*l != NULL) {
		Lista n = *l;
		*l = n->prox;
		free(n);
	}
}

// manipulações recursivas

int tam(Lista l) {
	if (l == NULL ) {
		return 0;
	}
	
	return 1 + tam(l->prox);
}

int pert(int x, Lista l) {
	if (l == NULL) {
		return 0;
	}
	
	if (l->item == x) {
		return 1;
	}
	
	return pert(x, l->prox);
}


Lista clone(Lista l) {
	if (l == NULL) return NULL;
	return no(l->item, clone(l->prox));
}


void exibe_inv(Lista l) {
	if (l == NULL) return;
	exibe_inv(l->prox);
	printf("%d\n", l->item);
}


