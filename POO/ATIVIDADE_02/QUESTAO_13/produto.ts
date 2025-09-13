class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        if (!nome){
            throw new Error("O nome do produto não pode ser vazio.");
        }

        if (preco <= 0){
            throw new Error("O preço do produto dever ser positivo.");
        }

        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(percentualDesconto: number): number{
        if (percentualDesconto < 0 || percentualDesconto > 100){
            console.log(`Desconto inválido (${percentualDesconto}%).`)
            return this.preco;
        }

        const desconto = percentualDesconto * this.preco / 100;
        return this.preco - desconto;
    }

    emitirOrcamento(percentualDesconto: number): string {
        if (percentualDesconto < 0 || percentualDesconto > 100){
            return `Não é possível emitir o orçamento: Desconto inválido (${percentualDesconto}%)`; 
        }

        const precoComDesconto = this.aplicarDesconto(percentualDesconto);
        const precoFormatado = this.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        const precoComDescontoFormatado = precoComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        
        return `
        Produto: ${this.nome}, Preço: ${precoFormatado}
        Desconto: ${percentualDesconto.toFixed(1)}% --> Novo preço: ${precoComDescontoFormatado}
        `;
    }
}


function criarProduto(nome: string, preco: number): Produto | null{
    try {
        return new Produto(nome, preco);
    }
    catch (erro) {
        console.log(`Erro ao criar o produto: ${(erro as Error).message}`);
        return null;
    }
}


function main(){
    let produto1 = criarProduto("Celular", 1500);

    if (produto1){
        console.log(produto1.emitirOrcamento(10));
    }

    else {
        console.log("Esse produto não foi criado, logo não é possível emitir seu orçamento");
    }
}

main();

