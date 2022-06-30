function changeSemaphore(elem, action) {
    if (action == "add")
        elem.classList.add("on");
    else {
        elem.classList.remove("on");
    }
}