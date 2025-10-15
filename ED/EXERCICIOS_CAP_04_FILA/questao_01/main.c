#include <stdio.h>
#include <stdlib.h>
#include "fila_int.h"

int main() {
	Fila f = fila(5);
	
	enfileira(1, f);
	enfileira(2, f);
	enfileira(3, f);
	
	enfileira(desenfileira(f), f);
	enfileira(desenfileira(f), f);
	
	printf("%d\n", desenfileira(f));	
}
