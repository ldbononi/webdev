function addButton() {

    let lastBtn = document.getElementById("botoes").children;
    let btnLastIdx = lastBtn.length - 1;

    let id = lastBtn[btnLastIdx].id;
    id = id.replace("bt-", "");
    id = (parseInt(id) + 1);

    let bt = document.createElement("button");
    bt.setAttribute("id", "bt-" + id);
    bt.innerHTML = "Botão " + id;

    bt.addEventListener("click", addButton);

    document.getElementById("botoes").appendChild(bt);
}