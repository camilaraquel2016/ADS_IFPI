// protótipos fila dinâmica sequencial

typedef struct fila {
	int max;
	int inicio;
	int fim;
	int total;
	char *itens;	
}*Fila;


Fila fila(int max);

void avanca(int *i, int max);

int vaziaf(Fila f);

int cheiaf(Fila f);

void enfileira(char valor, Fila f);

char desenfileira(Fila f);

void destroif(Fila *f);
