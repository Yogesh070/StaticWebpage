function changesign() {
    var element = document.getElementById("plus");
    // console.log(element.classList);
    // console.log(element.classList[1]);
    if (element.classList[1] == "fa-plus") {
        element.classList.remove("fa-plus");
        element.classList.add("fa-minus");
    } else {
        element.classList.remove("fa-minus");
        element.classList.add("fa-plus");
    }
}

function changesign1() {
    var element = document.getElementById("plus1");
    if (element.classList[1] == "fa-plus") {
        element.classList.remove("fa-plus");
        element.classList.add("fa-minus");
    } else {
        element.classList.remove("fa-minus");
        element.classList.add("fa-plus");
    }
}

function changesign2() {
    var element = document.getElementById("plus2");
    if (element.classList[1] == "fa-plus") {
        element.classList.remove("fa-plus");
        element.classList.add("fa-minus");
    } else {
        element.classList.remove("fa-minus");
        element.classList.add("fa-plus");
    }
}