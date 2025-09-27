"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Autenticacao {
    usuario;
    senha;
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
    }
    validar = () => this.usuario == "admin" && this.senha == "1234";
}
function main() {
    let usuario1 = new Autenticacao("Camila", "2121");
    let usuario2 = new Autenticacao("admin", "1234");
    console.log(`O usuário 1 tem permissão? ${usuario1.validar()}`);
    console.log(`O usuário 2 tem permissão? ${usuario2.validar()}`);
}
main();
//# sourceMappingURL=q_10.js.map