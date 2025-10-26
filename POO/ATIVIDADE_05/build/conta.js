import { Cliente } from "./cliente.js";
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
        if (this.getSaldo() >= valor) {
            this.setSaldo(this.getSaldo() - valor);
            return true;
        }
        return false;
    }
    depositar(valor) {
        this.setSaldo(this.getSaldo() + valor);
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=conta.js.map