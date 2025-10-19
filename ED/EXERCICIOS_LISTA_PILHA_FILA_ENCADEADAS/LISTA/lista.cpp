#include "lista.h"
#include <cstring>
#include <iostream>
using namespace std;

// No

No::No(int m, string n) {
    mat = m;
    nome = n;
    prox = NULL;
}


// Lista 

Lista::Lista() {
    inicio = NULL;
    fim = NULL;
}

void Lista::add_fim(int m, string n) {
    No* novo = new No(m, n);

    if (inicio == NULL) {
        inicio = novo;
        fim = novo;
    }
    else {
        fim->prox = novo;
        fim = novo;
    }
}


void Lista::add_inicio(int m,string n) {
    No* novo = new No(m, n);

    if (inicio == NULL) {
        inicio = novo;
        fim = novo;
    }
    else {
        novo->prox = inicio;
        inicio = novo;
    }
}


void Lista::addord(int m, string n) {
    No* novo = new No(m, n);

    // lista vazia
    if (inicio == NULL) {
        inicio = novo;
        fim = novo;
        return;
    }   

    // inserir no início
    if (inicio->mat > m) {
        novo->prox = inicio;
        inicio = novo;
        return;
    }    
    
    // inserir no meio ou fim
    No* ant = inicio;
    No* atual = inicio->prox;

    while (atual) {
        if (atual->mat > m) {
            ant->prox = novo;
            novo->prox = atual;
            return;
        }

        ant = ant->prox;
        atual = atual->prox;
    }

    ant->prox = novo;
    fim = novo;
}

bool Lista::remover(int cod) {
    if (inicio == NULL) return false;
    
    No* temp;

    if (inicio->mat == cod) {
        temp = inicio;
        inicio = inicio->prox;
        if (inicio == NULL) {
            fim = NULL;
        }
        delete temp;
        return true;
    }

    No* ant = inicio;
    No* atual = inicio->prox;
    

    while (atual) {
        if (atual->mat == cod) {
            temp = atual;
            ant->prox = atual->prox;
            if (atual->prox == NULL) {
                fim = ant;
            }
            delete temp;
            return true;
        }
        ant = ant->prox;
        atual = atual->prox;
    }

    return false;
}


void Lista::mostrar() {
    if (inicio == NULL) {
        cout << "\nNenhum aluno cadastrado!\n" << endl;
        return;
    }

    No* atual = inicio;

    cout << "\n-=-=- ALUNOS CADASTRADOS -=-=-\n" << endl;

    while (atual) {
        cout << "Mat: " << atual->mat << " Nome: " << atual->nome << endl; 
        atual = atual->prox;
    }
}


