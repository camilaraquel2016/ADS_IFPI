/* rest parameter permite que uma função receba uma quantidade
variável de argumentos e os trate como um array.
*/


function exibir(...letras: string[]): void {
    letras.forEach(letra => console.log(letra));
}


function main(): void {
    exibir("a");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");

}

main();