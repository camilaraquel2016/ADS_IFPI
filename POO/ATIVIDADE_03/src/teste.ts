function somar(...numeros: number[]): number {
    let soma = 0;

    for (let numero of numeros){
        soma += numero;
    }

    return soma;
}

console.log(somar(1, 15, 56));