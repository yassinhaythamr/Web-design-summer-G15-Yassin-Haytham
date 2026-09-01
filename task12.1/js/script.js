var btn = document.getElementById("changeImg");
var img = document.getElementById("myImg");

btn.addEventListener("click", function () {

    if (img.src.includes("1.jpg")) {
        img.src = "images/2.jpg";
    } else {
        img.src = "images/1.jpg";
    }

});