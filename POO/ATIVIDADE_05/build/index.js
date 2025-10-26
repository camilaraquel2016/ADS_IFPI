import promptSync from "prompt-sync";
const prompt = promptSync();
import { menu, limpar, cadastrarCliente, criarContaParaCliente, depositar, gerenciarConsultasDeClientesPeloCpf, gerenciarConsultasDeContasPeloNumero, listarClientes, listarContas, sacar, transferir, totalizarSaldoCliente, associarUmClienteAUmaConta, enter_limpar } from "./utils.js";
import { Banco } from "./banco.js";
function main() {
    let banco = new Banco();
    let opcao = 1;
    while (opcao != 0) {
        console.log(menu());
        opcao = Number(prompt('  >> '));
        limpar();
        switch (opcao) {
            case 1:
                cadastrarCliente(banco);
                break;
            case 2:
                gerenciarConsultasDeClientesPeloCpf(banco);
                break;
            case 3:
                criarContaParaCliente(banco);
                break;
            case 4:
                depositar(banco);
                break;
            case 5:
                sacar(banco);
                break;
            case 6:
                listarClientes(banco);
                break;
            case 7:
                gerenciarConsultasDeContasPeloNumero(banco);
                break;
            case 8:
                listarContas(banco);
                break;
            case 9:
                transferir(banco);
                break;
            case 10:
                totalizarSaldoCliente(banco);
                break;
            case 11:
                associarUmClienteAUmaConta(banco);
                break;
        }
        enter_limpar();
    }
    console.log('Saindo...');
}
main();
//# sourceMappingURL=index.js.map