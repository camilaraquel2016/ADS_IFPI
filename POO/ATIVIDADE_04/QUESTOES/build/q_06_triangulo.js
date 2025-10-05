"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Triangulo {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ehTriangulo() {
        return this.a + this.b > this.c && this.b + this.c > this.a && this.a + this.c > this.b;
    }
    ehEquilatero() {
        if (!this.ehTriangulo())
            return false;
        return this.a == this.b && this.b == this.c;
    }
    ehIsoceles() {
        if (!this.ehTriangulo())
            return false;
        return this.a == this.b || this.a == this.c || this.b == this.c;
    }
    ehEscaleno() {
        if (!this.ehTriangulo())
            return false;
        return this.a != this.b && this.a != this.c && this.b != this.c;
    }
}
function main() {
    let t1 = new Triangulo(3, 8, 9);
    console.log(`É triângulo Isoceles: ${t1.ehIsoceles()}`);
    console.log(`É triângulo Escaleno: ${t1.ehEscaleno()}`);
    console.log(`É triângulo Equilátero: ${t1.ehEquilatero()}`);
}
main();
//# sourceMappingURL=q_06_triangulo.js.map