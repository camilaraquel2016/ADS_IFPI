// protótipos

// lista encadeada

// estrutura do nó

typedef struct no {
	int item;
	struct no *prox;
}*Lista;


Lista no(int item, Lista p);


void exibe(Lista l);

void anexa(Lista *A, Lista B);


void destroi(Lista *l);


int tam(Lista l);

int pert(int x, Lista l);

Lista clone(Lista l);

void exibe_inv(Lista l);




