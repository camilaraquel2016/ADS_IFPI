// protótipos

typedef struct no {
	char item;
	struct no *prox;
}*Pilha;

void empilha(char item, Pilha *p);

char desempilha(Pilha *p);
