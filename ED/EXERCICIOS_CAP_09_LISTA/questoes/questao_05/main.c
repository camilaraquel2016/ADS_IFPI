#include <stdio.h>
#include "lista_int.h"

// função de soma (usando recursividade)

int soma(Lista l) {
	if (l == NULL) return 0;
	return l->item + soma(l->prox);
}

int main() {
	Lista l = no(3,no(1,no(5,no(4,NULL))));
	
	printf("Soma dos elementos: %d\n", soma(l));
}


