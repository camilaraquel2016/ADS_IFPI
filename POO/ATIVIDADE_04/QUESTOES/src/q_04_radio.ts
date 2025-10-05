/*

Aconteceu um erro de compilação porque no momento de instânciar o objeto,
o parâmetro obrigatório "volume" não foi passado como argumento.

Solução: Passar o argumento exigido no momento da criação de um objeto da classe Radio

*/


class Radio {
    volume: number;

    constructor(volume: number) {
        this.volume = volume;
    }
}

function main(): void {
    // let r: Radio = new Radio(); antes, sem passar o argumento

    let r: Radio = new Radio(6); // solução: passar o argumento exigido pelo construtor
    
    r.volume = 10;
}

main();

