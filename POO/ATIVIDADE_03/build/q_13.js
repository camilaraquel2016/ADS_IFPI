"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TraduzirEmojis {
    dicionario = {
        "amor": "❤️ ",
        "sol": "☀️ ",
        "noite": "🌙 ",
        "estrela": "⭐"
    };
    traduzir(frase) {
        let palavras = frase.split(" ");
        palavras = palavras.map(palavra => this.dicionario[palavra] || palavra);
        return palavras.join(" ");
    }
}
function main() {
    const tradutor = new TraduzirEmojis();
    console.log(tradutor.traduzir("Brilhe como o sol mesmo nos dias mais nublados."));
    console.log(tradutor.traduzir("Mesmo na noite mais escura, siga olhando para as estrela ."));
    console.log(tradutor.traduzir("O amor de Deus é lindo."));
}
main();
//# sourceMappingURL=q_13.js.map