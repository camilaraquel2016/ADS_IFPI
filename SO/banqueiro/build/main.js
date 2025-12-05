import { Banqueiro } from "./banqueiro.js";
function main() {
    let b = new Banqueiro();
    if (b.podeOcorrerDeadlock()) {
        console.log("Esse é um estado NÃO seguro: ocorre Deadlock");
    }
    else {
        console.log("Esse é um estado seguro: NÃO ocorre Deadlock");
    }
}
main();
//# sourceMappingURL=main.js.map