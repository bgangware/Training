// alert("Hello");


window.setTimeout(function() {

    var button1 = document.querySelector("button");
    var par = document.querySelector("p");
    var h1var = document.querySelector("h1");

    button1.addEventListener("click", function() {
        par.textContent = "Someone clicked the button"
    });
    h1var.addEventListener("click", function() {
        alert("Someone clicked the title")
    });
    h1var.addEventListener("click", function() {
        h1var.style.background = "orange";
    });
    var livar = document.querySelectorAll("li")
    for (let i = 0; i < livar.length; i++) {
        livar[i].addEventListener("click",function() {
            this.style.color = "pink";
        })
        console.log(livar[i]);
      }
      


}, 500);