// Implementaçõoes de funções

#include <stdio.h>
#include <stdlib.h>
#include "pilha_float.h"


Pilha criar_pilha(int n){
	Pilha pilha = malloc(sizeof(struct pilha));
	
	if (!pilha){
		printf("Erro ao alocar memória para pilha\n");
		exit(1);
	}
	
	pilha->max = n;
	pilha->topo = -1;
	
	pilha->item = malloc(n * sizeof(Itemp));
	
	if (!pilha->item){
		printf("Erro ao alocar memória para o vetor da pilha\n");
		exit(1);
	}
	
	return pilha;
}

int vazia(Pilha pilha){
	return pilha->topo == -1;
}

int cheia(Pilha pilha){
	return pilha->topo == pilha->max - 1;
}


void empilha(Itemp dado, Pilha pilha){
	if (cheia(pilha)){
		printf("Pilha cheia!");
		abort();
	}
	
	pilha->topo++;
	pilha->item[pilha->topo] = dado;
}
 

Itemp desempilha(Pilha pilha){
	if (vazia(pilha)){
		printf("Pilha vazia!");
		abort();
	}
	
	Itemp elemento_removido = pilha->item[pilha->topo];
	pilha->topo--;
	
	return elemento_removido;
}

Itemp topo(Pilha pilha){
	if (vazia(pilha)){
		printf("Pilha vazia!");
		abort();
	}
	
	return pilha->item[pilha->topo];
}


void destroi_pilha(Pilha *pilha){
	free((*pilha)->item);
	free(*pilha);
	*pilha = NULL;
}
 
