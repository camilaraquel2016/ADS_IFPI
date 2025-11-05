import input from "./input.js";

export class Validador {
    
    static lerNumero(mensagem: string): number {
        let entrada = input(mensagem);
        let numero = Number(entrada);

        while (isNaN(numero)) {
            console.log(`\nEntrada inválida!\nO valor inserido deve ser um número, entretanto você inseriu "${entrada}".\n`);

            entrada = input(mensagem);
            numero = Number(entrada);
        }
        return numero;
    }

    static lerNumInteiro(mensagem: string): number {
        let numero = this.lerNumero(mensagem);

        while (!Number.isInteger(numero)) {
            console.log("\nEntrada inválida!\nO valor inserido deve ser um número inteiro!\n");

            numero = this.lerNumero(mensagem);
        }
        return numero;
    }

    static lerNumPositivo(mensagem: string): number {
        let numero = this.lerNumero(mensagem);

        while (numero < 0) {
            console.log("\nEntrada inválida!\nO valor inserido deve ser maior ou igual a 0!\n");

            numero = this.lerNumero(mensagem);
        }
        return numero;
    }

    static lerNumInteiroPositivo(mensagem: string): number {
        let numero = this.lerNumInteiro(mensagem);

        while (numero < 0) {
            console.log("\nEntrada inválida!\nAlém de ser inteiro, o valor deve ser positivo (maior ou igual a 0)\n");

            numero = this.lerNumInteiro(mensagem);
        }
        return numero;
    }

    static lerNumInteiroMaiorQue0(mensagem: string): number {
        let numero = this.lerNumInteiro(mensagem);

        while (numero <= 0) {
            console.log("\nEntrada inválida!\nAlém de ser inteiro, o valor deve ser maior que 0\n");

            numero = this.lerNumInteiro(mensagem);
        }
        return numero;
    }

    static lerApenasDuasOpcoes(opcao1: string, opcao2: string, mensagem: string): string {
        let entrada: string = input(mensagem).toUpperCase();
        
        while (entrada != opcao1.toUpperCase() && entrada != opcao2.toUpperCase()) {
            console.log(`\nEntrada inválida!\nO valor inserido deve ser "${opcao1}" ou "${opcao2}"\n`);

            entrada = input(mensagem).toUpperCase();
        }

        return entrada;
    }

    static lerNumLimiteMinMax(mensagem: string, limiteMin: number, limiteMax: number): number {
        let numero = this.lerNumInteiro(mensagem);

        while (numero < limiteMin || numero > limiteMax) {
            console.log(`\nEntrada inválida!\nO valor inserido deve estar entre ${limiteMin} e ${limiteMax}!\n`);

            numero = this.lerNumInteiro(mensagem);
        }
        
        return numero;
    }

    static lerTextoNaoVazio(mensagem: string): string {
        let entrada = input(mensagem).trim();

        while (entrada == "") {
            console.log("\nEntrada inválida!\nVocê inseriu uma entrada vazia!\n");

            entrada = input(mensagem).trim();
        }
        return entrada;
    }

    

}


