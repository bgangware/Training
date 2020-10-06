/* alert("Hello");
var myH1 = document.querySelector("h1");
myH1.style.color ="pink"; */
var body = document.querySelector("body");
var isBlue = false;

// window.setTimeout(function(){
 setInterval (function(){
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
 }, 1000);   
// alert("Hello");
/*  var h1 = document.querySelector("h1");
    h1.style.color ="pink";
*/
// },500);