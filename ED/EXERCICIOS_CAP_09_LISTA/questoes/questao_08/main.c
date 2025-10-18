#include <stdio.h>
#include <locale.h>
#include "lista_char.h"
#include <stdlib.h>

// retornar o n-ésimo item da lista (usando recursividade) 


char enesimo_recursivo(int n, Lista l, int cont) {
	if (l == NULL) {
		printf("A lista não possui item na %d° posição!\n", n);
		abort();
	}
	
	if (cont == n) return l->item;
	
	return enesimo_recursivo(n, l->prox, cont+1);
}


char enesimo(int n, Lista l) {	
	return enesimo_recursivo(n, l, 1);
}


int main() {
	
	setlocale(LC_ALL, "Portuguese");
	
	Lista l = no('a',no('b',no('c',no('d',NULL))));
	
	int n;
	
	printf("Insira a posição do item: ");
	scanf("%d", &n);
	
	printf("O %d° item da lista é: %c", n, enesimo(n, l));
}






