// alert("Hello");
/* var tagfl = document.getElementById("highlight");
console.log(tagfl); */
window.setTimeout(function() {
    var tag = document.getElementById("highlight");
    tag.classList.add("someClass");
    // tag.style.color = "blue";
    // tag.style.border = "10px solid red";
    // tag.style.fontSize = "70px";
    // tag.style.background = "yellow";
    // tag.style.marginTop = "200px";
}, 500);