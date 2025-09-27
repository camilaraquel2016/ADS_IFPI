function ehPar(numero: number): boolean {
    return numero % 2 == 0;
}

function main(): void {

    let num1: number = 1;
    let num2: number = 2;

    console.log(`Número ${num1} é par? ${ehPar(num1)}`);
    console.log(`Número ${num2} é par? ${ehPar(num2)}`);
     
}

main()

