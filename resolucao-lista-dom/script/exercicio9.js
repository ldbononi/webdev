function concatText() {

    let text = document.querySelector("input[name='query']").value;

    if (!text) {
        alert("Você precisa informar algo para adicionar!");
    } else {
        document.querySelector("textarea").innerHTML += text.trim() + " ";
    }

}