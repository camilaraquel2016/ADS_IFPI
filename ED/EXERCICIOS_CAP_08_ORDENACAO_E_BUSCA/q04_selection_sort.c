#include <stdio.h>

int seleciona(int v[], int n) {
    int pos_maior = 0;

    for (int i = 1; i < n; i++) {
        if (v[i] > v[pos_maior]) {
            pos_maior = i;
        }
    }

    return pos_maior;
}

void selection_sort(int v[], int n) {
    if (n <= 1) return;

    int posicao_maior = seleciona(v, n);

    int aux = v[posicao_maior];

    v[posicao_maior] = v[n-1];
    v[n-1] = aux;

    selection_sort(v, n-1);
}

int main() {
    int vetor[7] = {7, 5, 1, 4, 8, 2, 9};
    int tamanho = 7;

    selection_sort(vetor, tamanho);

    for (int i = 0; i < tamanho; i++) {
        printf("%d\n", vetor[i]);
    }

    return 0;
}