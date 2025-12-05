import { Processo } from "./processo.js";
import { Recurso } from "./recurso.js";
export class Banqueiro {
    recursos;
    processos;
    constructor(recursos, processos) {
        this.recursos = recursos;
        this.processos = processos;
    }
    podeOcorrerDeadlock() {
        while (this.processos.length > 0) {
            let foiExecutadoPeloMenosUm = false;
            for (let processo of this.processos) {
                if (this.processoPodeExecutar(processo)) {
                    this.devolverRecursos(processo);
                    this.removerProcesso(processo);
                    foiExecutadoPeloMenosUm = true;
                }
            }
            if (!foiExecutadoPeloMenosUm)
                return true;
        }
        return false;
    }
    removerProcesso(processo) {
        let indiceOndeProcessoEsta = this.processos.findIndex(p => p.getId() == processo.getId());
        if (indiceOndeProcessoEsta > -1) {
            this.processos.splice(indiceOndeProcessoEsta, 1);
        }
    }
    devolverRecursos(processo) {
        let qtdPossui;
        let recurso;
        for (let i = 0; i < processo.alocacao.length; i++) {
            recurso = this.recursos[i];
            qtdPossui = processo.alocacao[i];
            recurso.devolver(qtdPossui);
        }
    }
    processoPodeExecutar(processo) {
        for (let i = 0; i < processo.necessidade.length; i++) {
            if (processo.necessidade[i] > this.recursos[i].getQtdDisponivel())
                return false;
        }
        return true;
    }
}
//# sourceMappingURL=banqueiro.js.map