// protótipos pilha dinâmica sequencial

typedef struct pilha {
	int max;
	int topo;
	char *itens;
}*Pilha;


Pilha pilha(int max);

int vaziap(Pilha p);

int cheiap(Pilha p);

void empilha(char item, Pilha p);

char desempilha(Pilha p);

void destroip(Pilha *p);
