import { Banco } from "./banco.js";
import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
export function limpar() {
    console.clear();
}
export function enter_limpar() {
    prompt('Enter para continuar...');
    console.clear();
}
function saidaCliente(cliente) {
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
function saidaConta(conta) {
    const saida = `
    === Conta Brasil ===

    Id: ${conta.getId()}
    Número: ${conta.getNumero()}
    Saldo: R$${conta.getSaldo()}
    Data abertura: ${conta.getDataAbertura().toLocaleDateString("pt-BR")}
    Dono da conta (CPF): ${conta.getCliente().getCpf()}
    `;
    return saida;
}
export function menu() {
    const texto = `
    === BANCO BRASIL ===

    1  - Cadastrar cliente
    2  - Consultar cliente pelo CPF
    3  - Criar conta para cliente
    4  - Depositar
    5  - Sacar
    6  - Listar clientes
    7  - Consultar conta pelo número
    8  - Listar contas
    9  - Transferir
    10 - Totalizar saldo de um cliente
    11 - Associar um cliente a uma conta
    0  - Sair
    `;
    return texto;
}
export function cadastrarCliente(banco) {
    console.log('-=-=- CADASTRO DE CLIENTE -=-=-\n');
    let tentarNovamente = 'S';
    while (tentarNovamente == 'S') {
        const id = Number(prompt('ID: '));
        const cpf = prompt('CPF: ');
        const nome = prompt('Nome: ');
        console.log('Insira agora sua data de nascimento...');
        const dia = Number(prompt('Dia: '));
        const mes = Number(prompt('Mês: '));
        const ano = Number(prompt('Ano: '));
        const dataNascimento = new Date(ano, mes - 1, dia);
        console.log('\n');
        const cliente = new Cliente(id, nome, cpf, dataNascimento);
        try {
            banco.inserirCliente(cliente);
            console.log('Cliente cadastrado no banco com sucesso!\n');
            break;
        }
        catch (erro) {
            if (erro instanceof Error) {
                console.log(erro.message);
                tentarNovamente = prompt('\nDeseja tentar novamente? (S/N) ').toUpperCase();
            }
        }
    }
}
export function gerenciarConsultasDeClientesPeloCpf(banco) {
    let cpf;
    let clienteExiste;
    let continuar = 'S';
    while (continuar == 'S') {
        console.log('\n=== CONSULTA DE CLIENTE (CPF) ===');
        cpf = prompt('CPF: ');
        clienteExiste = banco.consultarClientePeloCpf(cpf);
        if (clienteExiste) {
            console.log(saidaCliente(clienteExiste));
        }
        else {
            console.log('\nEsse CPF não está associado a nenhum cliente do banco!');
        }
        continuar = prompt('\nDeseja continuar consultando clientes? (S/N) ').toUpperCase();
    }
}
export function gerenciarConsultasDeContasPeloNumero(banco) {
    let numConta;
    let contaExiste;
    let continuar = 'S';
    while (continuar == 'S') {
        console.log('\n=== CONSULTA DE CONTAS (NÚMERO) ===');
        numConta = prompt('Número da conta: ');
        contaExiste = banco.consultarContaPeloNumero(numConta);
        if (contaExiste) {
            console.log(saidaConta(contaExiste));
        }
        else {
            console.log('\nEsse número de conta não está associado a nenhuma conta do banco!');
        }
        continuar = prompt('\nDeseja continuar consultando contas? (S/N) ').toUpperCase();
    }
}
function obterClienteParaCriarConta(banco) {
    let tentarNovamente = 'S';
    while (tentarNovamente == 'S') {
        let cpf = prompt("\nInsira o CPF do cliente para qual a conta está sendo criada: ");
        let clienteExiste = banco.consultarClientePeloCpf(cpf);
        if (clienteExiste) {
            return clienteExiste;
        }
        else {
            console.log('O CPF fornecido não está associado a nenhum cliente!');
        }
        tentarNovamente = prompt("Deseja inserir outro CPF? (S/N) ").toUpperCase();
    }
    return null;
}
export function criarContaParaCliente(banco) {
    let tentarNovamente = 'S';
    console.log('\n=== CADASTRO DE CONTA ===');
    let clienteExiste = obterClienteParaCriarConta(banco);
    if (!clienteExiste) {
        console.log('\nOperação de criar conta cancelada por causa de CPF inexistente no banco!');
        return;
    }
    while (tentarNovamente == 'S') {
        const id = Number(prompt('ID: '));
        const numeroConta = prompt('Número da conta: ');
        const saldo = 0; // contas começam com saldo 0
        const dataAbertura = new Date();
        const cliente = clienteExiste;
        let conta = new Conta(id, numeroConta, saldo, cliente, dataAbertura);
        try {
            banco.inserirConta(conta);
            cliente.adicionarConta(conta);
            console.log('\nConta criada com sucesso!\n');
            return;
        }
        catch (erro) {
            if (erro instanceof Error) {
                console.log(erro.message);
                tentarNovamente = prompt('Deseja tentar novamente? (S/N) ').toUpperCase();
            }
        }
    }
}
export function depositar(banco) {
    let numConta;
    let valor;
    let tentarNovamente = 'S';
    console.log('=== DEPÓSITO ===');
    while (tentarNovamente == 'S') {
        numConta = prompt('Insira o número da conta: ');
        valor = Number(prompt("Valor a ser depositado: R$"));
        if (banco.depositar(numConta, valor)) {
            console.log('\nDepósito realizado com sucesso!');
            return;
        }
        console.log('\nO número de conta fornecido não está associado a nenhuma conta!');
        tentarNovamente = prompt('Deseja inserir outro número? (S/N) ').toUpperCase();
    }
    console.log('\nOperação de depositar cancelada por causa de número de conta inexistente no banco!');
}
export function listarClientes(banco) {
    const clientes = banco.getClientes();
    if (clientes.length == 0) {
        console.log('\nAinda não há clientes cadastrados no banco!\n');
    }
    else {
        console.log("\n=== LISTAGEM DE CLIENTES ===\n");
        clientes.forEach(cliente => { console.log(saidaCliente(cliente)); });
    }
}
export function listarContas(banco) {
    const contas = banco.getContas();
    if (contas.length == 0) {
        console.log('\nAinda não há contas cadastradas no banco!\n');
    }
    else {
        console.log('\n=== LISTAGEM DE CONTAS ===\n');
        contas.forEach(conta => { console.log(saidaConta(conta)); });
    }
}
export function sacar(banco) {
    let numConta;
    let valorSaque;
    let tentarNovamente = 'S';
    while (tentarNovamente == 'S') {
        console.log("\n === SAQUE ===\n");
        numConta = prompt('Número da conta: ');
        valorSaque = Number(prompt('Valor a ser retirado: '));
        try {
            banco.sacar(numConta, valorSaque);
            console.log('\nSaque realizado com sucesso!');
            return;
        }
        catch (erro) {
            if (erro instanceof Error) {
                console.log('\n');
                console.log(erro.message);
                tentarNovamente = prompt('\nDeseja tentar novamente? (S/N) ').toUpperCase();
            }
        }
    }
}
export function transferir(banco) {
    let numContaOrigem;
    let numContaDestino;
    let valor;
    let tentarNovamente = 'S';
    while (tentarNovamente == 'S') {
        console.log('\n=== TRANSFERÊNCIA ===\n');
        numContaOrigem = prompt('Número da conta de origem: ');
        numContaDestino = prompt('Número da conta de destino: ');
        valor = Number(prompt('Valor a ser transferido: R$'));
        try {
            banco.transferir(numContaOrigem, numContaDestino, valor);
            console.log('\nTransferência realizada com sucesso!');
            return;
        }
        catch (erro) {
            if (erro instanceof Error) {
                console.log('\n');
                console.log(erro.message);
                tentarNovamente = prompt('\nDeseja tentar novamente? (S/N) ').toUpperCase();
            }
        }
    }
}
export function totalizarSaldoCliente(banco) {
    let clienteExiste;
    let cpf;
    let tentarNovamente = 'S';
    while (tentarNovamente == 'S') {
        console.log('\n=== CONSULTA DE SALDO TOTAL DE UM CLIENTE ===\n');
        cpf = prompt('CPF: ');
        clienteExiste = banco.consultarClientePeloCpf(cpf);
        if (clienteExiste) {
            const contas = clienteExiste.getContas();
            const saldoTotal = contas.reduce((total, conta) => total + conta.getSaldo(), 0);
            console.log(`\nSaldo total desse cliente no banco Brasil: R$${saldoTotal}`);
            return;
        }
        else {
            console.log('\nEsse CPF não está associado a nenhum cliente!');
            tentarNovamente = prompt('\nDeseja tentar novamente? (S/N) ').toUpperCase();
        }
    }
}
export function associarUmClienteAUmaConta(banco) {
    let tentarNovamente = 'S';
    let cpf;
    let numConta;
    while (tentarNovamente == 'S') {
        console.log('\n=== ASSOCIAR CLIENTE A UMA CONTA ===\n');
        cpf = prompt('Insira o CPF do cliente: ');
        numConta = prompt('Insira o número da conta: ');
        try {
            banco.associarUmClienteAUmaConta(numConta, cpf);
            console.log('Cliente associado a conta com sucesso!');
            return;
        }
        catch (erro) {
            if (erro instanceof Error) {
                console.log('\n');
                console.log(erro.message);
                tentarNovamente = prompt('\nDeseja tentar novamente? (S/N) ').toUpperCase();
            }
        }
    }
}
//# sourceMappingURL=utils.js.map