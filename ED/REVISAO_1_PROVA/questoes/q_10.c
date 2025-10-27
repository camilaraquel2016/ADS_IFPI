#include <stdio.h>
#include <string.h>
#include <locale.h>

typedef struct livro {
    int cod;
    char nome[30];
} Livro;

Livro livros[5];

int ultimo = 0;

void exibir_menu() {
    printf("\n=== CADASTRO DE LIVROS ===\n");
    printf("1 - Cadastrar livro ordenado pelo código\n");
    printf("2 - Cadastrar livro ordenado pelo nome\n");
    printf("3 - Listar livros\n");
    printf("4 - Sair\n");
    printf("\n>> ");
}

void listar_livros() {

    if (ultimo == 0) {
        printf("\nBiblioteca vazia!\n");
        return;
    }

    Livro livro;

    printf("\n");
    for (int i = 0; i < ultimo; i++) {
        livro = livros[i];
        printf("Cod: %d, Nome: %s\n", livro.cod, livro.nome);
    }
}

void inserir_ord_pelo_cod(Livro novo) {
    int pos;

    if (ultimo < 5) {

        if (ultimo == 0) {
            livros[0] = novo;
            ultimo++;
        }

        else {

            for (int i = 0; i < ultimo; i++) { 
                if (livros[i].cod > novo.cod) {
                    pos = i;

                    int i = ultimo;
                    while (i > pos) { 
                        livros[i] = livros[i-1];
                        i--;
                    }
                    livros[pos] = novo; 
                    ultimo++;
                    return;
                }   
            }
            livros[ultimo] = novo;
            ultimo++;
            return;
        }
    }

    else {
        printf("\nBiblioteca lotada!\n");
    }
}


void inserir_ord_pelo_nome(Livro novo) {
    if (ultimo >= 5) {
        printf("\nBiblioteca lotada!\n");
    }
    else if (ultimo == 0) {
        livros[0] = novo;
        ultimo++;
    }
    else {

        int pos;

        for (int i = 0; i < ultimo; i++) {
            if (strcmp(livros[i].nome, novo.nome) > 0) {
                pos = i; 

                for (int j = ultimo; j > pos; j--) {
                    livros[j] = livros[j-1];
                }
                livros[pos] = novo;
                ultimo++;
                return;
            }
        }
        livros[ultimo] = novo;
        ultimo++;
    }
}
 

Livro obter_livro() {
    Livro novo;
    int cod;
    char nome[50];

    printf("Insira o código: ");
    scanf("%d", &cod);
    getchar();

    printf("Insira o nome do livro: ");
    fgets(nome, sizeof(nome), stdin);

    nome[strcspn(nome, "\n")] = '\0';

    novo.cod = cod;
    strcpy(novo.nome, nome);

    return novo;
}

int main() {

    setlocale(LC_ALL, "Portuguese");

    Livro novo;
    int opcao, cod;
    char nome[50];

    
    do {
        exibir_menu();
        scanf("%d", &opcao);

        switch (opcao) {
        case 1:  
            novo = obter_livro();
            inserir_ord_pelo_cod(novo);
            printf("\nLivro cadastrado de forma ordenada pelo código!\n");
            break;
        case 2:
            novo = obter_livro();
            inserir_ord_pelo_nome(novo);
            printf("\nLivro cadastrado de forma ordenada pelo nome!\n");
            break;
        case 3:
            listar_livros();   
            break;; 
        }
        
    } while (opcao != 4);

    printf("Saindo...");
}