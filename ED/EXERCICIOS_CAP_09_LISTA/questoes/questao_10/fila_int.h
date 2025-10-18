// protótipos

// fila dinâmica encadeada (circular)

typedef struct no {
	int item;
	struct no *prox;
}*Fila;



void enfileira(int x, Fila *f);

int desenfileira(Fila *f);

void exibe(Fila f);
