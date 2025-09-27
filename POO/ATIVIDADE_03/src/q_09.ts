function sortearNome(nomes: string[]): string {
    if (nomes.length == 0){
        throw new Error("Array vazio!");
    }

    const indice = Math.floor(Math.random() * nomes.length)
    return nomes[indice]!;
}


function main(): void {
    const nomes: string[] = ["Ana", "Bruno", "Carlos"];

    try {
        const escolhido = sortearNome(nomes);
        console.log(`Nome sorteado: ${escolhido}`);
    }
    catch (error) {
        console.log("Não foi possível sortear um nome.\nErro:", (error as Error).message);
    }    
}

main();