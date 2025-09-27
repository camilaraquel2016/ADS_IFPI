class Autenticacao {
    usuario: string;
    senha: string;

    constructor(usuario: string, senha: string){
        this.usuario = usuario;
        this.senha = senha;
    }

    validar = (): boolean => this.usuario == "admin" && this.senha == "1234";
}


function main(): void {

    let usuario1 = new Autenticacao("Camila", "2121");
    let usuario2 = new Autenticacao("admin", "1234");

    console.log(`O usuário 1 tem permissão? ${usuario1.validar()}`);
    console.log(`O usuário 2 tem permissão? ${usuario2.validar()}`);
}

main()