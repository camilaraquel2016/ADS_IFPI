#include <stdio.h>
#include "pilha_char.h"

int main() {
	Pilha p = NULL;
	
	empilha('r', &p);
	empilha('o', &p);
	empilha('m', &p);
	empilha('a', &p);
	
	while (p) {
		printf("%c", desempilha(&p));
	}
}


