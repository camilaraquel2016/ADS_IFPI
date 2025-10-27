#include <stdio.h>
#include <string.h>

int sao_iguais(char nome1[], char nome2[]) { // iguais retorna 1, diferentes retorna 0
    int i;

    for (i = 0; nome1[i] != '\0' && nome2[i] != '\0'; i++) {
        if (nome1[i] != nome2[i]) return 0;
    }
    if (nome1[i] != '\0' || nome2[i] != '\0') return 0;
    return 1;
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

    if (sao_iguais(nome1, nome2) == 1) {
        printf("%s == %s", nome1, nome2);
    }
    else {
        printf("%s != %s", nome1, nome2);
    }
}
