// lista encadeada 

// protótipos


typedef struct no {
	int valor;
	struct no *prox;
}*Lista;


Lista no(int item, Lista p);

void destroi(Lista *l);
