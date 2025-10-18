#include <stdio.h>
#include "lista_char.h"
#include <locale.h>

// fun��o substitui (usando recursividade)

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
	
	printf("Lista antes da substitui��o: ");
	
	exibe(l);
	
	substitui('o', 'a', l);
	
	printf("\n");
	
	printf("Lista ap�s a substitui��o: ");
	
	exibe(l);
		
}
