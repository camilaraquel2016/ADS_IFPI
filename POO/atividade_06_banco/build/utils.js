import input from "./input.js";
export function limparTela() {
    process.stdout.write('\x1Bc');
}
export function enterLimpar() {
    input("\nEnter para continuar...");
    limparTela();
}
//# sourceMappingURL=utils.js.map