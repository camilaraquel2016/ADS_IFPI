#include <stdio.h>
#include <stdlib.h>

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


int busca_binaria_recursiva(int vetor[], int inicio, int fim, int x) {
    if (inicio > fim) return 0;

    int pos_meio = (inicio + fim) / 2;
    int elemento_meio = vetor[pos_meio];

    if (elemento_meio == x) return 1;

    if (x > elemento_meio) return busca_binaria_recursiva(vetor, pos_meio + 1, fim, x);

    return (busca_binaria_recursiva(vetor, inicio, pos_meio - 1, x));

}


int busca_binaria(int vetor[], int tam, int x) {
    int inicio = 0;
    int fim = tam - 1;

    return busca_binaria_recursiva(vetor, inicio, fim, x);
}


int esta_ordenado(int vetor[], int tam) {

    for (int i = 0; i < tam - 1; i++) {
        if (vetor[i] > vetor[i+1]) return 0;
    }

    return 1;
}


void preencher_vetor(int vetor[], int tam) {
    for (int i = 0; i < tam; i++) {
        printf("Insira o elemento de v[%d]: ", i);
        scanf("%d", &vetor[i]);
    }
}



int main() {
    int tam, elemento_procurado, ordenado, elemento_foi_encontrado;

    printf("Insira o tamanho do vetor: ");
    scanf("%d", &tam);

    int *vetor = (int*)malloc(tam * sizeof(int));

    preencher_vetor(vetor, tam);


    printf("Agora, insira o elemento que deseja procurar: ");
    scanf("%d", &elemento_procurado);

    ordenado = esta_ordenado(vetor, tam);

    if (ordenado == 0) { // nn está ordenado
        insertion_sort(vetor, tam);
    }


    elemento_foi_encontrado = busca_binaria(vetor, tam, elemento_procurado);

    if (elemento_foi_encontrado == 1) {
        printf("O elemento de valor %d esta presente no vetor.", elemento_procurado);
    }
    else {
        printf("O elemento de valor %d nao esta presente no vetor.", elemento_procurado);
    }
    

    free(vetor);
    return 0;
}