/*
A configuração target define para qual versão do JavaScript o código TypeScript
será transpilado 

ES3 é uma versão muito antiga.
Versões modenas do TypeScript não suportam mais ES3.

ES5 é uma versão antiga, mas ainda suportada por compiladores modernos.

Ao usar target: ES5, O TypeScript transpila classes em funções contrutoras, adiciona métodos ao
prototype e transforma algumas funcionalidades modernas em código compatível com navegadores antigos.




CÓDIGO-FONTE (pessoa.ts)

*/

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}


let pessoa1 = new Pessoa("Camila", 19);

console.log(pessoa1.apresentar());


/*

CÓDIGO TRANSPILADO PARA JS VERSÃO ATUAL
*/

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
let pessoa1 = new Pessoa("Camila", 19);
console.log(pessoa1.apresentar());
//# sourceMappingURL=pessoa.js.map

/*

CÓDIGO TRANSPILADO PARA JS VERSÃO ES5

*/

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        return "Meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos.");
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa("Camila", 19);
console.log(pessoa1.apresentar());
//# sourceMappingURL=pessoa.js.map


