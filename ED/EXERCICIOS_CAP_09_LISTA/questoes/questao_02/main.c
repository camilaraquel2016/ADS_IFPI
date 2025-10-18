#include <stdio.h>
#include <stdlib.h>
#include "lista_int.h"
#include <locale.h>

// fun��o interativa

int ocorrencias(int x, Lista l) {

	int contador = 0;
	
	while (l != NULL) {
		if (l->valor == x) {
			contador++;
		}
		
		l = l->prox;
	}
	
	return contador;
}


int main() {
	
	setlocale(LC_ALL, "Portuguese");
	
	Lista l = no(1,no(2,no(1,no(4,no(1,NULL)))));
	
	int x;
	
	printf("Insira um n�mero: ");
	scanf("%d", &x);
	
	int qtd_vezes = ocorrencias(x, l);
	
	printf("O n�mero %d aparece %d vezes na lista\n", x, qtd_vezes);
	
	destroi(&l);
	
}

