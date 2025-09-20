#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "pilha_char.h"


int main(void) {
	
	int i, quant_caracteres;
	
	Pilha p = criar_pilha(100);
	
	char frase[100];
	
	printf("Digite uma frase: ");
	fgets(frase, sizeof(frase), stdin);
	frase[strcspn(frase, "\n")] = '\0';
	
	quant_caracteres = strlen(frase);
	
	for (i = 0; i <= quant_caracteres; i++){
		
		if (frase[i] != ' ' && frase[i] != '\0') {
			empilha(frase[i], p);
		}
		else {
			
			while(!(vazia(p))){
				printf("%c", desempilha(p));
			}
			
			if (frase[i] == ' ') {
				printf(" ");
			}
		}
	}

	return 0;
}




