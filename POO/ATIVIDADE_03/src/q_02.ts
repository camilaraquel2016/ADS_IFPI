// PARÂMETRO OPCIONAL

function retornarSaudacao1(nome: string, pronomeTratamento?: string, genero?: "M" | "F"): string {

    if (pronomeTratamento == undefined) {
        if (genero == "F"){
            pronomeTratamento = "Sra"
        }
        else {
            pronomeTratamento = "Sr"
        }
    }

    return `${pronomeTratamento}. ${nome}`;
}

// PARÂMETRO DEFAULT

function retornarSaudacao2(nome: string, pronomeTratamento: string = "", genero: "M" | "F" = 'M'): string {

    if (pronomeTratamento == ""){
        if (genero == "F"){
            pronomeTratamento = "Sra";
        }
        else {
            pronomeTratamento = "Sr";
        }
    }

    return `${pronomeTratamento}. ${nome}`;
}


function main(): void {

    console.log(retornarSaudacao1("Camila", "Srta")); // Srta. Camila
    console.log(retornarSaudacao1("Camila", undefined, "F")); // Sra. Camila

    console.log(retornarSaudacao2("Camila", "Srta")); // Srta. Camila
    console.log(retornarSaudacao2("Camila", undefined, "F")); // Sra. Camila

    console.log(retornarSaudacao1("Ely", "Prof")); // Prof. Ely
    console.log(retornarSaudacao1("Ely", undefined, "M")); // Sr. Ely

    console.log(retornarSaudacao2("Ely", "Prof")); // Prof. Ely
    console.log(retornarSaudacao2("Ely", undefined, "M")); // Sr. Ely
    
}

main()