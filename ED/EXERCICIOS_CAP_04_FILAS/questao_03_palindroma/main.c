#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include <ctype.h>
#include "fila_char.h"
#include "pilha_char.h"

// palíndroma 4.3

int eh_palindroma(char* cadeia) {
	
	Fila f = fila(256);
	Pilha p = pilha(256);
	
	int i;
	
	for (i = 0; cadeia[i]; i++) {
		
		char c = cadeia[i];
		
		if (isalpha(c)) {
			enfileira(toupper(c), f);
			empilha(toupper(c), p);
		}
	}
	
	while (!vaziaf(f)) {
		if (desenfileira(f) != desempilha(p)) {
			destroif(&f);
			destroip(&p);
			return 0;
		}
	}
	
	destroif(&f);
	destroip(&p);
	return 1; 	
}


int main() {
	
	setlocale(LC_ALL, "Portuguese");
	
	char cadeia[256];
	
	printf("Insira a cadeia que deseja analisar: ");
	fgets(cadeia, sizeof(cadeia), stdin);
	
	if (eh_palindroma(cadeia)) { 
		printf("É palíndroma!\n");
	}
	else {
		printf("Não é palíndroma!\n");
	}
	
	return 0;
}








