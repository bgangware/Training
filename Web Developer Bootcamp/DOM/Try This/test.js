window.setTimeout(function() {
alert("Hello");
var spanvar = document.querySelector("#testspan");
spanvar.textContent = "this worked";

spanvar.addEventListener("click",function() {
    console.log("span was clicked")
})


}, 500);