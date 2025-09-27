function retornarSaida(numeros: number[]): string {

    let saida = "";

    numeros.forEach(numero => saida+= `${numero} - `);

    return saida.slice(0, -3);
}


function main(): void {
    let numeros: number[] = [1, 5, 7, 10, 15, 19, 21, 24];
    console.log(retornarSaida(numeros));
}

main()

// ForEach: método usado em arrays para percorrer todos os elementos.
