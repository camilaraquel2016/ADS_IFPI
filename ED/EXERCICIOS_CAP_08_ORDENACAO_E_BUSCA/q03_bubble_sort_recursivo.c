#include <stdio.h>

void empurra(int v[], int n) {
    int aux;

    for (int i = 0; i < n; i++) {
        if (v[i] > v[i+1]) {
            aux = v[i];
            v[i] = v[i+1];
            v[i+1] = aux;
        }
    }
}

void buble_sort(int v[], int tamanho) {
    if (tamanho <= 1) return;

    empurra(v, tamanho-1);

    buble_sort(v, tamanho-1);

}


int main() {
    int vetor[4] = {5, 7, 3, 4};

    int tamanho = 4;

    buble_sort(vetor, tamanho);

    for (int i = 0; i < tamanho; i++) {
        printf("%d\n", vetor[i]);
    }

    return 0;
}

// 5 7 3 4 
// 0 1 2 3 