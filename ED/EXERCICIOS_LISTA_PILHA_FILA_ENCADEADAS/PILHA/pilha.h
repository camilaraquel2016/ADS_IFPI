#ifndef PILHA_H
#define PILHA_H

#include <string>
using namespace std;

class No {
    public:
        string nome;
        No *prox;

        No(string nome); // declaração do construtor        
};


class Pilha {
    public:
        No *topo;

        Pilha(); // declaração do construtor

        // métodos básicos de uma pilha
        void push(string n);
        string pop();
        int isEmpty();
};

#endif