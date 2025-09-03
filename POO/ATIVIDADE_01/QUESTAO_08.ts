/*8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
ao raio e exiba a área e o perímetro chamando os dois métodos definidos.

Resposta:
*/

class Circulo {
    raio: number = 0;

    calcularArea(){
        return 3.14 * this.raio ** 2;
    }

    calcularPerimetro(){
        return 2 * 3.14 * this.raio;
    }
}


let circulo1 = new Circulo();

circulo1.raio = 5;

console.log(`Área do círculo: ${circulo1.calcularArea()}`);
console.log(`Perímetro do círculo: ${circulo1.calcularPerimetro()}`);

