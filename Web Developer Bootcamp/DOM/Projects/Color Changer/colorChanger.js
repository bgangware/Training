alert("Hello");
var bodyvar = document.querySelector("body");
var buttonvar = document.querySelector("button")

bodyvar.style.background = "pink";

/* if (bodyvar.style.background == "pink") {
    console.log("background is pink");
} */

buttonvar.addEventListener("click",function() {
    console.log("button has been clicked");
    if (bodyvar.style.background == "pink") {
        bodyvar.style.background = "blue";
    }
    else if
    (bodyvar.style.background == "blue") {
        bodyvar.style.background = "pink";
    }


}


)