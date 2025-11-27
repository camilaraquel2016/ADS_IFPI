#include <stdio.h>

void insere(int x, int v[], int n) {

    while (n > 0 && x < v[n-1]) {
        v[n] = v[n-1];
        n--;
    }

    v[n] = x;
}


void insertion_sort_recursivo(int v[], int n, int i) {
    if (i >= n) return;

    int x = v[i]; //  2

    insere(x, v, i);

    insertion_sort_recursivo(v, n, i + 1);

}

void insertion_sort(int v[], int n) {
    if (n <= 1) return;

    int i = 1;
    
    insertion_sort_recursivo(v, n, i);
}


int main() {
    int vetor[4] = {5, 7, 3, 4};

    int tamanho = 4;

    insertion_sort(vetor, tamanho);

    for (int i = 0; i < tamanho; i++) {
        printf("%d\n", vetor[i]);
    }

    return 0;
}
    
