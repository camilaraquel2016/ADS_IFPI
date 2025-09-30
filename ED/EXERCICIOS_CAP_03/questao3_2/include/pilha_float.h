
typedef struct pilha_float {
	int max;
	int topo;
	float *item;
}*Pilha_float;


Pilha_float criar_pilha_float(int n);

int vazia_float(Pilha_float p);

int cheia_float(Pilha_float p);

void empilha_float(float dado, Pilha_float p);

float desempilha_float(Pilha_float p);

float topo_float(Pilha_float p);

void destroi_pilha_float(Pilha_float *p);
