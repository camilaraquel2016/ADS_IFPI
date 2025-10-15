#include <stdio.h>
#include <stdlib.h>
#include "fila_char.h"

int main() {
	Fila f = fila(5);
	
	int i;
	
	for (i = 0; i <= 3; i++) {
		char c = 'A' + i;
		enfileira(c, f);
	}
	
	while(!vaziaf(f)) {
		printf("%c\n", desenfileira(f));
	}
	
	destroif(&f);
	
	return 0;
}
