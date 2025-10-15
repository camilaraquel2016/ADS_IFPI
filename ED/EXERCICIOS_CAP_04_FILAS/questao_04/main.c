#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include "fila_int.h"
#define tempo 3

int main() {
	
	setlocale(LC_ALL, "Portuguese");
	
	Fila f = fila(5);
	
	enfileira(17, f);  
	enfileira(25, f);  
	enfileira(39, f); 
	enfileira(46, f); 
	
	while (!vaziaf(f)) {
		int x = desenfileira(f);
		int p = x / 10; 
		int t = x % 10; 
		
		if (t > 3) enfileira(p*10+(t-tempo), f);
		else printf("Processo %d concluído\n", p);
	}
	
	destroif(&f);
	
	return 0;
}


