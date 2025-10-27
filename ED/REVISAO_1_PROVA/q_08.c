#include <stdio.h>

int x(char *str) {
    int y = 0;

    while (*str) {
        y++;
        str++;
    }

    return y;
}

int main() {
    char str[] = "Hello World";

    int w = x(str);

    printf("%d\n", w);

    return 0;
}

// será impresso a quantidade de caracteres de uma string, nesse caso 11 caracteres.

// função x percorre a string até o final, ou seja, até o caractere '\0' e vai
// incrementando a variável y. quando chegar em '\0' o while é encerrado e a função retorna y.