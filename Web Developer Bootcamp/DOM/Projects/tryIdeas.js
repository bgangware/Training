window.setTimeout(function() {
alert("Hello");
/* var testNum1 = 111;
var testNum2 = 999;
var H1var = document.querySelectorAll("span");
H1var[0].style.color = "red";
H1var[0].innerHTML = testNum1;
H1var[1].style.color = "green";
H1var[1].innerHTML = testNum2; */
Spanvar = document.querySelector("#span2");
Spanvar.style.color = "red";

Spanvar.addEventListener("click",function() {
    console.log("New Colors -- has been clicked");
    }) 

}, 500);