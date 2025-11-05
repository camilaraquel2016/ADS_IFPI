import { Cliente } from "./cliente.js";
// Ao criar uma conta precisamos informar um cliente, logo uma conta não pode ser criada sem um cliente
// ao remover um cliente do banco, as contas que pertenciam a ele, ficaram sem um cliente, logo o atributo cliente da classe conta será null
// apenas nesse caso a conta não terá um cliente
// além disso, uma vez que ela esteja com esse atributo como null, podemos atribuir um novo cliente a ela 
export class Conta {
    constructor(id, numero, saldo, cliente, dataAbertura) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
        this.dataAbertura = dataAbertura;
    }
    getId() {
        return this.id;
    }
    getNumero() {
        return this.numero;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(valor) {
        this.saldo = valor;
    }
    getCliente() {
        return this.cliente;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    getDataAbertura() {
        return this.dataAbertura;
    }
    sacar(valor) {
        if (valor <= this.getSaldo()) {
            this.setSaldo(this.getSaldo() - valor);
            return true;
        }
        return false;
    }
    depositar(valor) {
        this.setSaldo(this.getSaldo() + valor);
    }
    transferir(valor, contaDestino) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=conta.js.map