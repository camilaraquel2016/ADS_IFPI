#include "lista.h"
#include "utils.h"
#include <iostream>
using namespace std;

Lista* turma = new Lista();

int main() {
   
    int opcao;

    do {
        menu_geral();
        cin >> opcao;

        if (opcao == 1) {
            cadastrar();
        }
        else if(opcao == 2) {
            remover();
        }
        else if (opcao == 3) {
            turma->mostrar();
        }
        else if (opcao != 4) {
            cout << "\nOpcao invalida!\n";
        }

    } while (opcao != 4);

    cout << "Saindo...";
    return 0;     
}



