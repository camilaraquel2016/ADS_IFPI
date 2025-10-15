// protótipos

// fila de int

typedef struct fila {
	int max;
	int total;
	int inicio;
	int fim;
	int *itens;
}*Fila;

Fila fila(int max);

void avanca(int *i, int max);

int vaziaf(Fila f);

int cheiaf(Fila f);

void enfileira(int item, Fila f);

int desenfileira(Fila f);

void destroif(Fila *f);
