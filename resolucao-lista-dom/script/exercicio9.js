function concatText() {

    let text = document.querySelector("input[name='query']").value.trim();

    if (!text) {
        alert("Você precisa informar algo para adicionar!");
    } else {
        document.querySelector("textarea").innerHTML += text + " ";
    }

}
