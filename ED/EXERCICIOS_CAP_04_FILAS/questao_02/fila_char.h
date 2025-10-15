// protótipos 

typedef struct fila {
	int max;
	int total;
	int inicio;
	int fim;
	char *itens;
}*Fila;


Fila fila(int max);

void avanca(int *i, int max);

int vaziaf(Fila f);

int cheiaf(Fila f);

void enfileira(char item, Fila f);

char desenfileira(Fila f);

void destroif(Fila *f);


