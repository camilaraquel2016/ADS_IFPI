"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    id;
    num;
    saldo;
    constructor(id, numDaConta, saldoInicial) {
        this.id = id;
        this.num = numDaConta;
        this.saldo = saldoInicial;
    }
    getId() {
        return this.id;
    }
    getNum() {
        return this.num;
    }
    setNum(num) {
        this.num = num;
    }
    getSaldo() {
        return this.saldo;
    }
    sacar(valor) {
        if (this.getSaldo() - valor < 0)
            return false;
        this.saldo -= valor;
        return true;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}
function main() {
    let camila = new Conta(1, "123-1", 300);
    let maria = new Conta(2, "216-5", 450);
    camila.sacar(301);
    console.log(camila.getSaldo());
    camila.transferir(maria, 300);
    console.log(camila.getSaldo());
    console.log(maria.getSaldo());
}
main();
//# sourceMappingURL=q_08_conta.js.map