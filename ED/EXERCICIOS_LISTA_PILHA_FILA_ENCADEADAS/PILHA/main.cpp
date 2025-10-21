#include "pilha.h"
#include "iostream"

using namespace std;

int main() {
    Pilha *p = new Pilha();

    p->push("Camila");
    p->push("Ariele");

    while(!p->isEmpty()) {
        cout << "Elemento: " << p->pop() << endl;
    }
}