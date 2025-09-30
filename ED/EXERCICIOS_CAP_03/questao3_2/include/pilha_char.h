
typedef struct pilha_char {
    int max;
    int topo;
    char *item;
} *Pilha_char;

Pilha_char criar_pilha_char(int n);

int vazia_char(Pilha_char p);

int cheia_char(Pilha_char p);

void empilha_char(char dado, Pilha_char p);

char desempilha_char(Pilha_char p);

char topo_char(Pilha_char p);

void destroi_pilha_char(Pilha_char *p);


