import { Banqueiro } from "./banqueiro.js";
import { Recurso } from "./recurso.js";
import { Processo } from "./processo.js";
import { limparTela } from "./utils.js";

import PromptSync from "prompt-sync";
const input = PromptSync();

class App {
    private banqueiro: Banqueiro;

    constructor() {
        const recursos: Recurso[] = this.informarRecursos();
        const processos: Processo[] = this.informarProcessos(recursos);
        this.banqueiro = new  Banqueiro(recursos, processos);
    }

    private informarRecursos(): Recurso[] {
        let recursos: Recurso[] = [];
        let qtdDesseRecurso: number;
        let nome: string;
        let recurso: Recurso;
        let qtdRecursosExistentes: number = Number(input("Insira a quantidade de recursos: "));
    
        for (let i = 1; i <= qtdRecursosExistentes; i++) {
            limparTela();
            console.log(`=== Cadastro do ${i}° recurso ===\n`);
            nome = input(`Insira o nome do ${i}° recurso: `);
            console.log("\n");
            qtdDesseRecurso = Number(input(`Quantos(as) ${nome}(s) existem: `));
    
            recurso = new Recurso(nome, qtdDesseRecurso);
            recursos.push(recurso);
        }

        return recursos;
    }

    private informarProcessos(recursos: Recurso[]): Processo[] {
        let processos: Processo[] = [];
        let processoCriado: Processo;
        limparTela();
        let qtdProcessos: number = Number(input("Insira a quantidade de processos: "));
        
        for (let i = 1; i <= qtdProcessos; i++) {
            limparTela();
            console.log(`=== Cadastro do ${i}° processo ===\n`);
            processoCriado = this.criarProcesso(recursos);
            this.emprestarRecursos(processoCriado, recursos);
            processos.push(processoCriado);
        }

        return processos;
    }

    private criarProcesso(recursos: Recurso[]): Processo {
        let alocacao: number[] = [];
        let necessidade: number[] = [];
        let recurso: Recurso;
        let nomeRecurso: string;
        let qtdPossui: number, qtdNecessita: number;
    
        for (recurso of recursos) {
            nomeRecurso = recurso.getNome();
    
            qtdPossui = Number(input(`Quantos(as) ${nomeRecurso}(s) esse processo já possui? `)); 
    
            while (qtdPossui > recurso.getQtdDisponivel()) {
                console.log(`Erro: esse recurso só possui ${recurso.getQtdDisponivel()} unidades disponíveis.`);
                qtdPossui = Number(input(`Insira novamente quantos(as) ${nomeRecurso}(s) esse processo já possui: `));
            }
    
            qtdNecessita = Number(input(`Quantos(as) ${nomeRecurso}(s) esse processo ainda necessita para executar? `));
            console.log("\n");
                    
            alocacao.push(qtdPossui);
            necessidade.push(qtdNecessita);
        }
            
        return new Processo(alocacao, necessidade);
    }

    private emprestarRecursos(processo: Processo, recursos: Recurso[]): void {
        let recurso: Recurso;

        for (let i = 0; i < processo.alocacao.length; i++) {
            recurso = recursos[i]!;
            recurso.emprestar(processo.alocacao[i]!);
        }
    }

    
    main(): void {

        if (this.banqueiro.podeOcorrerDeadlock()) {
            console.log("Esse é um estado NÃO seguro: ocorre Deadlock");
        }
        else {
            console.log("Esse é um estado seguro: NÃO ocorre Deadlock");
        }

    }
}


let app: App = new App();
app.main();