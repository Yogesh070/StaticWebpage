function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var btndata = document.getElementById("dark-light-btn");
    if (btndata.innerHTML == "Dark mode") {
        btndata.innerHTML = "Light mode";
        btndata.style.backgroundColor = "white";
        btndata.style.color = "black";
    } else {
        btndata.innerHTML = "Dark mode";
        btndata.style.backgroundColor = "black";
        btndata.style.color = "white";
    }

}