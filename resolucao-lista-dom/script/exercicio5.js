function changeSemaphoreStyleOn(elem) {

    let clazz = elem.getAttribute("class");

    if (clazz == "alert") {
        elem.style.backgroundColor = "red";
    } else if (clazz == "warning") {
        elem.style.backgroundColor = "orange";
    } else if (clazz == "free") {
        elem.style.backgroundColor = "green";
    }

}

function changeSemaphoreStyleOff(elem) {
    elem.style.backgroundColor = "gray";
}