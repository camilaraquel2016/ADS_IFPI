import input from "./input.js";

export function limparTela(): void {
    process.stdout.write('\x1Bc'); 
}

export function enterLimpar(): void {
    input("\nEnter para continuar...");
    limparTela();
}

