function exibirFrase(nome: string, salario: number, linguagem: string): void {
    console.log(`${nome}
My payment time is ${salario.toFixed(2)}
and
my preffered language is ${linguagem}`);
}


function main(): void {
    let nome: string = "Ely";
    let salario: number = 2000;
    let linguagem: string = "TypeScript";

    exibirFrase(nome, salario, linguagem);
}

main();
