typedef struct no {
	char item;
	struct no *prox;
}*Lista;

Lista no(char item, Lista l);

void destroi(Lista *l);


