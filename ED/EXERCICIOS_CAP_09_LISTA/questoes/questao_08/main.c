#include <stdio.h>
#include <locale.h>
#include "lista_char.h"
#include <stdlib.h>

// retornar o n-�simo item da lista (usando recursividade) 


char enesimo_recursivo(int n, Lista l, int cont) {
	if (l == NULL) {
		printf("A lista n�o possui item na %d� posi��o!\n", n);
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
	
	printf("Insira a posi��o do item: ");
	scanf("%d", &n);
	
	printf("O %d� item da lista �: %c", n, enesimo(n, l));
}






