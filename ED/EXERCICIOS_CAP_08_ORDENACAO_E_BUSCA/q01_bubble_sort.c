// ordenação por troca

#include <stdio.h>
#include <stdlib.h>

void bubbleSort(float *vetor, int tamanho) {
    int i, j;
    float aux;

    for (i = 1; i <= tamanho-1; i++) {

        for (j = 0; j < tamanho-i; j++) {

            if (vetor[j] > vetor[j+1]) {
                aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
        }
    }
}


void exibir_vetor(float *vetor, int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        printf("%.2f ", vetor[i]);
    }
}


int main() {
    int n;

    printf("Insira a quantidade de itens que deseja ordenar: ");
    scanf("%d", &n);

    float *vetor = (float*)malloc(n * sizeof(float));

    for (int i = 0; i < n; i++) {
        printf("Insira o valor do item v[%d]: ", i);
        scanf("%f", &vetor[i]);
    }

    printf("Vetor antes da ordenacao: ");
    exibir_vetor(vetor, n);

    bubbleSort(vetor, n);

    printf("\nVetor depois da ordenacao: ");
    exibir_vetor(vetor, n);

    free(vetor);
} 
