#include "lista_int.h"
#include <stdlib.h>

Lista no(int item, Lista p) {
	Lista novo = malloc(sizeof(struct no));
	
	novo->valor = item;
	novo->prox = p;
}

void destroi(Lista *l) {
	Lista temp;
	
	while (*l != NULL) {
		temp = *l;
		*l = temp->prox;
		free(temp);
	}
}

