#ifndef FILA_H
#define FILA_H

#include <string>
using namespace std;

class No{
    public:
        string nome;
        No *prox;

        No(string n); // declaração do construtor
};


class Fila {
    public:
        No *inicio;
        No *fim;

        Fila(); // declaração do construtor


        // métodos básicos

        void append(string n); // inserir no final da fila
        string pop(); // remover do início da fila
        bool isEmpty(); // está vazia
        void popAll(); // remover tudo (esvaziar a fila)
};


#endif