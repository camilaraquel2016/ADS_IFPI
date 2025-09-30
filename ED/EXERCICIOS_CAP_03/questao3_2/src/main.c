#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#include "pilha_char.h"
#include "pilha_float.h"
#include <string.h>


int prioridade(char oper){
	if (oper == '*' || oper == '/') return 2;
	else if (oper == '+' || oper == '-') return 1;
	return 0;
}


void infixa_para_posfixa(char *infixa, char *posfixa){
	  
	Pilha_char p = criar_pilha_char(256);
	
	int i, k;
	
	k = 0;
	
	for (i = 0; infixa[i] != '\0'; i++){
		
		char c = infixa[i];
		char prox = infixa[i+1];
		
		if (c == '(') {
			empilha_char(c, p);
		}
		
		else if (isdigit(c) || c == '.' || (c == '-' && ( i == 0 || infixa[i-1] == '(' && isdigit(prox)))) {
			
			posfixa[k++] = c;
		}
		 
		else if (strchr("*/+-", c)) {
			posfixa[k++] = ' ';
			
			while(!vazia_char(p) && prioridade(topo_char(p)) >= prioridade(c)){
				posfixa[k++] = desempilha_char(p);
				posfixa[k++] = ' ';
			}
			empilha_char(c, p);	
		}
		
		else if (c == ')') { 
		
			while (topo_char(p) != '('){
				posfixa[k++] = ' ';
				posfixa[k++] = desempilha_char(p);
			}
			
			desempilha_char(p);
		}		
	}
	
	while(!vazia_char(p)) {
		posfixa[k++] = ' ';
		posfixa[k++] = desempilha_char(p);
		
	}
	
	posfixa[k] = '\0';
	destroi_pilha_char(&p);
}


float calcular(float a, float b, char operador){
	switch (operador){
		case '+': return a + b;
		case '-': return a - b;
		case '*': return a * b;
		case '/':
			if (b == 0.0f) {
				printf("Erro: divisão por zero!\n");
				exit(1);
			}
		    return a / b;
		default:
			printf("Erro: operador inválido '%c'\n", operador);  
			exit(1);  
		  
	}
}


float obter_valor_final(char *posfixa){
	
	Pilha_float p = criar_pilha_float(256);
	
	char *token = strtok(posfixa, " ");
	
	while (token != NULL){
		
		if (strchr("+-*/", token[0]) && strlen(token) == 1){
			float b = desempilha_float(p);
			float a = desempilha_float(p);
			
			char operador = token[0];
			
			float resultado = calcular(a, b, operador);
			
			empilha_float(resultado, p);
		}
		
		else {
			float num = atof(token);
			empilha_float(num, p);
		}
		
		token = strtok(NULL, " ");	
	}
	
	float valor_final = desempilha_float(p);
	destroi_pilha_float(&p);
	return valor_final;	
}


int main() {
	
	setlocale(LC_ALL, "Portuguese");
	setlocale(LC_NUMERIC, "C");
	
	char infixa[256];
	char posfixa[256];
	
	printf("Insira a expressão na notação infixa: ");
	
	fgets(infixa, sizeof(infixa), stdin);
	
	infixa[strcspn(infixa, "\n")] = '\0';
	
	infixa_para_posfixa(infixa, posfixa);
	
	printf(" \nPosfixa: %s\n \n", posfixa);
	
	float resultado = obter_valor_final(posfixa);
	
	printf("Resultado: %f\n", resultado);
	
	return 0;
}


 









