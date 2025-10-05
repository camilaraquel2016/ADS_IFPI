"use strict";
/*

Aconteceu um erro de compilação porque no momento de instânciar o objeto,
o parâmetro obrigatório "volume" não foi passado como argumento.

Solução: Passar o argumento exigido no momento da criação de um objeto da classe Radio

*/
Object.defineProperty(exports, "__esModule", { value: true });
class Radio {
    volume;
    constructor(volume) {
        this.volume = volume;
    }
}
function main() {
    // let r: Radio = new Radio(); antes, sem passar o argumento
    let r = new Radio(6); // solução: passar o argumento exigido pelo construtor
    r.volume = 10;
}
main();
//# sourceMappingURL=q_04_radio.js.map