class Conta {
    private id: number;
    private num: string;
    private saldo: number;

    constructor(id: number, numDaConta: string, saldoInicial: number) {
        this.id = id;
        this.num = numDaConta;
        this.saldo = saldoInicial;

    }

    getId(): number {
        return this.id;
    }

    getNum(): string {
        return this.num;
    }

    setNum(num: string): void {
        this.num = num;
    }

    getSaldo(): number {
        return this.saldo;
    }

    sacar(valor: number): boolean {
        if (this.getSaldo() - valor < 0) return false;
        this.saldo -= valor; 
        return true;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }

        return false;
    }
}


function main(): void {

    let camila: Conta = new Conta(1, "123-1", 300);
    let maria: Conta = new Conta(2, "216-5", 450);

    camila.sacar(301);

    console.log(camila.getSaldo());

    camila.transferir(maria, 300);

    console.log(camila.getSaldo());
    console.log(maria.getSaldo());
}

main();