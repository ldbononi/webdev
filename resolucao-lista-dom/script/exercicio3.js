function loadCidade(select) {
    if (select.value) {
        document.getElementById("cidades").style.display = "inline";
    } else {
        document.getElementById("cidades").style.display = "none";
    }

}