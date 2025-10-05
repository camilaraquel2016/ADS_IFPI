class Triangulo {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    ehTriangulo(): boolean {
        return this.a + this.b > this.c && this.b + this.c > this.a && this.a + this.c > this.b;
    }

    ehEquilatero(): boolean {
        if (!this.ehTriangulo()) return false;
        return this.a == this.b && this.b == this.c;   
    }

    ehIsoceles(): boolean {
        if (!this.ehTriangulo()) return false; 
        return this.a == this.b || this.a == this.c ||this.b == this.c; 
    }

    ehEscaleno(): boolean {
        if (!this.ehTriangulo()) return false; 
        return this.a != this.b && this.a != this.c && this.b != this.c;
    }
}


function main(): void {

    let t1 = new Triangulo(3, 8, 9);

    console.log(`É triângulo Isoceles: ${t1.ehIsoceles()}`);
    console.log(`É triângulo Escaleno: ${t1.ehEscaleno()}`);
    console.log(`É triângulo Equilátero: ${t1.ehEquilatero()}`);
}

main();