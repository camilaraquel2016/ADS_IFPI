/*
6. Pesquise e exemplifique porque dizemos que a linguagem C, mesmo tendo
tipagem estática, possui tipagem fraca.

Resposta:

Ela possui tipagem fraca pois faz conversões automáticas entre tipos sem 
a intervenção explicíta do programador.
Isso pode resultar em comportamentos inesperados.

Mesmo com a verificação de tipos em tempo de compilação, a linguagem permite 
comportamentos que podem levar a erros e tempo de execução.

Exemplos de conversões que a linguagem C faz que a caracteriza como tendo tipagem fraca
*/

#include <stdio.h>

int main(){
	
	int a;
	
	a = 6.7;
	
	printf("%d", a);

}

/*
Imprime 6

Nesse exemplo declaramos (a) sendo um inteiro, mas depois atribuimos um float a essa
variável. O compilador então converte esse número real para 6, sem erro e sem avisar 
ao programador.

*/
