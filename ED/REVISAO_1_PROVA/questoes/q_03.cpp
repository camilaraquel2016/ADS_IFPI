#include <iostream>
#include <string>

using namespace std;

int main() {
    string nome1;
    string nome2;

    cout << "Digite o primeiro nome: ";
    getline(cin, nome1);

    cout << "Digite o segundo nome: ";
    getline(cin, nome2);

    if (nome1 == nome2) {
        cout << "Sao iguais!";
    }
    else {
        cout << "Sao diferentes";
    }

    return 0;
}