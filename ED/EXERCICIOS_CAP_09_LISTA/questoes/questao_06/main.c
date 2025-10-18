#include <stdio.h>
#include "lista_char.h"
#include <locale.h>

// função substitui (usando recursividade)

void substitui(char x, char y, Lista l) {
	if (l == NULL) return;
	if (l->item == x) {
		l->item = y;
	}
	substitui(x, y, l->prox);
}

void exibe(Lista l) {
	if (l == NULL) {
		printf("Lista vazia!\n");
		return;
	}
	
	while (l != NULL) {
		printf("%c", l->item);
		l = l->prox;
	}
}


int main() {
	
	setlocale(LC_ALL, "Portuguese");
	
	Lista l = no('b', no('o', no('b', no('o', NULL))));
	
	printf("Lista antes da substituição: ");
	
	exibe(l);
	
	substitui('o', 'a', l);
	
	printf("\n");
	
	printf("Lista após a substituição: ");
	
	exibe(l);
		
}
