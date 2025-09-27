"use strict";
// PARÂMETRO OPCIONAL
Object.defineProperty(exports, "__esModule", { value: true });
function retornarSaudacao1(nome, pronomeTratamento, genero) {
    if (pronomeTratamento == undefined) {
        if (genero == "F") {
            pronomeTratamento = "Sra";
        }
        else {
            pronomeTratamento = "Sr";
        }
    }
    return `${pronomeTratamento}. ${nome}`;
}
// PARÂMETRO DEFAULT
function retornarSaudacao2(nome, pronomeTratamento = "", genero = 'M') {
    if (pronomeTratamento == "") {
        if (genero == "F") {
            pronomeTratamento = "Sra";
        }
        else {
            pronomeTratamento = "Sr";
        }
    }
    return `${pronomeTratamento}. ${nome}`;
}
function main() {
    console.log(retornarSaudacao1("Camila", "Srta")); // Srta. Camila
    console.log(retornarSaudacao1("Camila", undefined, "F")); // Sra. Camila
    console.log(retornarSaudacao2("Camila", "Srta")); // Srta. Camila
    console.log(retornarSaudacao2("Camila", undefined, "F")); // Sra. Camila
    console.log(retornarSaudacao1("Ely", "Prof")); // Prof. Ely
    console.log(retornarSaudacao1("Ely", undefined, "M")); // Sr. Ely
    console.log(retornarSaudacao2("Ely", "Prof")); // Prof. Ely
    console.log(retornarSaudacao2("Ely", undefined, "M")); // Sr. Ely
}
main();
//# sourceMappingURL=q_02.js.map