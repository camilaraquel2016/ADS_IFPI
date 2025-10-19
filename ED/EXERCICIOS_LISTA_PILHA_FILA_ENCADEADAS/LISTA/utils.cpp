#include "utils.h"
#include "lista.h"
#include <iostream>
using namespace std;

extern Lista* turma;

void menu_geral() {
    cout << "\n=== SISTEMA DE ALUNOS ===\n";
    cout << "1. Cadastrar aluno\n";
    cout << "2. Remover aluno\n";
    cout << "3. Listar turma\n";
    cout << "4. Sair\n \n";
    cout << ">> ";
}


void menu_cadastrar() {
    cout << "\n=== CADASTRO DE ALUNO ===\n";
    cout << "1. Cadastrar no inicio\n";
    cout << "2. Cadastrar no fim\n";
    cout << "3. Cadastrar ordenado\n";
    cout << "4. Voltar\n \n";
    cout << ">> ";
}

void cadastrar() {

    int opcao;

    do {
        menu_cadastrar();
        cin >> opcao;

        if (opcao == 1 || opcao == 2 || opcao == 3) {

            int mat;
            string nome;
            
            cout << "\nDigite a matricula: ";
            cin >> mat;
            cin.ignore();
            cout << "\nDigite o nome: ";
            getline(cin, nome);

            if (opcao == 1) {
                turma->add_inicio(mat, nome);
                cout << "\nAluno cadastrado no inicio da turma com sucesso!\n"; 
            }
            else if (opcao == 2) {
                turma->add_fim(mat, nome);
                cout << "\nAluno cadastrado no final da turma com sucesso!\n";
            }
            else {
                turma->addord(mat, nome);
                cout << "\nAluno cadastrado de forma ordenada na turma com sucesso!\n";
            }
        }

        else if (opcao != 4) {
            cout << "Opção inválida!\n";
        }
        
    } while(opcao != 4);

    cout << "\nVoltando...\n";
}


void remover() {
    int cod;

    cout << "\n=== REMOVER ALUNO ===\n";

    cout << "\nInsira a matricula do aluno que deseja remover: ";
    cin >> cod;

    if (turma->remover(cod)) {
        cout << "\nAluno removido com sucesso!\n";
    }
    else {
        cout << "\nAluno nao encontrado na turma!\n";
    }
}