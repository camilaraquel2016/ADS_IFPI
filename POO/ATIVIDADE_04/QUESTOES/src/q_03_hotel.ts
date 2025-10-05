class Hotel {
    quantReservas: number;

    constructor(quantReservas: number) {
        this.quantReservas = quantReservas >= 0 ? quantReservas : 0; // Caso o usuário informe uma quantidade negativa, vamos inicializar com um valor padrão 0
    }

    adicionarReserva(): void {
        this.quantReservas++;
    }
}


function main(): void {
    let hotel: Hotel = new Hotel(2);
    console.log(hotel.quantReservas);
}

main();