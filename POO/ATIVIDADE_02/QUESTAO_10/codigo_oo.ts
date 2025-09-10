class Programador {
    nome: string;
    salario: number;
    linguagemPreferida: string;

    constructor(nome: string, salario: number, linguagemPreferida: string){
        this.nome = nome;
        this.salario = salario;
        this.linguagemPreferida = linguagemPreferida;
    }

    apresentar(): void {
        console.log(`${this.nome}
My payment time is ${this.salario.toFixed(2)}
and
my preffered language is ${this.linguagemPreferida}`);
    }
}


function main(): void {
    const nome: string = "Ely";
    const salario: number = 2000;
    const linguagemPreferida: string = "TypeScript";

    const programador1 = new Programador(nome, salario, linguagemPreferida);

    programador1.apresentar();
}

main();
