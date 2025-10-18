#include <stdio.h>
#include <stdlib.h>
#include "lista_char.h"
#include <locale.h>

char ultimo(Lista l) {
	if (l == NULL) {
		printf("Lista vazia!\n");
		return '\0'; // indicar que lista est� vazia, logo n�o possui um �ltimo elemento
	}
	
	while (l->prox) {
		l = l->prox;
	}
	
	return l->item;
	
}

int main() {
	setlocale(LC_ALL, "Portuguese");
	
	Lista l = no('a',no('b',no('c',NULL)));

	
	char ultimo_el = ultimo(l);
	
	if (ultimo_el != '\0') {
		printf("O �ltimo elemento da lista �: %c\n", ultimo_el);
	}
	
	return 0;
}
