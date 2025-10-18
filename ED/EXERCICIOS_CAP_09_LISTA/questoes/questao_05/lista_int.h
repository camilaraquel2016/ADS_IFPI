typedef struct no {
	int item;
	struct no *prox;
}*Lista;


Lista no(int item, Lista l);

void destroi(Lista *l);
