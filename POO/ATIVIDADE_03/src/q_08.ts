function main(): void {

    let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    numeros = numeros.map(numero => numero * 2);

    const soma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

    console.log(`Soma dos números após cada um ter seu valor dobrado: ${soma}`);

}

main();