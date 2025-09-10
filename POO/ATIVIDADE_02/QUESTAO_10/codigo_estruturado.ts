function exibirFrase(nome: string, salario: number, linguagem: string): void {
    console.log(`${nome}
My payment time is ${salario.toFixed(2)}
and
my preffered language is ${linguagem}`);
}


function main(): void {
    const nome: string = "Ely";
    const salario: number = 2000;
    const linguagem: string = "TypeScript";

    exibirFrase(nome, salario, linguagem);
}

main();
