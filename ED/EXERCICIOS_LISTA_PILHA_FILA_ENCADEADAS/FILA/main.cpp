#include "fila.h"
#include <iostream>
using namespace std;

int main() {

    Fila *fila = new Fila();

    fila->append("Camila");
    fila->append("Maria");
    fila->append("Joao");
    fila->pop();
    fila->popAll();
    fila->pop();

}
