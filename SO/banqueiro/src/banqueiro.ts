import { Processo } from "./processo.js";
import { Recurso } from "./recurso.js";

export class Banqueiro {
    public recursos: Recurso[];
    public processos: Processo[];

    constructor(recursos: Recurso[], processos: Processo[]) {
        this.recursos = recursos;
        this.processos = processos;
    }

    podeOcorrerDeadlock(): boolean {

        while (this.processos.length > 0) {

            let foiExecutadoPeloMenosUm: boolean = false;

            for (let processo of this.processos) {

                if (this.processoPodeExecutar(processo)) {
                    this.devolverRecursos(processo);
                    this.removerProcesso(processo);
                    foiExecutadoPeloMenosUm = true;
                }

            }
            
            if (!foiExecutadoPeloMenosUm) return true;
        }

        return false;
    }

    private removerProcesso(processo: Processo): void {
        let indiceOndeProcessoEsta: number = this.processos.findIndex(p => p.getId() == processo.getId());

        if (indiceOndeProcessoEsta > -1) {
            this.processos.splice(indiceOndeProcessoEsta, 1);
        }
    }

    private devolverRecursos(processo: Processo): void {
        let qtdPossui: number;
        let recurso: Recurso;

        for (let i = 0; i < processo.alocacao.length; i++) {
            recurso = this.recursos[i]!;
            qtdPossui = processo.alocacao[i]!;

            recurso.devolver(qtdPossui);
        } 
    }

    private processoPodeExecutar(processo: Processo): boolean {
        for (let i = 0; i < processo.necessidade.length; i++) {
            if (processo.necessidade[i]! > this.recursos[i]!.getQtdDisponivel()) return false;
        }
        
        return true;
    }
}


