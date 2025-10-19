#ifndef LISTA_H
#define LISTA_H

#include <string>
using namespace std;

class No {
public:
    int mat;
    string nome;
    No* prox;
    
    No(int m, string n); // declaração do construtor
};


class Lista {
private:
    No* inicio;
    No* fim;

public:
    Lista(); // declaração do construtor
    
    // métodos

    void add_fim(int m, string n);
    void add_inicio(int m, string n);
    void addord(int m, string n);
    void mostrar();
    bool remover(int cod);
};


#endif