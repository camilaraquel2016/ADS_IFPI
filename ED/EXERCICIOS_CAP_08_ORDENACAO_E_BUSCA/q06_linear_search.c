#include <stdio.h>
#include <stdlib.h>

int linar_sercher_recursiva(int v[], int tam, int x, int i) {
    if (i >= tam) return 0;
    if (v[i] == x) return 1;

    linar_sercher_recursiva(v, tam, x, i + 1);
}


int linear_seacher(int v[], int tam, int x) {
    int i = 0;

    return linar_sercher_recursiva(v, tam, x, i);
}


void preencher_vetor(int vetor[], int tam) {
    for (int i = 0; i < tam; i++) {
        printf("Insira o elemento de v[%d]: ", i);
        scanf("%d", &vetor[i]);
    }
}




int main() {
    int tam;
    int x;

    printf("Insira o tamanho do vetor: ");
    scanf("%d", &tam);

    printf("Insira o elemento que deseja procurar: ");
    scanf("%d", &x);


    int *vetor = (int*)malloc(tam * sizeof(int));

    preencher_vetor(vetor, tam);

    int encontrou = linear_seacher(vetor, tam, x);

    if (encontrou == 1) {
        printf("O elemento %d esta no vetor", x);
    }
    else {
        printf("O elemento %d nao esta no vetor.", x);
    }

    return 0;





    

}