import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";
import { Banco } from "./banco.js";
import { Validador } from "./validador.js";
import { limparTela, enterLimpar } from "./utils.js";
export class App {
    constructor() {
        this.banco = new Banco();
    }
    menuPrincipal() {
        this.banco.carregarDados();
        let opcao;
        do {
            console.log("\n-=- MENU PRINCIPAL -=-\n");
            console.log("1 - Conta\n2 - Cliente\n3 - Sair");
            opcao = Validador.lerNumLimiteMinMax("\nInsira a opção: ", 1, 3);
            limparTela();
            switch (opcao) {
                case 1:
                    this.menuContas();
                    break;
                case 2:
                    this.menuClientes();
                    break;
            }
        } while (opcao != 3);
        console.log("Saindo...");
    }
    menuClientes() {
        let opcao;
        do {
            console.log("\n -=-MENU CLIENTES-=- \n");
            console.log("20 - Cadastrar");
            console.log("21 - Consultar pelo CPF");
            console.log("22 - Associar a uma conta");
            console.log("23 - Excluir");
            console.log("24 - Listar");
            console.log("25 - Totalizar saldo");
            console.log("26 - Voltar");
            opcao = Validador.lerNumLimiteMinMax("\nInsira a opção: ", 20, 26);
            limparTela();
            switch (opcao) {
                case 20:
                    this.cadastrarCliente();
                    break;
                case 21:
                    this.gerenciarConsultasDeClientePeloCpf();
                    break;
                case 22:
                    this.associarClienteAUmaConta();
                    break;
                case 23:
                    this.excluirCliente();
                    break;
                case 24:
                    this.listarClientes();
                    break;
                case 25:
                    this.totalizarSaldoDeCliente();
                    break;
            }
            enterLimpar();
        } while (opcao != 26);
    }
    menuContas() {
        let opcao;
        do {
            console.log("\n -=-MENU CONTAS-=- \n");
            console.log("01 - Cadastrar");
            console.log("02 - Consultar pelo número");
            console.log("03 - Sacar");
            console.log("04 - Depositar");
            console.log("05 - Excluir");
            console.log("06 - Transferir");
            console.log("07 - Mudar titularidade");
            console.log("08 - Listar");
            console.log("09 - Ordem bancária");
            console.log("10 - Quantidade de contas");
            console.log("11 - Total depositado em todas as contas");
            console.log("12 - Média do saldo das contas");
            console.log("13 - Listar contas sem cliente");
            console.log("14 - Voltar");
            opcao = Validador.lerNumLimiteMinMax("\nInsira a opção: ", 1, 14);
            limparTela();
            switch (opcao) {
                case 1:
                    this.cadastrarConta();
                    break;
                case 2:
                    this.gerenciarConsultasDeContaPeloNumero();
                    break;
                case 3:
                    this.sacar();
                    break;
                case 4:
                    this.depositar();
                    break;
                case 5:
                    this.excluirConta();
                    break;
                case 6:
                    this.transferir();
                    break;
                case 7:
                    this.mudarTitularidade();
                    break;
                case 8:
                    this.listarContasDoBanco();
                    break;
                case 9:
                    this.ordemBancaria();
                    break;
                case 10:
                    this.exibirQtdContasDoBanco();
                    break;
                case 11:
                    this.exibirTotalSaldoDasContasDoBanco();
                    break;
                case 12:
                    this.exibirMediaDeSaldoDasContasDoBanco();
                    break;
                case 13:
                    this.gerenciarContasSemCliente();
                    break;
            }
            enterLimpar();
        } while (opcao != 14);
    }
    cadastrarCliente() {
        let tentarNovamente = "S";
        while (tentarNovamente == "S") {
            limparTela();
            console.log("-=- CADASTRO DE CLIENTE -=-\n");
            const id = Validador.lerNumInteiroMaiorQue0("ID: ");
            const cpf = Validador.lerTextoNaoVazio("CPF: ");
            const nome = Validador.lerTextoNaoVazio("Nome: ");
            console.log("\nInsira agora sua data de nascimento...\n");
            const dia = Validador.lerNumLimiteMinMax("Dia: ", 1, 31);
            const mes = Validador.lerNumLimiteMinMax("Mês: ", 1, 12);
            const ano = Validador.lerNumLimiteMinMax("Ano: ", 1900, 3000);
            const dataNascimento = new Date(ano, mes - 1, dia);
            const cliente = new Cliente(id, cpf, nome, dataNascimento);
            try {
                this.banco.inserirCliente(cliente);
                console.log("\nCliente cadastrado com sucesso no banco!\n");
                break;
            }
            catch (erro) {
                if (erro instanceof Error) {
                    console.log(erro.message);
                    tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
                }
            }
        }
    }
    saidaCliente(cliente) {
        const saida = `
    === Cliente Brasil ===

    Id: ${cliente.getId()}
    CPF: ${cliente.getCpf()}
    Nome: ${cliente.getNome()}
    Data Nascimento: ${cliente.getDataNascimento().toLocaleDateString("pt-BR")}
    Quantidade de contas: ${cliente.getContas().length}
    `;
        return saida;
    }
    gerenciarConsultasDeClientePeloCpf() {
        let continuar = "S";
        let cpf;
        let clienteExiste;
        while (continuar == "S") {
            limparTela();
            console.log("-=- CONSULTA DE CLIENTE (CPF) -=-\n");
            cpf = Validador.lerTextoNaoVazio("CPF: ");
            clienteExiste = this.banco.consultarClientePeloCpf(cpf);
            if (clienteExiste) {
                console.log(this.saidaCliente(clienteExiste));
            }
            else {
                console.log("\nEsse CPF não está associado a nenhum cliente do banco!");
            }
            continuar = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja continuar consultando clientes? (S/N) ");
        }
    }
    excluirCliente() {
        let continuar = "S";
        let clienteExiste;
        let cpf;
        let excluir;
        while (continuar == "S") {
            limparTela();
            console.log("-=- REMOÇÃO DE CLIENTE-=-\n");
            cpf = Validador.lerTextoNaoVazio("CPF: ");
            clienteExiste = this.banco.consultarClientePeloCpf(cpf);
            if (clienteExiste) {
                console.log(this.saidaCliente(clienteExiste));
                excluir = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja excluir esse cliente? (S/N) ");
                if (excluir == "S") {
                    this.banco.excluirCliente(clienteExiste);
                    console.log("\nCliente excluído com sucesso!");
                }
            }
            else {
                console.log("\nEsse CPF não está associado a nenhum cliente!");
            }
            continuar = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja continuar excluindo cliente? (S/N) ");
        }
    }
    associarClienteAUmaConta() {
        let tentarNovamente = "S";
        let cpf;
        let numConta;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("-=- ASSOCIAR CLIENTE A UMA CONTA -=- \n");
            cpf = Validador.lerTextoNaoVazio("CPF: ");
            numConta = Validador.lerTextoNaoVazio("\nNúmero da conta: ");
            try {
                this.banco.associarClienteAConta(cpf, numConta);
                console.log(`\nCliente de CPF (${cpf}) associado a conta de número (${numConta}) com sucesso!`);
                break;
            }
            catch (erro) {
                if (erro instanceof Error) {
                    console.log(erro.message);
                    tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
                }
            }
        }
    }
    listarClientes() {
        if (this.banco.getClientes().length == 0) {
            console.log("\nAinda não há clientes cadastrados no banco!\n");
        }
        else {
            console.log("\n-=- LISTAGEM DE CLIENTES -=-\n");
            this.banco.getClientes().forEach(c => { console.log(this.saidaCliente(c)); });
        }
    }
    tentarObterClienteParaCriarConta() {
        let cpf;
        let tentarNovamente = "S";
        let clienteExiste;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("\n-=- CADASTRO DE CONTA (procurando cliente) -=-");
            cpf = Validador.lerTextoNaoVazio("\nInsira o CPF do cliente para qual a conta está sendo criada: ");
            clienteExiste = this.banco.consultarClientePeloCpf(cpf);
            if (clienteExiste) {
                return clienteExiste;
            }
            else {
                console.log("\nO CPF fornecido não está associado a nenhum cliente do banco!");
                tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja inserir outro CPF? (S/N) ");
            }
        }
        return null;
    }
    cadastrarConta() {
        let tentarNovamente = "S";
        let clienteObtido;
        clienteObtido = this.tentarObterClienteParaCriarConta();
        if (!clienteObtido) {
            limparTela();
            console.log("\nOperação de criar conta cancelada por causa de CPF inexistente no banco!\n");
            return;
        }
        while (tentarNovamente == "S") {
            limparTela();
            console.log("\n-=- CADASTRO DE CONTA (informações da conta) -=-\n");
            const id = Validador.lerNumInteiroMaiorQue0("ID: ");
            const numero = Validador.lerTextoNaoVazio("Número da conta: ");
            const saldo = 0; // por padrão começam com saldo 0
            const dataAbertura = new Date();
            let conta = new Conta(id, numero, saldo, clienteObtido, dataAbertura);
            try {
                this.banco.inserirConta(conta);
                console.log("\nConta criada com sucesso!");
                return;
            }
            catch (erro) {
                if (erro instanceof Error) {
                    console.log(erro.message);
                    tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
                }
            }
        }
    }
    totalizarSaldoDeCliente() {
        let tentarNovamente = "S";
        let cpf;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("\n-=- TOTALIZAÇÃO DE SALDO -=-\n");
            cpf = Validador.lerTextoNaoVazio("CPF: ");
            try {
                let saldoTotal = this.banco.totalizarSaldoCliente(cpf);
                console.log(`\nO cliente de CPF (${cpf}) tem um saldo total de R$${saldoTotal}`);
                return;
            }
            catch (erro) {
                if (erro instanceof Error) {
                    console.log(erro.message);
                    tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja inserir outro CPF? (S/N) ");
                }
            }
        }
    }
    saidaConta(conta) {
        let dono = conta.getCliente();
        let identificadorCliente;
        if (dono) {
            identificadorCliente = `Dono da conta (CPF): ${dono.getCpf()}`;
        }
        else {
            identificadorCliente = "Sem cliente asssociado";
        }
        const saida = `
    === Conta Brasil ===

    Id: ${conta.getId()}
    Número: ${conta.getNumero()}
    Saldo: R$${conta.getSaldo()}
    Data abertura: ${conta.getDataAbertura().toLocaleDateString("pt-BR")}
    ${identificadorCliente}
    `;
        return saida;
    }
    gerenciarConsultasDeContaPeloNumero() {
        let continuar = "S";
        let numeroConta;
        let conta;
        while (continuar == "S") {
            limparTela();
            console.log("-=- CONSULTA DE CONTAS (NÚMERO) -=-\n");
            numeroConta = Validador.lerTextoNaoVazio("Número da conta: ");
            conta = this.banco.consultarContaPeloNumero(numeroConta);
            if (conta) {
                console.log(this.saidaConta(conta));
            }
            else {
                console.log("\nO número de conta fornecido não está associado a nenhuma conta!");
            }
            continuar = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja continuar consultando contas? (S/N) ");
        }
    }
    listarContasDoBanco() {
        if (this.banco.getContas().length == 0) {
            console.log("\nAinda não há nenhuma conta cadastrada!");
        }
        else {
            console.log("\n-=- LISTAGEM DE CONTAS -=-\n");
            this.banco.getContas().forEach(c => { console.log(this.saidaConta(c)); });
        }
    }
    sacar() {
        let tentarNovamente = "S";
        let numeroconta;
        let valor;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("-=- SAQUE -=-\n");
            numeroconta = Validador.lerTextoNaoVazio("Número da conta: ");
            valor = Validador.lerNumPositivo("Valor: R$");
            try {
                this.banco.sacar(numeroconta, valor);
                console.log(`\nSaque no valor de R$${valor} efetuado com sucesso!`);
                break;
            }
            catch (erro) {
                if (erro instanceof Error) {
                    console.log(erro.message);
                    tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
                }
            }
        }
    }
    depositar() {
        let tentarNovamente = "S";
        let numeroConta;
        let valor;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("-=- DEPÓSITO -=-\n");
            numeroConta = Validador.lerTextoNaoVazio("Número da conta: ");
            valor = Validador.lerNumPositivo("Valor: R$");
            try {
                this.banco.depositar(numeroConta, valor);
                console.log(`\nDepósito no valor de R$${valor} realizado com sucesso!`);
                break;
            }
            catch (erro) {
                if (erro instanceof Error) {
                    console.log(erro.message);
                    tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
                }
            }
        }
    }
    transferir() {
        let tentarNovamente = "S";
        let numContaOrigem;
        let numContaDestino;
        let valor;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("-=- TRANSFERÊNCIA -=-\n");
            numContaOrigem = Validador.lerTextoNaoVazio("Número conta de origem: ");
            numContaDestino = Validador.lerTextoNaoVazio("Número conta de destino: ");
            valor = Validador.lerNumPositivo("Valor a ser transferido: R$");
            try {
                this.banco.transferir(numContaOrigem, numContaDestino, valor);
                console.log(`\nTranferência no valor de R$${valor} realizada com sucesso.`);
                break;
            }
            catch (erro) {
                if (erro instanceof Error) {
                    console.log(erro.message);
                    tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
                }
            }
        }
    }
    tentarObterContaDestino() {
        let tentarNovamente = "S";
        let contaDestino = undefined;
        let numConta;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("-=-   EXCLUSÃO DE CONTA    -=-\n");
            console.log("-=- PROCURAR CONTA DESTINO -=-\n");
            numConta = Validador.lerTextoNaoVazio("Número da conta: ");
            contaDestino = this.banco.consultarContaPeloNumero(numConta);
            if (contaDestino) {
                break;
            }
            else {
                console.log("\nConta destino não encontrada.");
                tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
            }
        }
        return contaDestino;
    }
    tentarObterConta() {
        let tentarNovamente = "S";
        let conta = undefined;
        let numConta;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("-=- EXCLUSÃO DE CONTA -=-\n");
            console.log("-=-  PROCURAR CONTA   -=-\n");
            numConta = Validador.lerTextoNaoVazio("Número da conta: ");
            conta = this.banco.consultarContaPeloNumero(numConta);
            if (conta) {
                break;
            }
            else {
                console.log("\nConta não encontrada.");
                tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
            }
        }
        return conta;
    }
    excluirConta() {
        const conta = this.tentarObterConta();
        if (!conta) {
            limparTela();
            console.log("\nOpereração de excluir conta cancelada (número de conta inválido)");
            return;
        }
        const valorPresenteNaConta = conta.getSaldo();
        if (valorPresenteNaConta > 0) {
            console.log(`\nSua conta ainda possui um saldo no valor de R$${valorPresenteNaConta}.`);
            console.log("\nPara continuar a operação de excluir conta você deve ou sacar ou transferir esse valor presente.");
            console.log("\n1 - Sacar\n2 - Transferir\n3 - Cancelar operação");
            const opcao = Validador.lerNumLimiteMinMax("\nInsira sua opção: ", 1, 3);
            switch (opcao) {
                case 1: {
                    this.banco.sacar(conta.getNumero(), valorPresenteNaConta);
                    console.log(`Saque no valor de R$${valorPresenteNaConta} realizado com sucesso.`);
                    break;
                }
                case 2:
                    const contaDestino = this.tentarObterContaDestino();
                    if (!contaDestino) {
                        console.log("\nOpereração de excluir conta cancelada (número de conta destino inválido)");
                        return;
                    }
                    this.banco.transferir(conta.getNumero(), contaDestino.getNumero(), valorPresenteNaConta);
                    console.log(`\nTransferência no valor de R$${valorPresenteNaConta} realizada com sucesso.`);
                    break;
                case 3:
                    console.log("\nOperação de excluir conta cancelada pelo usuário.");
                    return;
            }
        }
        this.banco.excluirConta(conta);
        console.log(`\nConta excluída com sucesso.`);
    }
    mudarTitularidade() {
        let tentarNovamente = "S";
        let numConta;
        let cpf;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("-=- MUDANÇA DE TITULARIDADE -=-\n");
            numConta = Validador.lerTextoNaoVazio("Número da conta: ");
            cpf = Validador.lerTextoNaoVazio("\nCPF do novo titular: ");
            try {
                this.banco.associarClienteAConta(cpf, numConta);
                console.log("\nTitularidade alterada com sucesso.");
                return;
            }
            catch (erro) {
                if (erro instanceof Error) {
                    console.log(erro.message);
                    tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
                }
            }
        }
    }
    tentarObterContaOrigemParaOrdemBancaria() {
        let tentarNovamente = "S";
        let contaOrigem;
        let numConta;
        while (tentarNovamente == "S") {
            limparTela();
            console.log("-=- ORDEM BANCÁRIA (procurando conta de origem) -=-\n");
            numConta = Validador.lerTextoNaoVazio("Número da conta: ");
            contaOrigem = this.banco.consultarContaPeloNumero(numConta);
            if (contaOrigem) {
                break;
            }
            else {
                console.log("\nConta não encontrada.");
                tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
            }
        }
        return contaOrigem;
    }
    ordemBancaria() {
        let numContasDestino = [];
        const contaOrigem = this.tentarObterContaOrigemParaOrdemBancaria();
        if (!contaOrigem) {
            console.log("\nOperação de ordem bancarária cancelada (número de conta origem inexistente)");
            return;
        }
        limparTela();
        console.log("-=- ORDEM BANCÁRIA (procurando contas destino) -=-\n");
        const qtdEstimadaDeContas = Validador.lerNumInteiroMaiorQue0("Quantidade de contas: ");
        const valorIndividual = Validador.lerNumPositivo("\nInsira o valor a ser transferido individualmente para cada conta: R$");
        if (qtdEstimadaDeContas * valorIndividual > contaOrigem.getSaldo()) {
            console.log("\nSaldo insuficiente para essa transferência múltipla.");
            return;
        }
        limparTela();
        console.log("-=- ORDEM BANCÁRIA (procurando contas destinos) -=-\n");
        let contaEncontrada;
        let qtdContasEncontradas = 0;
        let opcao = 1;
        while (opcao == 1) {
            contaEncontrada = this.banco.consultarContaPeloNumero(Validador.lerTextoNaoVazio(`Número da ${qtdContasEncontradas + 1}° conta: `));
            if (contaEncontrada) {
                if (!numContasDestino.includes(contaEncontrada.getNumero())) {
                    numContasDestino.push(contaEncontrada.getNumero());
                    qtdContasEncontradas++;
                }
                else
                    console.log("\nEssa conta já faz parte das contas destino dessa transferência específica.");
            }
            else
                console.log("\nConta não encontrada.\n");
            if (qtdContasEncontradas == qtdEstimadaDeContas)
                break;
            console.log("\n1 - Continuar inserindo contas\n2 - Finalizar inserção\n");
            opcao = Validador.lerNumLimiteMinMax("\nSua opção: ", 1, 2);
        }
        this.banco.transferenciaMultipla(contaOrigem, numContasDestino, valorIndividual);
        console.log("\nOrdem bancária realizada com sucesso.");
    }
    exibirQtdContasDoBanco() {
        console.log(`\nQuantidade de contas presentes no banco: ${this.banco.obterQtdContas()}`);
    }
    exibirTotalSaldoDasContasDoBanco() {
        console.log(`\nSaldo total das contas do banco: R$${this.banco.obterSaldoTotalDasConta()}`);
    }
    exibirMediaDeSaldoDasContasDoBanco() {
        console.log(`\nMédia de saldo das contas do banco ${this.banco.obterMediaDosSaldos()}`);
    }
    tentarObterClienteParaAtribuirTitularidade() {
        let tentarNovamente = "S";
        let cpf;
        let clienteProcurado;
        while (tentarNovamente == "S") {
            limparTela();
            console.log(" -=- ATRIBUINDO TITULARIDADE PARA CONTA SEM CLIENTE (procurando cliente)");
            cpf = Validador.lerTextoNaoVazio("CPF: ");
            clienteProcurado = this.banco.consultarClientePeloCpf(cpf);
            if (clienteProcurado)
                break;
            else {
                console.log("\nCliente não encontrado.");
                tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
            }
        }
        return clienteProcurado;
    }
    tentarObterContaParaAtribuirTitularidade() {
        let tentarNovamente = "S";
        let numConta;
        let contaProcurada;
        while (tentarNovamente == "S") {
            limparTela();
            console.log(" -=- ATRIBUINDO TITULARIDADE PARA CONTA SEM CLIENTE (procurando conta)");
            numConta = Validador.lerTextoNaoVazio("\nNúmero da conta: ");
            contaProcurada = this.banco.consultarContaPeloNumero(numConta);
            if (contaProcurada)
                break;
            else {
                console.log("\nConta não encontrada na lista de contas sem cliente.");
                tentarNovamente = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja tentar novamente? (S/N) ");
            }
        }
        return contaProcurada;
    }
    gerenciarContasSemCliente() {
        const contasSemClientes = this.banco.obterContasSemClientes();
        if (contasSemClientes.length == 0) {
            console.log("\nNenhuma conta sem cliente.");
            return;
        }
        console.log("\n-=- CONTAS SEM CLIENTE -=-\n");
        contasSemClientes.forEach(c => console.log(this.saidaConta(c)));
        const opcao = Validador.lerApenasDuasOpcoes("S", "N", "\nDeseja atribuir titularidade a algumas dessas contas? (S/N) ");
        if (opcao == "S") {
            const conta = this.tentarObterContaParaAtribuirTitularidade();
            if (!conta) {
                console.log("\nOperação cancelada (falta de uma conta válida).");
                return;
            }
            const cliente = this.tentarObterClienteParaAtribuirTitularidade();
            if (!cliente) {
                console.log("\nOperação cancelada (falta de um cliente válido).");
                return;
            }
            conta.setCliente(cliente);
            cliente.adicionarConta(conta);
            console.log(`\nOperação realizada com sucesso!\n \nAgora a titularidade da conta de número (${conta.getNumero()}) pertence ao cliente de CPF (${cliente.getCpf()})`);
        }
    }
}
let app1 = new App();
app1.menuPrincipal();
//# sourceMappingURL=app.js.map