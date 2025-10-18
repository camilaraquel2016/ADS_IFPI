#include <stdlib.h>
#include "lista_int.h"

Lista no(int item, Lista l) {
	Lista nova = malloc(sizeof(struct no));
	
	nova->item = item;
	nova->prox = l;
	
	return nova;
}


void destroi(Lista *l) {
	Lista temp;
	
	while (*l != NULL) {
		temp = *l;
		*l = temp->prox;
		free(temp);
	}
}

