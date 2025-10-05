"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hotel {
    quantReservas;
    constructor(quantReservas) {
        this.quantReservas = quantReservas >= 0 ? quantReservas : 0; // Caso o usuário informe uma quantidade negativa, vamos inicializar com um valor padrão 0
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
function main() {
    let hotel = new Hotel(2);
    console.log(hotel.quantReservas);
}
main();
//# sourceMappingURL=q_03_hotel.js.map