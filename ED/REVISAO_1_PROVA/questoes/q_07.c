#include <stdio.h>

void x(char *str1, char *str2) {
    while (*str1) {
        str1++;
    }

    while (*str2) {
        *str1 = *str2;
        str1++;
        str2++;
    }

    *str1 = '\0';
}

int main() {
    char str1[100] = "Hello ";
    char str2[] = "World!";

    x(str1, str2);

    printf("%s\n", str1);

    return 0;
}

// será impresso: Hello World!

// a função x faz uma concatenação: recebe str1, percorre 
// até o final e a partir disso cada posição de str1 vai receber uma posição de str2.

// no final str1 será a junção dela mesmo com str2.


