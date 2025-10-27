#include <stdio.h>
#include <string.h>

int sao_iguais(char nome1[20], char nome2[20]) {
    return strcmp(nome1, nome2);
}

int main() {
    char nome1[20];
    char nome2[20];

    printf("Insira o primeiro nome: ");
    fgets(nome1, sizeof(nome1), stdin);
    nome1[strcspn(nome1, "\n")] = '\0';

    printf("Insira o segundo nome: ");
    fgets(nome2, sizeof(nome2), stdin);
    nome2[strcspn(nome2, "\n")] = '\0';
   

    if (sao_iguais(nome1, nome2) == 0) {
        printf("Sao iguais!");
    }
    else {
        printf("Sao diferentes!");
    }
}