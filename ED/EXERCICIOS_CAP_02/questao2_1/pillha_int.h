// Código que define quais serão as funções e os protótipos

// Esse código é baseado em uma pilha para armazenar inteiros

#ifndef PILHA_H
#define PILHA_H


typedef int Itemp; 

/* tipos dos elementos, será tratado com o apelido Itemp, caso queira um outro
tipo de dado basta substituir. */


typedef struct pilha {
	int max; 
	int topo;
	Itemp *item; /* um ponteiro que armazena o endereço de memória do primeiro elemento
	do vetor de itens que a pilha armazenará. */
	
} *Pilha; 


// FUNÇÕES QUE A PILHA SUPORTA

Pilha criar_pilha(int n); // cria uma pilha com capacidade n e retorna um ponteiro pilha

void empilha(Itemp dado, Pilha pilha); // empilha um elemento

Itemp desempilha(Pilha pilha); // remove e retorna o último elemento (topo)

Itemp topo(Pilha pilha); // retorna o topo sem remover

int cheia(Pilha pilha); // retorna 1 se cheia, senão 0

int vazia(Pilha pilha); // retorna 1 se vazia, senão 0

void destroi_pilha(Pilha *p); // libera memória e anula ponteiro

#endif // PILHA_H
