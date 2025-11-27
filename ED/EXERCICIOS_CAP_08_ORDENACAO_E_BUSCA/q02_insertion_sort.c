// ordenação por inserção n²

// lógica: inserção ordenada

// 4 7 10 11 5

// pega um elemento e ver onde ele deve ser inserido

#include <stdio.h>
#include <string.h>

void insertion_sort(const char *v[], int tamanho) {
    const char *aux;
    int i, j;

    for (i = 1; i < tamanho; i++) {
        aux = v[i];
        
        for (j = i; j > 0; j--) {
            if (strcmp(aux, v[j-1]) < 0) {
                v[j] = v[j-1];
            }
            else break;
        }
        v[j] = aux;
    }
}


int main() {
    const char *nomes[] = {"Camila", "Maria", "Alice"};
    int tamanho = 3;

    insertion_sort(nomes, tamanho);

    for (int i = 0; i < tamanho; i++) {
        printf("%s\n", nomes[i]);
    }

    return 0;
    
}