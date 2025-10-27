#include <iostream>

using namespace std;

typedef struct no {
    int item;
    struct no *prox;
} No;

main() {
    No v[4];

    int i;

    No *p = v; // recebe o endereço da primeira posição do vetor 

    for (i = 1; i <= 4; i++) {
        cout << "Insira o valor do item na posicao " << i << " do vetor: ";
        cin >> p->item;
        if (i < 4) {
            p->prox = v+i;
        }
        else {
            p->prox = NULL;
        }

        p = p->prox;
    }

    for (No *p = v; p != NULL; p = p->prox) {
        cout << p->item << endl;
    }
    
}