/*7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo. Teste os métodos do
retângulo.

Resposta:
*/

class Retangulo{
    lado1: number = 0;
    lado2: number = 0;


    calcularArea(){
        return this.lado1 * this.lado2;
    }

    calcularPerimetro(){
        return this.lado1 * 2 + this.lado2 * 2;
    }

}

let retangulo1 = new Retangulo();

retangulo1.lado1 = 5;
retangulo1.lado2 = 9;

console.log(`Área do retângulo: ${retangulo1.calcularArea()}`);
console.log(`Perímetro do retângulo: ${retangulo1.calcularPerimetro()}`);
