#include <stdio.h>
#include "fila_int.h"
#include <locale.h>

int main() {
	
	setlocale(LC_ALL, "Portuguese");
	
	Fila f = NULL;
	
	enfileira(10, &f);
	enfileira(20, &f);
	enfileira(30, &f);
	
	exibe(f);
	
	printf("Removido: %d\n", desenfileira(&f));
	
	exibe(f);
	
	enfileira(40, &f);
	
	exibe(f);	
}
