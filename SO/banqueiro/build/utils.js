import PromptSync from "prompt-sync";
const input = PromptSync();
export function limparTela() {
    process.stdout.write('\x1Bc');
}
export function enterLimpar() {
    input("Enter para continuar...");
    limparTela();
}
//# sourceMappingURL=utils.js.map