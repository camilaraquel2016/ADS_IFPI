#include <stdio.h>
#include "lista_int.h"

Lista inversa(Lista l) {
	Lista l_inversa = NULL;
	
	while (l != NULL) {
		l_inversa = no(l->item, l_inversa);
		l = l->prox;
	}
	
	return l_inversa;
}


void exibe(Lista l) {
	while (l != NULL) {
		printf("%d\n", l->item);
		l = l->prox;
	}
}

int main() {
	
	Lista l = no(7,no(9,no(2, NULL)));
	
	Lista l_inversa = inversa(l);
	
	printf("-=- Lista original -=-\n \n");
	
	exibe(l);
	
	printf("\n-=- Lista inversa -=-\n");
	
	exibe(l_inversa);
	
}
