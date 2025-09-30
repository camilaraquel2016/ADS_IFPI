#include "pilha_float.h"
#include <stdlib.h>
#include <stdio.h>


Pilha_float criar_pilha_float(int n){
	
	Pilha_float p = malloc(sizeof(struct pilha_float));
	
	if (!p){
		printf("Erro ao alocar espa�o para a pilha!\n");
		exit(1);
	}
	
	p->item = malloc(n * sizeof(float));
	
	if (!p->item){
		printf("Erro ao alocar mem�ria para o vetor da pilha!\n");
		exit(1);
	}
	
	p->max = n;
	p->topo = -1;
	
	return p;
}


int vazia_float(Pilha_float p){
	return p->topo == -1;
}


int cheia_float(Pilha_float p){
	return p->topo == p->max - 1;
}


void empilha_float(float dado, Pilha_float p){
	
	if (cheia_float(p)) {
		printf("Pilha est� cheia, logo n�o podemos empilhar!");
		exit(1);
	}
	
	p->item[++p->topo] = dado;
}


float desempilha_float(Pilha_float p){
	
	if (vazia_float(p)) {
		printf("Pilha est� vazia, logo n�o podemos desempilhar!");
		exit(1);
	}
	
	return p->item[p->topo--];
}


float topo_float(Pilha_float p){
	
	if (vazia_float(p)) {
		printf("Pilha est� vazia, logo n�o � poss�vel obter o topo!");
		exit(1);
	}
	
	return p->item[p->topo];
}


void destroi_pilha_float(Pilha_float *p){
	free((*p)->item);
	free(*p);
	*p = NULL;
}





