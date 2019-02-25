function pdf_viewer_transition() {
    var x = document.getElementById("pdf_viewer");
    var y = document.getElementById("pdf_button");

    if (x.style.height === "0px") {
        x.style.height = "950px";
        x.style.transition = "height 2s";
        y.innerText = "Klik om CV te verbergen";
    } else {
        x.style.height = "0px";
        x.style.transition = "height 2s";
        y.innerText = "Klik om CV te tonen";
    }
}