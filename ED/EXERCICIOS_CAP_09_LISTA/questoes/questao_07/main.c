#include <stdio.h>
#include "lista_int.h"


// fun��o para verificar se duas listas s�o iguais, em rela��o a seus elementos (usando recursividade)

int igual(Lista a, Lista b) {
	if ((a == NULL) && (b == NULL)) return 1; // s�o iguais
	if ((a == NULL) || (b == NULL)) return 0; // n�o s�o iguais
	if (a->item != b->item) return 0; // n�o s�o iguais
	return igual(a->prox, b->prox);	// o valor � igual, logo passamos para o pr�ximo elemento
}


void exibe_formatada(Lista l) {
	
	printf("[");
	
	if (l == NULL){
		printf("NULL");
	}
	
	else {
		while (l->prox) {
			printf("%d, ", l->item);
			l = l->prox;
		}
		
		printf("%d", l->item);
	}
	
	printf("]");
	
}

void exibe_igual_diferente(Lista a, Lista b) {
	
	exibe_formatada(a);
	
	if (igual(a, b)== 1) {
		printf(" == ");
	}
	else {
		printf(" != ");
	}
	
	exibe_formatada(b);
	
	printf("\n \n");
}


int main() {
	
	Lista i = no(1,no(2,no(3,NULL)));
	Lista j = no(1,no(2,no(3,NULL)));
	Lista k = no(1,no(3,no(2,NULL)));
	Lista l = no(5,NULL);
	Lista m = NULL;
	Lista n = NULL;
	
	exibe_igual_diferente(i, j);
	exibe_igual_diferente(i, k);
	exibe_igual_diferente(i, m);
	exibe_igual_diferente(l, m);
	exibe_igual_diferente(m, n);
	
	return 0;
}
