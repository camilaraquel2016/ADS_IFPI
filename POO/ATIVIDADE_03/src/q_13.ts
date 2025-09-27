class TraduzirEmojis {
    dicionario: {[palavra: string]: string} = {
        "amor": "❤️ ",
        "sol": "☀️ ",
        "noite": "🌙 ",
        "estrela": "⭐"
    };


    traduzir(frase: string): string {
        let palavras = frase.split(" ");

        palavras = palavras.map(palavra => this.dicionario[palavra] || palavra);

        return palavras.join(" ");
    }
}


function main(): void {
    const tradutor = new TraduzirEmojis();

    console.log(tradutor.traduzir("Brilhe como o sol mesmo nos dias mais nublados."));

    console.log(tradutor.traduzir("Mesmo na noite mais escura, siga olhando para as estrela ."));

    console.log(tradutor.traduzir("O amor de Deus é lindo."));
}

main();