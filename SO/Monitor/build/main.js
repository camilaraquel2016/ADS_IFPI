import { Livro } from "./livro.js";
import { Monitor } from "./monitor.js";
async function main() {
    console.log("=== SEM MONITOR ===\n");
    const livro1 = new Livro("Algoritmos", 1);
    console.log(`Antes dos empréstimos: Livro "${livro1.titulo}" possui ${livro1.qtdDisponivel} exemplares disponíveis\n`);
    await Promise.all([
        livro1.emprestarNaoSeguro(),
        livro1.emprestarNaoSeguro()
    ]);
    console.log(`\nApós os empréstimos: Livro "${livro1.titulo}" possui ${livro1.qtdDisponivel} exemplares disponíveis\n`);
    console.log("\n=== COM MONITOR ===\n");
    const livro2 = new Livro("Sistemas Operacionais", 1);
    console.log(`Antes dos empréstimos: Livro "${livro2.titulo}" possui ${livro2.qtdDisponivel} exemplares disponíveis\n`);
    await Promise.all([
        livro2.emprestrarSeguro(),
        livro2.emprestrarSeguro()
    ]);
    console.log(`\nApós os empréstimos: Livro "${livro2.titulo}" possui ${livro2.qtdDisponivel} exemplares disponíveis\n`);
}
main();
//# sourceMappingURL=main.js.map