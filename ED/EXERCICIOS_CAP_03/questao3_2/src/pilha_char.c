#include <stdio.h>
#include <stdlib.h>
#include "pilha_char.h"

Pilha_char criar_pilha_char(int n) {
    Pilha_char p = malloc(sizeof(struct pilha_char));
    
    if (!p) {
        printf("Erro ao alocar memória para pilha de char!\n");
        exit(1);
    }

    p->item = malloc(n * sizeof(char));
    
    if (!p->item) {
        printf("Erro ao alocar memória para os vetores de char!\n");
        exit(1);
    }

    p->max = n;
    p->topo = -1;
    
    return p;
}


int vazia_char(Pilha_char p) {
    return p->topo == -1;
}


int cheia_char(Pilha_char p) {
    return p->topo == p->max - 1;
}


void empilha_char(char dado, Pilha_char p) {
    if (cheia_char(p)) {
        printf("Pilha cheia, logo não é possível empilhar!\n");
        exit(1);
    }
    
    p->item[++p->topo] = dado;
}


char desempilha_char(Pilha_char p) {
    if (vazia_char(p)) {
        printf("Pilha vazia, logo não é possível desempilhar!\n");
        exit(1);
    }
    
    return p->item[p->topo--];
}


char topo_char(Pilha_char p) {
    if (vazia_char(p)) {
        printf("Pilha vazia, logo não é possível obter seu topo!\n");
        exit(1);
    }
    
    return p->item[p->topo];
}


void destroi_pilha_char(Pilha_char *p) {
    free((*p)->item);
    free(*p);
    *p = NULL;
}

















