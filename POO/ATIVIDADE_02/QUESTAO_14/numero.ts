class Numero {
    valor: number;

    constructor(valor: number){
        this.valor = valor;
    }

    ehPar(): boolean{
        return this.valor % 2 === 0;
    }

    ehImpar(): boolean{
        return Math.abs(this.valor % 2) === 1;
    }
}


function main(){
    let n1 = new Numero(1);
    let n2 = new Numero(2);
    let n3 = new Numero(-3);
    
    console.log(`Número ${n1.valor} é par: ${n1.ehPar()}`);
    console.log(`Número ${n1.valor} é ímpar: ${n1.ehImpar()}\n`);

    console.log(`Número ${n2.valor} é par: ${n2.ehPar()}`);
    console.log(`Número ${n2.valor} é ímpar: ${n2.ehImpar()}\n`);

    console.log(`Número ${n3.valor} é par: ${n3.ehPar()}`);
    console.log(`Número ${n3.valor} é ímpar: ${n3.ehImpar()}`);
}    

main();
