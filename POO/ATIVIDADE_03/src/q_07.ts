function main(): void {
    const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const pares: number[] = array.filter(num => num % 2 == 0);

    console.log(pares);

}

main();