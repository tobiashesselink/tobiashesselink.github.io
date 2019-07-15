function pdf_viewer_transition() {
    var x = document.getElementById("pdf_viewer");
    var y = document.getElementById("pdf_button");

    if (x.style.height === "0px") {
        x.style.height = "850px";
        x.style.width = "100%";
        x.style.transition = "height 2s";
        y.innerText = "Inklappen";
    } else {
        x.style.height = "0px";
        x.style.width = "100%";
        x.style.transition = "height 2s";
        y.innerText = "Uitklappen";
    }
}