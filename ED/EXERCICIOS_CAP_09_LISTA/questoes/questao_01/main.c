#include <stdio.h>
#include <stdlib.h>
#include "lista_int.h"

// 9.1

int main() {
	
	Lista l = no(3,no(1,no(5,NULL)));
	exibe_inv(l);
	
	return 0;
}


