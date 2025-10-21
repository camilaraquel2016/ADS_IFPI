#include "pilha.h"
#include <iostream>

using namespace std;

// No
No::No(string n) {
    nome = n;
    prox = NULL;
}


// Pilha
Pilha::Pilha() {
    topo = NULL;
}

void Pilha::push(string n) {
    No *novo = new No(n);

    novo->prox = topo;
    topo = novo;
}

int Pilha::isEmpty() {
    if (topo == NULL) return 1;
    return 0;
}

string Pilha::pop() {
    if (isEmpty() == 1) {
        cout << "Pilha está vazia, logo não é possível remover elemento" << endl;
        abort();
    }

    string elemento = topo->nome;
    No *temp = topo;
    topo = topo->prox;
    delete temp;

    return elemento;
}




