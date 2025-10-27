#include <iostream>

using namespace std;

typedef struct no {
    int item;
    struct no *prox;
} *Lst;

Lst no(int x, Lst p) {
    Lst n = (struct no*)malloc(sizeof(struct no));

    n->item = x;
    n->prox = p;

    return n;
}

main() {
    Lst p = NULL;
    int item;

    for (int i = 1; i <= 4; i++) {
        cout << "Insira o valor do no " << i << ": ";
        cin >> item;
        p = no(item, p);
    }

    while (p) {
        cout << p->item << endl;
        p = p->prox;
    }

    
}
