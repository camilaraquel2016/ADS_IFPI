class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}


let pessoa1 = new Pessoa("Camila", 19);

pessoa1.apresentar();

