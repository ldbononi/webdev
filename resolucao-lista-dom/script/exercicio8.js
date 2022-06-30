function removeLastButton() {

    //obtenho o container (pai) dos botões por meio do método querySelector, poderia ser getElementById
    let container = document.querySelector("#botoes");

    //obtenho os filhos desse elemento
    let buttons = container.children;

    //verifico se o tamanho é igual a 1, se for, não é possível remover o elemento, conforme especificado no exercício
    if (buttons.length == 1) {
        alert("Não é possível remover este botão, pois ele é o último.");
    } else {
        //faço a chamada do método removeChild para remover um elemento do pai (armazenado na variável container)
        container.removeChild(buttons[buttons.length - 1]);
    }

}