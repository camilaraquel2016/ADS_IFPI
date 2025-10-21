#include "fila.h"
#include "iostream"
using namespace std;

// No

No::No(string n) {
    nome = n;
    prox = NULL;
}

// Fila

Fila::Fila() {
    inicio = NULL;
    fim = NULL;
}

void Fila::append(string n) {
    No *novo = new No(n);

    if (inicio == NULL){
        inicio = novo;
        fim = novo;
    }
    else {
        fim->prox = novo;
        fim = novo;
    }
}

bool Fila::isEmpty() {
    return inicio == NULL;
}

string Fila::pop() {
    if (isEmpty()) {
        cout << "Nao e possivel remover elemento, pois a fila esta vazia!" << endl;
        abort();
    }

    string elemento = inicio->nome;
    No *temp = inicio;
    inicio = inicio->prox;
    delete temp;

    if (inicio == NULL) fim = NULL;
    
    return elemento;
}

void Fila::popAll() {
    No *temp;

    while (!isEmpty()) {
        temp = inicio;
        cout << temp->nome << endl;
        inicio = inicio->prox;
        delete temp;
    }

    fim = NULL;

    cout << "Fila vazia!" << endl;
}