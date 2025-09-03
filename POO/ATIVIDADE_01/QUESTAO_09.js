/*9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado calcularSaldo() que retorna/calcula a
diferença entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize
os dois atributos e exiba o resultado do método calcularSaldo().

Resposta:
*/

class SituacaoFinanceira{
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    calcularSaldo(){
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacaoFinanceira1 = new SituacaoFinanceira();

situacaoFinanceira1.valorCreditos = 1000;
situacaoFinanceira1.valorDebitos = 750;

console.log(`Saldo: ${situacaoFinanceira1.calcularSaldo()}`);
