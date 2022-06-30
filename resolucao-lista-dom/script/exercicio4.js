function loadCidades(select) {
    
    let estado = select.value;

    let cidades = [];

    cidades.push(["Belo Horizonte", "Uberaba", "Araguari"]);
    cidades.push(["São Paulo", "Campinas", "São José do Rio Preto"]);
    cidades.push(["Rio de Janeiro", "Niterói", "Campus do Jordão"]);
    cidades.push(["Vitória", "Guarapari", "Outra"]);

    let estados = ["MG", "SP", "RJ", "ES"];

    let found = false;

    for (let i = 0; i < estados.length; i++) {
        if (estados[i] == estado) {
            found = true;
            
            let selectCidades = document.getElementById("cidades2");
            
            let op = document.createElement("option");
            op.setAttribute("value", "Escolha uma cidade");
            op.innerHTML = "Escolha uma cidade";
            
            selectCidades.innerHTML = op;
            selectCidades.style.display = "inline";

            for (let j = 0; j < cidades[i].length; j++) {
                
                let op = document.createElement("option");
                op.setAttribute("value", cidades[i][j]);
                op.innerHTML = cidades[i][j];
                selectCidades.appendChild(op);
            }
            
            break;
        }
    }

    if (!found) {
        document.getElementById("cidades2").style.display = "none";
    }

}

